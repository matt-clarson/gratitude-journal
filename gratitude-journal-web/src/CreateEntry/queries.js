export const CREATE_ENTRY = `
  mutation CreateEntry($content: String!) {
    createEntry(content: $content) {
      content
    }
  }
`;
