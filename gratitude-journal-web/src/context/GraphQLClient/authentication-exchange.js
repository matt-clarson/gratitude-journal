import { pipe, map } from "wonka";

export default authToken => ({ forward }) => operations =>
  pipe(
    operations,
    map(operation => {
      return {
        ...operation,
        context: {
          ...operation.context,
          fetchOptions: {
            headers: { Authorization: `JWT ${authToken}` }
          }
        }
      };
    }),
    forward
  );
