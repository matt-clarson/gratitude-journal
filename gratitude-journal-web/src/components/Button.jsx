import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/button.scss";

const Button = ({ type, disabled, onClick, children, ...baseProps }) => {
  const css = bem`rdp-button`;
  return (
    <ComponentFactory
      onClick={onClick ?? (() => {})}
      defaultTag="button"
      fixedClassName={disabled ? css.mod`disabled` : css}
      type={type}
      disabled={disabled}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool
};

export default Button;
