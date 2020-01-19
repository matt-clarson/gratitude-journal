import os
from django.test import TestCase as DjangoTestCase
from snapshottest.unittest import TestCase as SnapshotTestCase

class TestCase(DjangoTestCase, SnapshotTestCase):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.snapshot_should_update = os.environ.get('UPDATE_SNAPSHOTS') == 'true'
