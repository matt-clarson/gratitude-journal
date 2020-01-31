import React from "react";
import PropTypes from "prop-types";
import { css } from "./JoinedContent";
import Section from "./Section";

import "./styles/joined-content.scss";

const JoinContentBase = ({ title, children, ...baseProps }) => (
  <Section
    flat
    className={css.elem`base`}
    {...{ ...baseProps, tag: baseProps.tag ?? "div" }}
  >
    <h2 className={css.elem`title`}>{title}</h2>
    {children}
  </Section>
);

JoinContentBase.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default JoinContentBase;
