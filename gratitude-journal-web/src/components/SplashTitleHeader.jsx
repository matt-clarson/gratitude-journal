import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/splash.scss";

const SplashTitleHeader = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="h1"
    fixedClassName={bem`theme-splash`.elem`title-header`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

SplashTitleHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default SplashTitleHeader;
