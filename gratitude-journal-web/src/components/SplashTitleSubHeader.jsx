import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { classes } from "./utils/css";
import { SplashCSS } from "./Splash";

import "./styles/splash.scss";

const SplashTitleSubHeader = ({
  children,
  position = "default",
  ...baseProps
}) => {
  const baseCss = useContext(SplashCSS);
  const css = baseCss.elem`title-sub-header`;
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
