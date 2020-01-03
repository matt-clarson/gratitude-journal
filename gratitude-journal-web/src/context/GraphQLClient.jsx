import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  Client,
  Provider,
  dedupExchange,
  cacheExchange,
  fetchExchange
} from "urql";

const clientFactory = url =>
  new Client({ url, exchanges: [dedupExchange, cacheExchange, fetchExchange] });

const GraphQLClient = ({ children, baseUrl }) => {
  const client = useRef();
  client.current = client.current ?? clientFactory(baseUrl);
  return <Provider value={client.current}>{children}</Provider>;
};

GraphQLClient.propTypes = {
  children: PropTypes.node.isRequired,
  baseUrl: PropTypes.string.isRequired
};

export default GraphQLClient;
