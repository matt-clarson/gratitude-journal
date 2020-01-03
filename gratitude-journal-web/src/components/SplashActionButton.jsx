import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { SplashCSS } from "./Splash";

import "./styles/splash.scss";

const SplashActionButton = ({ children, onClick, ...baseProps }) => {
  const baseCss = useContext(SplashCSS);
  return (
    <ComponentFactory
      defaultTag="button"
      fixedClassName={baseCss.elem`action-button`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

SplashActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SplashActionButton;
