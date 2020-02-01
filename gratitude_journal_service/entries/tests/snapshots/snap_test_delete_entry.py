# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['TestDeleteEntry::test_delete_entry 1'] = {
    'data': {
        'deleteEntry': {
            'id': 2
        }
    }
}

snapshots['TestDeleteEntry::test_deleting_non_existant_entry 1'] = {
    'data': {
        'deleteEntry': None
    },
    'errors': [
        {
            'locations': [
                {
                    'column': 9,
                    'line': 3
                }
            ],
            'message': 'Cannot find entry with id "1000" to delete it',
            'path': [
                'deleteEntry'
            ]
        }
    ]
}

snapshots['TestDeleteEntry::test_deleting_non_owned_entry 1'] = {
    'data': {
        'deleteEntry': None
    },
    'errors': [
        {
            'locations': [
                {
                    'column': 9,
                    'line': 3
                }
            ],
            'message': 'Cannot find entry with id "3" to delete it',
            'path': [
                'deleteEntry'
            ]
        }
    ]
}

snapshots['TestDeleteEntry::test_unauthorised_deletion 1'] = {
    'data': {
        'deleteEntry': None
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
                'deleteEntry'
            ]
        }
    ]
}
