import React from "react";
import PropTypes from "prop-types";
import { bem, classes } from "./utils/css";
import Section from "./Section";

import "./styles/form.scss";

const Form = ({ children, ...baseProps }) => {
  const css = bem`theme-form`;
  return (
    <Section
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
  children: PropTypes.node.isRequired
};

export default Form;
