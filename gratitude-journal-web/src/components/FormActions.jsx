import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/form.scss";

const FormActions = ({ children, ...baseProps }) => {
  const css = bem`theme-form`.elem`actions`;
  return (
    <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
      {children}
    </ComponentFactory>
  );
};

FormActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormActions;
