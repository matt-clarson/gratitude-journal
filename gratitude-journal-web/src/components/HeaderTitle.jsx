import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";

import "./styles/header.scss";

const HeaderTitle = ({ children, ...baseProps }) => (
  <h1 className="theme-header-title">
    <ComponentFactory
      defaultTag="span"
      className="theme-header-title-content"
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  </h1>
);

HeaderTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderTitle;
