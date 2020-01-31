import React, { createContext } from "react";
import PropTypes from "prop-types";
import { bem } from "./utils/css";
import ComponentFactory from "./utils/ComponentFactory";
import Spinner from "./Spinner";

import "./styles/form.scss";

export const css = bem`rdp-form`;
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
}) => (
  <FormContext.Provider value={{ autoControlled }}>
    <ComponentFactory
      onSubmit={autoControlled ? autoSubmit.bind(null, onSubmit) : onSubmit}
      fixedClassName={css}
      defaultTag="form"
      {...baseProps}
    >
      {submitting ? (
        <Spinner
          size="m"
          message="Submitting..."
          className={css.elem`spinner`}
        />
      ) : (
        children
      )}
    </ComponentFactory>
  </FormContext.Provider>
);

Form.propTypes = {
  autoControlled: PropTypes.bool,
  submittting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
