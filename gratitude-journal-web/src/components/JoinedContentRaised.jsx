import React from "react";
import PropTypes from "prop-types";
import { bem } from "./utils/css";
import Section from "./Section";

import "./styles/joined-content.scss";

const JoinedContentRaised = ({ children, ...baseProps }) => {
  const baseCss = bem`theme-joined-content`;
  const css = bem`theme-joined-content`.elem`raised`;
  return (
    <div className={baseCss.elem`raised-wrapper`}>
      <Section className={css} {...baseProps}>
        {children}
      </Section>
    </div>
  );
};

JoinedContentRaised.propTypes = {
  children: PropTypes.node.isRequired
};

export default JoinedContentRaised;
