import React, { createContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/header.scss";

export const HeaderCSS = createContext();

const Header = ({ children, ...baseProps }) => {
  const css = bem`rdp-header`;
  return (
    <HeaderCSS.Provider value={css}>
      <ComponentFactory defaultTag="header" fixedClassName={css} {...baseProps}>
        {children}
      </ComponentFactory>
    </HeaderCSS.Provider>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
