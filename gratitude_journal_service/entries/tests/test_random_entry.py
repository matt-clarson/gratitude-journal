from operator import itemgetter

from tests.utils import TestCase
from unittest.mock import Mock
from graphene import Schema
from graphene.test import Client

from django.contrib.auth.models import AnonymousUser, User
from entries.models import Entry
from entries.schema import Query

TEST_RANDOM_ENTRY_QUERY = '''
    query {
        randomEntry {
            id
            content
        }
    }
'''

class TestRandomEnry(TestCase):
    def setUp(self):
        self.user = User.objects.create(username="user1")
        self.anon = AnonymousUser()
        self.entries = Entry.objects.bulk_create([
            Entry(content="entry1", posted_by=self.user),
            Entry(content="entry2", posted_by=self.user),
            Entry(content="entry3", posted_by=self.user),
        ])
        self.schema = Schema(query=Query)
        self.client = Client(self.schema)

    def tearDown(self):
        self.user.delete()
        Entry.objects.all().delete()

    def test_returns_random_entry(self):
        response = self.client.execute(TEST_RANDOM_ENTRY_QUERY, context=Mock(user=self.user))
        id, content = itemgetter('id', 'content')(response['data']['randomEntry'])
        self.assertEqual(Entry.objects.get(pk=id).content, content)

    def test_unauthorsed_request(self):
        response = self.client.execute(TEST_RANDOM_ENTRY_QUERY, context=Mock(user=self.anon))
        self.assertMatchSnapshot(response)
