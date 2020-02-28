import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./List";

const ListItemText = ({ children, secondary, ...baseProps }) => (
  <ComponentFactory
    defaultTag="span"
    fixedClassName={
      secondary ? css.elem`item-text`.mod`secondary` : css.elem`item-text`
    }
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

ListItemText.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool
};

export default ListItemText;
