from tests.utils import TestCase
from unittest.mock import Mock
from django.contrib.auth.models import AnonymousUser, User
from graphene import Schema
from graphene.test import Client

from entries.models import Entry
from entries.schema import Query, Mutation
from entries.tests.fixtures import TEST_ENTRY_MUTATION

class TestCreateEntry(TestCase):
    def setUp(self):
        self.schema = Schema(query=Query, mutation=Mutation)
        self.client = Client(self.schema)
        self.user = User.objects.create(username="test_user")
        self.unauthorised_user = AnonymousUser()

    def tearDown(self):
        self.user.delete()

    def test_create_entry(self):
        response = self.client.execute(TEST_ENTRY_MUTATION, context=Mock(user=self.user))
        entries = Entry.objects.all()
        self.assertEqual(len(entries), 1)
        self.assertEqual(entries[0].content, 'this is a test entry')
        self.assertEqual(entries[0].posted_by, self.user)
        self.assertMatchSnapshot(response)

    def test_unauthorised_creation_attempt(self):
        response = self.client.execute(TEST_ENTRY_MUTATION, context=Mock(user=self.unauthorised_user))
        self.assertMatchSnapshot(response)
