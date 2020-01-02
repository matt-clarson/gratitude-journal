import React from "react";
import PropTypes from "prop-types";
import { bem } from "./utils/css";
import Section from "./Section";

import "./styles/joined-content.scss";

const JoinContentBase = ({ title, children, ...baseProps }) => {
  const baseCss = bem`theme-joined-content`;
  const css = baseCss.elem`base`;
  return (
    <Section
      flat
      className={css}
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
