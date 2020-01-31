import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Table";

const TableBody = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="tbody"
    fixedClassName={css.elem`body`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

TableBody.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableBody;
