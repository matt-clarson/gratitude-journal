from itertools import product
from unittest.mock import Mock
from tests.utils import TestCase
from graphene import Schema
from graphene.test import Client

from django.contrib.auth.models import AnonymousUser, User
from entries.models import Entry
from entries.schema import Query

TEST_ENTRIES_QUERY = '''
    query {
        myEntries {
            id
            content
            postedBy {
                username
            }
        }
    }
'''

class TestMyEntries(TestCase):
    def setUp(self):
        self.maxDiff = None
        self.user1 = User.objects.create(username="user_1")
        self.user2 = User.objects.create(username="user_2")
        self.anon = AnonymousUser()
        self.entries = Entry.objects.bulk_create([Entry(content=content, posted_by=posted_by)
            for content, posted_by in product(['entry1', 'entry2', 'entry3'], [self.user1, self.user2])
        ])
        self.schema = Schema(query=Query)
        self.client = Client(self.schema)

    def tearDown(self):
        self.user1.delete()
        self.user2.delete()
        Entry.objects.all().delete()

    def assertCollectionsDoNotOverlap(self, first, second, msg=None):
        common = set(first) & set(second)
        if len(common) > 0:
            raise AssertionError(msg if msg else f'Elements fond in both collections ${common}')

    def test_my_entries_user_1(self):
        response = self.client.execute(TEST_ENTRIES_QUERY, context=Mock(user=self.user1))
        self.assertMatchSnapshot(response)

    def test_my_entries_user_2(self):
        response = self.client.execute(TEST_ENTRIES_QUERY, context=Mock(user=self.user2))
        self.assertMatchSnapshot(response)

    def test_unauthorised_query(self):
        response = self.client.execute(TEST_ENTRIES_QUERY, context=Mock(user=self.anon))
        self.assertMatchSnapshot(response)

    def test_users_cannot_see_other_entries(self):
        user1_response = self.client.execute(TEST_ENTRIES_QUERY, context=Mock(user=self.user1))
        user2_response = self.client.execute(TEST_ENTRIES_QUERY, context=Mock(user=self.user2))
        get_ids = lambda xs: [x['id'] for x in xs['data']['myEntries']]
        user1_ids = get_ids(user1_response)
        user2_ids = get_ids(user2_response)
        self.assertCollectionsDoNotOverlap(user1_ids, user2_ids)

