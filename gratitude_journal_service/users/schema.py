from django.contrib.auth import get_user_model
from django.db import IntegrityError
import logging

from graphql import GraphQLError
import graphene
from graphql_jwt.utils import jwt_payload, jwt_encode
from graphene_django import DjangoObjectType
from common.utils import get_authenticated_user, LogAndRaise

logger = logging.getLogger(__name__)
errorLogger = LogAndRaise(logger)

class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()

class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)
    token = graphene.String()

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, **kwargs):
        logging.info('Received request to create new user')
        user, created = get_user_model().objects.get_or_create(
                username = kwargs['username'],
                email = kwargs['email']
        )
        if not created:
            errorLogger.logAndRaise(
                GraphQLError,
                f"Username \"{kwargs['username']}\" already exists - try using a different one",
                f"Attempt to use existing username {kwargs['username']}"
            )
        user.set_password(kwargs['password'])
        user.save()

        logger.debug('generating JWT')
        user_payload = jwt_payload(user)
        jwt = jwt_encode(user_payload)
        logger.debug(f'created JWT: {jwt}')

        logger.info('New user created')
        return CreateUser(user=user, token=jwt)

class DeleteUser(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        password = graphene.String(required=True)

    def mutate(self, info, password):
        logger.info('Received request to delete user')
        user = get_authenticated_user(info)
        if not user.check_password(password):
            errorLogger.logAndRaise(
                GraphQLError,
                'Please enter correct password',
                'User deletion request was not allowed, password verification failed'
            )
        user.entry_set.all().delete()
        user_id = user.id
        user.delete()
        logger.info('Deleted user')
        return DeleteUser(id=user_id)

class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    me = graphene.Field(UserType)

    def resolve_users(self, info):
        logger.warn('Received request to get all users')
        return get_user_model().objects.all()

    def resolve_me(self, info):
        logger.info('Received request to get user info')
        return get_authenticated_user(info)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    delete_user = DeleteUser.Field()
