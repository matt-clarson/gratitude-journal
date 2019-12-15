import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem, classes } from "./utils/css";

import "./styles/splash.scss";

const SplashActions = ({ position = "default", children, ...baseProps }) => {
  const css = bem`theme-splash`.elem`actions`;
  return (
    <ComponentFactory
      defaultTag="nav"
      className={classes(css, css.mod`${position}`)}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

SplashActions.propTypes = {
  children: PropTypes.node.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
  centre: PropTypes.bool
};

export default SplashActions;
