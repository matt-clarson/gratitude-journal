import graphene
from graphql import GraphQLError
from graphene_django import DjangoObjectType
import random

from .models import Entry
from users.schema import UserType
from common.utils import get_authenticated_user

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
        user = get_authenticated_user(info)
        entry = Entry(content=content, posted_by=user)
        entry.save()

        return CreateEntry(
            id = entry.id,
            content = entry.content,
            created = entry.created,
            posted_by=user
        )

class Query(graphene.ObjectType):
    entries = graphene.List(EntryType)
    my_entries = graphene.List(EntryType)
    random_entry = graphene.Field(EntryType)

    def resolve_entries(self, info):
        return Entry.objects.all()

    def resolve_my_entries(self, info):
        user = get_authenticated_user(info)
        return user.entry_set.all()

    def resolve_random_entry(self, info):
        user = get_authenticated_user(info)
        user_entries = user.entry_set.all()
        return random.choice(user_entries)

class Mutation(graphene.ObjectType):
    create_entry = CreateEntry.Field()
