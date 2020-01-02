import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/joined-content.scss";

const JoinedContent = ({ children, ...baseProps }) => {
  const css = bem`theme-joined-content`;
  return (
    <ComponentFactory fixedClassName={css} defaultTag="section" {...baseProps}>
      {children}
    </ComponentFactory>
  );
};

JoinedContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default JoinedContent;
