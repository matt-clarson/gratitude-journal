import React, { createContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem, classes } from "./utils/css";

import "./styles/splash.scss";

export const SplashCSS = createContext();

const Splash = ({ children, position = "default", ...baseProps }) => {
  const css = bem`rdp-splash`;
  if (!baseProps.tag) baseProps.open = true;
  return (
    <SplashCSS.Provider value={css}>
      <ComponentFactory
        defaultTag="dialog"
        fixedClassName={classes(css, css.mod`${position}`)}
        {...baseProps}
      >
        {children}
      </ComponentFactory>
    </SplashCSS.Provider>
  );
};

Splash.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string
};

export default Splash;
