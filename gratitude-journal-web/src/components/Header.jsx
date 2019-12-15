import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";

import "./styles/header.scss";

const Header = ({ children, ...baseProps }) => (
  <ComponentFactory defaultTag="header" className="theme-header" {...baseProps}>
    {children}
  </ComponentFactory>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
