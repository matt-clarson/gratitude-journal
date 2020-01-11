import React, { createContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/table.scss";

export const TableCSS = createContext();

const Table = ({ children, title, ...baseProps }) => {
  const css = bem`rdp-table`;
  return (
    <TableCSS.Provider value={css}>
      <ComponentFactory
        cellspacing={0}
        defaultTag="table"
        fixedClassName={css}
        {...baseProps}
      >
        <caption className={css.elem`caption`}>
          {typeof title === "string" ? (
            <h4 className={css.elem`title`}>{title}</h4>
          ) : (
            title
          )}
        </caption>
        {children}
      </ComponentFactory>
    </TableCSS.Provider>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired
};

export default Table;
