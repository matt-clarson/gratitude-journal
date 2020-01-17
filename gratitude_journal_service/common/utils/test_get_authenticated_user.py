from django.test import SimpleTestCase
from unittest.mock import Mock
from graphql import GraphQLError

from common.utils import get_authenticated_user

class TestGetAuthenticatedUser(SimpleTestCase):
    def setUp(self):
        self.mock_resolver_info = Mock()
        self.mock_resolver_info.context.user = Mock()

    def test_returns_user_if_authenticated(self):
        self.mock_resolver_info.context.user.is_anonymous = False
        self.assertEqual(self.mock_resolver_info.context.user, get_authenticated_user(self.mock_resolver_info))

    def test_throws_error_if_user_not_authenticated(self):
        self.mock_resolver_info.context.user.is_anonymous = True
        with self.assertRaises(GraphQLError, msg='You must be logged in to do that'):
            get_authenticated_user(self.mock_resolver_info)

