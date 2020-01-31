import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Splash";

import "./styles/splash.scss";

const SplashTitleHeader = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="h1"
    fixedClassName={css.elem`title-header`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

SplashTitleHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default SplashTitleHeader;
