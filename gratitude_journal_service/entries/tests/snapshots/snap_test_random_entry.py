# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['TestRandomEnry::test_unauthorsed_request 1'] = {
    'data': {
        'randomEntry': None
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
                'randomEntry'
            ]
        }
    ]
}
