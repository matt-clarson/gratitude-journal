from django.test import TestCase as DjangoTestCase
from snapshottest.unittest import TestCase as SnapshotTestCase

class TestCase(DjangoTestCase, SnapshotTestCase):
    pass
