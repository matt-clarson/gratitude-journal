import graphene
import graphql_jwt

import entries.schema as entries
import users.schema as users

class Query(entries.Query, users.Query, graphene.ObjectType):
    pass

class Mutation(entries.Mutation, users.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
