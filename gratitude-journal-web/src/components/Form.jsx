import React, { createContext } from "react";
import PropTypes from "prop-types";
import { bem, classes } from "./utils/css";
import Section from "./Section";

import "./styles/form.scss";

export const FormCSS = createContext();

const Form = ({ onSubmit, children, ...baseProps }) => {
  const css = bem`rdp-form`;
  return (
    <FormCSS.Provider value={css}>
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
    </FormCSS.Provider>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
