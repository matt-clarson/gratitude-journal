import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem, classes } from "./utils/css";

import "./styles/splash.scss";

const SplashTitleSubHeader = ({
  children,
  position = "default",
  ...baseProps
}) => {
  const css = bem`theme-splash`.elem`title-sub-header`;
  return (
    <ComponentFactory
      defaultTag="p"
      fixedClassName={classes(css, css.mod`${position}`)}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

SplashTitleSubHeader.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string
};

export default SplashTitleSubHeader;
