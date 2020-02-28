import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./List";

const ListItem = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="li"
    fixedClassName={css.elem`item`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListItem;
