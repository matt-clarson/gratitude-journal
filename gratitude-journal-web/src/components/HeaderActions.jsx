import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Header";

import "./styles/header.scss";

const HeaderActions = ({ children }) => (
  <ComponentFactory defaultTag="div" fixedClassName={css.elem`actions`}>
    {children}
  </ComponentFactory>
);

HeaderActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderActions;
