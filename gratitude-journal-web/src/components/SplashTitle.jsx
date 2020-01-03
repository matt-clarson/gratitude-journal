import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { SplashCSS } from "./Splash";

import "./styles/splash.scss";

const SplashTitle = ({ children, ...baseProps }) => {
  const baseCss = useContext(SplashCSS);
  return (
    <ComponentFactory
      defaultTag="header"
      fixedClassName={baseCss.elem`title`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

SplashTitle.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string
};

export default SplashTitle;
