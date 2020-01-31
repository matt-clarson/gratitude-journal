import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Splash";

import "./styles/splash.scss";

const SplashTitle = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="header"
    fixedClassName={css.elem`title`}
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
