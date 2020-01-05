import React, { createContext } from "react";
import PropTypes from "prop-types";
import { bem, classes } from "./utils/css";
import Section from "./Section";
import Spinner from "./Spinner";

import "./styles/form.scss";

export const FormCSS = createContext();
export const FormContext = createContext({ autoControlled: false });

const autoSubmit = (onSubmit, event) => {
  event.preventDefault();
  const { elements } = event.target;
  const formData = {};
  for (const element of elements) {
    if (element.tagName === "BUTTON") continue;
    const { name, value } = element;
    formData[name] = value;
  }
  onSubmit(formData);
};

const Form = ({
  submitting,
  autoControlled,
  onSubmit,
  children,
  ...baseProps
}) => {
  const css = bem`rdp-form`;
  return (
    <FormContext.Provider value={{ autoControlled }}>
      <FormCSS.Provider value={css}>
        <Section
          onSubmit={autoControlled ? autoSubmit.bind(null, onSubmit) : onSubmit}
          {...{
            ...baseProps,
            className: classes(css, baseProps.className),
            tag: "form"
          }}
        >
          {submitting && (
            <Spinner
              size="m"
              message="Submitting..."
              className={css.elem`spinner`}
            />
          )}
          {children}
        </Section>
      </FormCSS.Provider>
    </FormContext.Provider>
  );
};

Form.propTypes = {
  autoControlled: PropTypes.bool,
  submittting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
