import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/button.scss";

const Button = ({
  transparent,
  type,
  disabled,
  onClick,
  children,
  danger,
  ...baseProps
}) => {
  const css = transparent ? bem`rdp-transparent-button` : bem`rdp-button`;
  return (
    <ComponentFactory
      onClick={onClick ?? (() => {})}
      defaultTag="button"
      fixedClassName={
        disabled ? css.mod`disabled` : danger ? css.mod`danger` : css
      }
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
  disabled: PropTypes.bool,
  transparent: PropTypes.bool
};

export default Button;
