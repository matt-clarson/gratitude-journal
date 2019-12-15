import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/header.scss";

const HeaderActions = ({ children }) => (
  <ComponentFactory
    defaultTag="div"
    className={bem`theme-header`.elem`actions`}
  >
    {children}
  </ComponentFactory>
);

HeaderActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderActions;
