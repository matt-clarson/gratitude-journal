import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Dialog";

const DialogActions = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="div"
    fixedClassName={css.elem`actions`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

DialogActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default DialogActions;
