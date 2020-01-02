import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/form.scss";

const FormContent = ({ children, ...baseProps }) => {
  const css = bem`theme-form`.elem`content`;
  return (
    <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
      {children}
    </ComponentFactory>
  );
};

FormContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormContent;
