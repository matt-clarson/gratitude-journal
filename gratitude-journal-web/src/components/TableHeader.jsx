import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Table";

const TableHeader = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="thead"
    fixedClassName={css.elem`header`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

TableHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableHeader;
