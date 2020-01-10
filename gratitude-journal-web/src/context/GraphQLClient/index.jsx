import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Provider } from "urql";
import { User } from "../User";
import clientFactory from "./client-factory";

const GraphQLClient = ({ children, baseUrl }) => {
  const { user } = useContext(User);
  const [client, setClient] = useState(clientFactory(baseUrl, user?.token));
  useEffect(() => setClient(clientFactory(baseUrl, user?.token)), [
    baseUrl,
    user
  ]);
  return <Provider value={client}>{children}</Provider>;
};

GraphQLClient.propTypes = {
  children: PropTypes.node.isRequired,
  baseUrl: PropTypes.string.isRequired
};

export default GraphQLClient;
