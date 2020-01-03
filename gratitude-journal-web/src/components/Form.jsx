import React from "react";
import PropTypes from "prop-types";
import { bem, classes } from "./utils/css";
import Section from "./Section";

import "./styles/form.scss";

const Form = ({ onSubmit, children, ...baseProps }) => {
  const css = bem`theme-form`;
  return (
    <Section
      onSubmit={onSubmit}
      {...{
        ...baseProps,
        className: classes(css, baseProps.className),
        tag: "form"
      }}
    >
      {children}
    </Section>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
