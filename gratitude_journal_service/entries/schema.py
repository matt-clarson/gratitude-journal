import graphene
from graphql import GraphQLError
from graphene_django import DjangoObjectType
import logging, random

from .models import Entry
from users.schema import UserType
from common.utils import get_authenticated_user, LogAndRaise

logger = logging.getLogger(__name__)
errorLogger = LogAndRaise(logger)

class EntryType(DjangoObjectType):
    class Meta:
        model = Entry

class CreateEntry(graphene.Mutation):
    id = graphene.Int()
    content = graphene.String()
    created = graphene.types.datetime.DateTime()
    posted_by = graphene.Field(UserType)

    class Arguments:
        content = graphene.String()

    def mutate(self, info, content):
        logger.info('Received request to create new entry')
        user = get_authenticated_user(info)
        entry = Entry(content=content, posted_by=user)
        entry.save()
        logger.info('New entry created')

        return CreateEntry(
            id = entry.id,
            content = entry.content,
            created = entry.created,
            posted_by=user
        )

class DeleteEntry(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        id = graphene.Int()

    def mutate(self, info, id):
        logger.info(f'Received request to delete entry with id "{id}"')
        user = get_authenticated_user(info)

        try:
            entry = user.entry_set.get(id=id)
            entry.delete()
        except Entry.DoesNotExist:
            errorLogger.logAndRaise(GraphQLError, f'Cannot find entry with id "{id}" to delete it')

        logger.info('Deleted entry')
        return DeleteEntry(id=id)


class Query(graphene.ObjectType):
    my_entries = graphene.List(EntryType)
    random_entry = graphene.Field(EntryType)

    def resolve_my_entries(self, info):
        logger.info('Received request to view all owned entries')
        user = get_authenticated_user(info)
        logger.info(f'Returning all entries owned by {user.username}')
        return user.entry_set.all()

    def resolve_random_entry(self, info):
        logger.info('Received request to get a random entry')
        user = get_authenticated_user(info)
        user_entries = user.entry_set.all()
        logger.info(f'Returning random entry owned by {user.username}')
        return random.choice(user_entries)

class Mutation(graphene.ObjectType):
    create_entry = CreateEntry.Field()
    delete_entry = DeleteEntry.Field()
