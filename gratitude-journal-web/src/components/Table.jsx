import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/table.scss";

export const css = bem`rdp-table`;

const Table = ({ children, title, ...baseProps }) => (
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
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired
};

export default Table;
