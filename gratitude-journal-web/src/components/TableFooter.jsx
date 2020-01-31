import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Table";

const TableFooter = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="tfoot"
    fixedClassName={css.elem`footer`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

TableFooter.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableFooter;
