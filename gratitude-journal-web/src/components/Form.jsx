import React from "react";
import PropTypes from "prop-types";
import { bem, classes } from "./utils/css";
import Section from "./Section";

import "./styles/form.scss";

const handleSubmit = event => {
  event.preventDefault();
  console.log(event.nativeEvent.target?.elements);
};

const Form = ({ children, ...baseProps }) => {
  const css = bem`theme-form`;
  return (
    <Section
      onSubmit={handleSubmit}
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
