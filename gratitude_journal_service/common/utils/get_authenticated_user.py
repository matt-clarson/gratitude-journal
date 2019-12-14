from graphql import GraphQLError

def get_authenticated_user(resolver_info):
    user = resolver_info.context.user
    if user.is_anonymous:
        raise GraphQLError('You must be logged in to do that')
    return user
