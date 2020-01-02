import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem, classes } from "./utils/css";

import "./styles/splash.scss";

const Splash = ({ children, position = "default", ...baseProps }) => {
  const css = bem`theme-splash`;
  if (!baseProps.tag) baseProps.open = true;
  return (
    <ComponentFactory
      defaultTag="dialog"
      fixedClassName={classes(css, css.mod`${position}`)}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

Splash.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string
};

export default Splash;
