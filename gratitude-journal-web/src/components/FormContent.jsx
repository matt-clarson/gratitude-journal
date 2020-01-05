import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { FormCSS } from "./Form";

import "./styles/form.scss";

const FormContent = ({ children, ...baseProps }) => {
  const baseCss = useContext(FormCSS);
  const css = baseCss.elem`content`;
  return (
    <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
      {children}
    </ComponentFactory>
  );
};

FormContent.propTypes = {
  children: PropTypes.node
};

export default FormContent;
