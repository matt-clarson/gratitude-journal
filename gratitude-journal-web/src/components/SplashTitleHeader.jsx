import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { SplashCSS } from "./Splash";

import "./styles/splash.scss";

const SplashTitleHeader = ({ children, ...baseProps }) => {
  const baseCss = useContext(SplashCSS);
  return (
    <ComponentFactory
      defaultTag="h1"
      fixedClassName={baseCss.elem`title-header`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

SplashTitleHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default SplashTitleHeader;
