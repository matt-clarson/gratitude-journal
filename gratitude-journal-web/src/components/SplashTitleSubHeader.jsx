import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem, classes } from "./utils/css";

import "./styles/splash.scss";

const SplashTitleSubHeader = ({ children, right = false, ...baseProps }) => {
  const css = bem`theme-splash`.elem`title-sub-header`;
  return (
    <ComponentFactory
      defaultTag="p"
      className={classes(css, right ? css.mod`right` : "")}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

SplashTitleSubHeader.propTypes = {
  children: PropTypes.node.isRequired,
  right: PropTypes.bool
};

export default SplashTitleSubHeader;
