import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { TableCSS } from "./Table";

const TableHeader = ({ children, ...baseProps }) => {
  const css = useContext(TableCSS);
  return (
    <ComponentFactory
      defaultTag="thead"
      fixedClassName={css.elem`header`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

TableHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableHeader;
