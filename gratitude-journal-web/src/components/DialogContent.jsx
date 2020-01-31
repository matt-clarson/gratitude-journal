import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Dialog";

const DialogContent = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="div"
    fixedClassName={css.elem`content`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

DialogContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default DialogContent;
