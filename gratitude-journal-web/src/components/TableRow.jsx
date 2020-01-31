import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Table";

const TableRow = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="tr"
    fixedClassName={css.elem`row`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

TableRow.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableRow;
