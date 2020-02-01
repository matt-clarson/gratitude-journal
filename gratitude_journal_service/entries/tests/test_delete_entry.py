from tests.utils import TestCase
from unittest.mock import Mock
from django.contrib.auth.models import AnonymousUser, User
from graphene import Schema
from graphene.test import Client

from entries.models import Entry
from entries.schema import Query, Mutation
from entries.tests.fixtures import TEST_ENTRY_MUTATION, TEST_DELETE_MUTATION

class TestDeleteEntry(TestCase):
    def setUp(self):
        self.schema = Schema(query=Query, mutation=Mutation)
        self.client = Client(self.schema)
        self.user1 = User.objects.create(username="user1")
        self.user2 = User.objects.create(username="user2")
        self.unauthorised_user = AnonymousUser()

    def tearDown(self):
        self.user1.delete()
        self.user2.delete()
        Entry.objects.all().delete()

    def test_delete_entry(self):
        self.client.execute(TEST_ENTRY_MUTATION, context=Mock(user=self.user1))
        entry = Entry.objects.all()[0]
        response = self.client.execute(TEST_DELETE_MUTATION(entry.id), context=Mock(user=self.user1))
        self.assertEqual(len(Entry.objects.all()), 0)
        self.assertMatchSnapshot(response)

    def test_deleting_non_existant_entry(self):
        response = self.client.execute(TEST_DELETE_MUTATION(1000), context=Mock(user=self.user1))
        self.assertMatchSnapshot(response)

    def test_deleting_non_owned_entry(self):
        self.client.execute(TEST_ENTRY_MUTATION, context=Mock(user=self.user1))
        entry = Entry.objects.all()[0]
        response = self.client.execute(TEST_DELETE_MUTATION(entry.id), context=Mock(user=self.user2))
        self.assertEqual(len(Entry.objects.all()), 1)
        self.assertMatchSnapshot(response)

    def test_unauthorised_deletion(self):
        response = self.client.execute(TEST_DELETE_MUTATION(1), context=Mock(user=self.unauthorised_user))
        self.assertMatchSnapshot(response)
