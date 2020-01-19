# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['TestMyEntries::test_my_entries_user_1 1'] = {
    'data': {
        'myEntries': [
            {
                'content': 'entry1',
                'id': '2',
                'postedBy': {
                    'username': 'user_1'
                }
            },
            {
                'content': 'entry2',
                'id': '4',
                'postedBy': {
                    'username': 'user_1'
                }
            },
            {
                'content': 'entry3',
                'id': '6',
                'postedBy': {
                    'username': 'user_1'
                }
            }
        ]
    }
}

snapshots['TestMyEntries::test_my_entries_user_2 1'] = {
    'data': {
        'myEntries': [
            {
                'content': 'entry1',
                'id': '9',
                'postedBy': {
                    'username': 'user_2'
                }
            },
            {
                'content': 'entry2',
                'id': '11',
                'postedBy': {
                    'username': 'user_2'
                }
            },
            {
                'content': 'entry3',
                'id': '13',
                'postedBy': {
                    'username': 'user_2'
                }
            }
        ]
    }
}

snapshots['TestMyEntries::test_unauthorised_query 1'] = {
    'data': {
        'myEntries': None
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
                'myEntries'
            ]
        }
    ]
}
