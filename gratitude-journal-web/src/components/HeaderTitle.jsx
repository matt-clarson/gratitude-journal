import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/header.scss";

const HeaderTitle = ({ children, ...baseProps }) => (
  <h1 className={bem`theme-header`.elem`title`}>
    <ComponentFactory
      defaultTag="span"
      className={bem`theme-header`.elem`title-content`}
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
