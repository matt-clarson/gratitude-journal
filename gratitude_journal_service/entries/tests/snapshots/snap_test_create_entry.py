# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['TestCreateEntry::test_create_entry 1'] = {
    'data': {
        'createEntry': {
            'content': 'this is a test entry',
            'id': 1,
            'postedBy': {
                'username': 'test_user'
            }
        }
    }
}

snapshots['TestCreateEntry::test_unauthorised_creation_attempt 1'] = {
    'data': {
        'createEntry': None
    },
    'errors': [
        {
            'locations': [
                {
                    'column': 9,
                    'line': 3
                }
            ],
            'message': 'You must be logged in to do that',
            'path': [
                'createEntry'
            ]
        }
    ]
}
