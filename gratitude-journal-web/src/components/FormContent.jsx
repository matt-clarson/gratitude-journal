import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Form";

import "./styles/form.scss";

const FormContent = ({ children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="div"
    fixedClassName={css.elem`content`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);

FormContent.propTypes = {
  children: PropTypes.node
};

export default FormContent;
