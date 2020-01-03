import React, { useContext } from "react";
import PropTypes from "prop-types";
import { JoinedContentCSS } from "./JoinedContent";
import Section from "./Section";

import "./styles/joined-content.scss";

const JoinContentBase = ({ title, children, ...baseProps }) => {
  const baseCss = useContext(JoinedContentCSS);
  return (
    <Section
      flat
      className={baseCss.elem`base`}
      {...{ ...baseProps, tag: baseProps.tag ?? "div" }}
    >
      <h2 className={baseCss.elem`title`}>{title}</h2>
      {children}
    </Section>
  );
};

JoinContentBase.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default JoinContentBase;
