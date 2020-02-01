export const GET_ENTRIES = `
  query GetEntries {
    myEntries {
      id
      content
      created
    }
  }
`;

export const DELETE_ENTRY = `
  mutation DeleteEntry($id: Int) {
    deleteEntry(id: $id) {
      id
    }
  }
`;
