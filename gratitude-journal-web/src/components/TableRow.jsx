import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { TableCSS } from "./Table";

const TableRow = ({ children, ...baseProps }) => {
  const css = useContext(TableCSS);
  return (
    <ComponentFactory
      defaultTag="tr"
      fixedClassName={css.elem`row`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableRow;
