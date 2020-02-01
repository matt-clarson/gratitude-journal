TEST_ENTRY_MUTATION = '''
    mutation {
        createEntry(content: "this is a test entry") {
            id
            content
            postedBy {
                username
            }
        }
    }
'''

TEST_DELETE_MUTATION = lambda id: '''
    mutation {
        deleteEntry(id: %d) {
            id
        }
    }
''' % (id,)
