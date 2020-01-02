import React from "react";
import PropTypes from "prop-types";
import { bem } from "./utils/css";
import Section from "./Section";
import Form from "./Form";

import "./styles/joined-content.scss";

const JoinedContentRaised = ({ children, isForm, ...baseProps }) => {
  const baseCss = bem`theme-joined-content`;
  const css = bem`theme-joined-content`.elem`raised`;
  const Component = isForm ? Form : Section;
  return (
    <div className={baseCss.elem`raised-wrapper`}>
      <Component className={css} {...baseProps}>
        {children}
      </Component>
    </div>
  );
};

JoinedContentRaised.propTypes = {
  children: PropTypes.node.isRequired
};

export default JoinedContentRaised;
