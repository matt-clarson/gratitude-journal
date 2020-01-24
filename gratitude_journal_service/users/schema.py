from django.contrib.auth import get_user_model
from django.db import IntegrityError

from graphql import GraphQLError
import graphene
from graphql_jwt.utils import jwt_payload, jwt_encode
from graphene_django import DjangoObjectType
from common.utils import get_authenticated_user

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
        user, created = get_user_model().objects.get_or_create(
                username = kwargs['username'],
                email = kwargs['email']
        )
        if not created:
            raise GraphQLError(f"Username \"{kwargs['username']}\" already exists - try using a different one")
        user.set_password(kwargs['password'])
        user.save()

        user_payload = jwt_payload(user)
        jwt = jwt_encode(user_payload)

        return CreateUser(user=user, token=jwt)

class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    me = graphene.Field(UserType)

    def resolve_users(self, info):
        return get_user_model().objects.all()

    def resolve_me(self, info):
        return get_authenticated_user(info)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
