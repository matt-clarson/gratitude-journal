import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem, classes } from "./utils/css";

import "./styles/splash.scss";

export const css = bem`rdp-splash`;

const Splash = ({ children, position = "default", ...baseProps }) => {
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
