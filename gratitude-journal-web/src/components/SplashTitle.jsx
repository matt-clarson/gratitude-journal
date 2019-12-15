import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/splash.scss";

const SplashTitle = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="header"
    className={bem`theme-splash`.elem`title`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

SplashTitle.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string
};

export default SplashTitle;
