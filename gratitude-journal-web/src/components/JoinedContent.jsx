import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/joined-content.scss";

export const css = bem`rdp-joined-content`;

const JoinedContent = ({ children, floatContent = "left", ...baseProps }) => (
  <ComponentFactory
    fixedClassName={css.mod`${floatContent}`}
    defaultTag="section"
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

JoinedContent.propTypes = {
  children: PropTypes.node.isRequired,
  floatContent: PropTypes.string
};

export default JoinedContent;
