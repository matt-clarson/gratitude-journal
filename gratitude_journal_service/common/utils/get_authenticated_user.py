import logging
from graphql import GraphQLError

logger = logging.getLogger(__name__)

def get_authenticated_user(resolver_info):
    user = resolver_info.context.user
    logger.info(f'Authenticated user as {user.username}')
    if user.is_anonymous:
        logger.error('Unauthorised access attempt')
        raise GraphQLError('You must be logged in to do that')
    return user
