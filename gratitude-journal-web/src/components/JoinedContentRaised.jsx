import React, { useContext } from "react";
import PropTypes from "prop-types";
import { JoinedContentCSS } from "./JoinedContent";
import ComponentFactory from "./utils/ComponentFactory";

import "./styles/joined-content.scss";

const JoinedContentRaised = ({ children, ...baseProps }) => {
  const baseCss = useContext(JoinedContentCSS);
  return (
    <div className={baseCss.elem`raised-wrapper`}>
      <ComponentFactory
        defaultTag="section"
        fixedClassName={baseCss.elem`raised`}
        {...baseProps}
      >
        {children}
      </ComponentFactory>
    </div>
  );
};

JoinedContentRaised.propTypes = {
  children: PropTypes.node.isRequired
};

export default JoinedContentRaised;
