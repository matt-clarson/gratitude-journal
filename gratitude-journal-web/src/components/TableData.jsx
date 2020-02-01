import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { classes } from "./utils/css";
import { css } from "./Table";

const TableData = ({ align = "left", colWidth, children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="td"
    fixedClassName={classes(css.elem`data`, css.elem`data`.mod`${align}`)}
    style={{ width: colWidth ?? "auto" }}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

TableData.propTypes = {
  children: PropTypes.node
};

export default TableData;
