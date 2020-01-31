import React from "react";
import PropTypes from "prop-types";
import { css } from "./JoinedContent";
import ComponentFactory from "./utils/ComponentFactory";

import "./styles/joined-content.scss";

const JoinedContentRaised = ({ children, ...baseProps }) => (
  <div className={css.elem`raised-wrapper`}>
    <ComponentFactory
      defaultTag="section"
      fixedClassName={css.elem`raised`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  </div>
);

JoinedContentRaised.propTypes = {
  children: PropTypes.node.isRequired
};

export default JoinedContentRaised;
