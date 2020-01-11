import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";
import Icon from "./Icon";

import "./styles/button.scss";

const FloatingActionButton = ({ disabled, icon, ...baseProps }) => {
  const css = bem`rdp-floating-action-button`;
  return (
    <ComponentFactory
      defaultTag="button"
      fixedClassName={disabled ? css.mod`disabled` : css}
      disabled={disabled}
      {...baseProps}
    >
      <Icon icon={icon} />
    </ComponentFactory>
  );
};

FloatingActionButton.propTypes = {
  icon: PropTypes.string.isRequired
};

export default FloatingActionButton;
