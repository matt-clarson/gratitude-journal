export const USER_INFO = `
  query UserInfo {
    me {
      email
      username
    }
  }
`;

export const DELETE_ACCOUNT = `
  mutation DeleteAccount($password: String!) {
    deleteUser(password: $password) {
      id
    }
  }
`;
