import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/splash.scss";

const SplashActionButton = ({ children, onClick, ...baseProps }) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={bem`theme-splash`.elem`action-button`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

SplashActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SplashActionButton;
