import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Form";

import "./styles/form.scss";

const FormActions = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="div"
    fixedClassName={css.elem`actions`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

FormActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormActions;
