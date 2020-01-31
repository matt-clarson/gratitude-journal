import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Splash";

import "./styles/splash.scss";

const SplashActionButton = ({ children, onClick, ...baseProps }) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`action-button`}
    {...{ ...baseProps, onClick }}
  >
    {children}
  </ComponentFactory>
);

SplashActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default SplashActionButton;
