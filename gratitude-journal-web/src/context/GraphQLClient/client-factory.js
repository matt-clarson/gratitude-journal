import { Client, cacheExchange, dedupExchange, fetchExchange } from "urql";
import authenticationExchange from "./authentication-exchange";

export default (url, authToken) =>
  new Client({
    url,
    exchanges: authToken
      ? [
          dedupExchange,
          cacheExchange,
          authenticationExchange(authToken),
          fetchExchange
        ]
      : [dedupExchange, cacheExchange, fetchExchange]
  });
