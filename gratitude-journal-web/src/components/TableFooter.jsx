import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { TableCSS } from "./Table";

const TableFooter = ({ children, ...baseProps }) => {
  const css = useContext(TableCSS);
  return (
    <ComponentFactory
      defaultTag="tfoot"
      fixedClassName={css.elem`footer`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

TableFooter.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableFooter;
