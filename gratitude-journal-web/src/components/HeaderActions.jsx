import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { HeaderCSS } from "./Header";

import "./styles/header.scss";

const HeaderActions = ({ children }) => {
  const baseCss = useContext(HeaderCSS);
  return (
    <ComponentFactory defaultTag="div" fixedClassName={baseCss.elem`actions`}>
      {children}
    </ComponentFactory>
  );
};

HeaderActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderActions;
