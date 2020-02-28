import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/list.scss";

export const css = bem`rdp-list`;

const List = ({ children, ...baseProps }) => (
  <ComponentFactory defaultTag="ul" fixedClassName={css} {...baseProps}>
    {children}
  </ComponentFactory>
);

List.propTypes = {
  children: PropTypes.node.isRequired
};

export default List;
