import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/header.scss";

const Header = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="header"
    fixedClassName={bem`theme-header`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
