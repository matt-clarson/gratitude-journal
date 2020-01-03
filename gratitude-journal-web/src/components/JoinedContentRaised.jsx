import React, { useContext } from "react";
import PropTypes from "prop-types";
import { JoinedContentCSS } from "./JoinedContent";
import Section from "./Section";
import Form from "./Form";

import "./styles/joined-content.scss";

const JoinedContentRaised = ({ children, isForm, ...baseProps }) => {
  const baseCss = useContext(JoinedContentCSS);
  const Component = isForm ? Form : Section;
  return (
    <div className={baseCss.elem`raised-wrapper`}>
      <Component className={baseCss.elem`raised`} {...baseProps}>
        {children}
      </Component>
    </div>
  );
};

JoinedContentRaised.propTypes = {
  children: PropTypes.node.isRequired
};

export default JoinedContentRaised;
