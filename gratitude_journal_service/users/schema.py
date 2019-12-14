from django.contrib.auth import get_user_model

import graphene
from graphene_django import DjangoObjectType
from common.utils import get_authenticated_user

class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()

class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, **kwargs):
        user = get_user_model()(
                username = kwargs['username'],
                email = kwargs['email']
        )
        user.set_password(kwargs['password'])
        user.save()

        return CreateUser(user=user)

class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    me = graphene.Field(UserType)

    def resolve_users(self, info):
        return get_user_model().objects.all()

    def resolve_me(self, info):
        return get_authenticated_user(info)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
