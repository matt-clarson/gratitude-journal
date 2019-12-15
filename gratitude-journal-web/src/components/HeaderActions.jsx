import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";

import "./styles/header.scss";

const HeaderActions = ({ children }) => (
  <ComponentFactory defaultTag="div" className="theme-header-actions">
    {children}
  </ComponentFactory>
);

HeaderActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderActions;
