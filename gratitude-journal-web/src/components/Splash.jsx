import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem, classes } from "./utils/css";

import "./styles/splash.scss";

const Splash = ({ children, left = false, right = false, ...baseProps }) => {
  const css = bem`theme-splash`;
  if (!baseProps.tag) baseProps.open = true;
  return (
    <ComponentFactory
      defaultTag="dialog"
      className={classes(
        css,
        left ? css.mod`left` : right ? css.mod`right` : ""
      )}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

Splash.propTypes = {
  children: PropTypes.node.isRequired
};

export default Splash;
