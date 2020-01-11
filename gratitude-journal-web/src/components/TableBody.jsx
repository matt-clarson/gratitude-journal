import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { TableCSS } from "./Table";

const TableBody = ({ children, ...baseProps }) => {
  const css = useContext(TableCSS);
  return (
    <ComponentFactory
      defaultTag="tbody"
      fixedClassName={css.elem`body`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableBody;
