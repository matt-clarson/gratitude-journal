import React, { createContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/joined-content.scss";

export const JoinedContentCSS = createContext();

const JoinedContent = ({ children, floatContent = "left", ...baseProps }) => {
  const css = bem`rdp-joined-content`;
  return (
    <JoinedContentCSS.Provider value={css}>
      <ComponentFactory
        fixedClassName={css.mod`${floatContent}`}
        defaultTag="section"
        {...baseProps}
      >
        {children}
      </ComponentFactory>
    </JoinedContentCSS.Provider>
  );
};

JoinedContent.propTypes = {
  children: PropTypes.node.isRequired,
  floatContent: PropTypes.string
};

export default JoinedContent;
