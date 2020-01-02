import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/button.scss";

const Button = ({ type, onClick, children, ...baseProps }) => {
  const css = bem`theme-button`;
  return (
    <ComponentFactory
      onClick={onClick ?? (() => {})}
      defaultTag="button"
      fixedClassName={css}
      type={type}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
