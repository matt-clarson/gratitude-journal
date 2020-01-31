import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import Icon from "./Icon";
import { css } from "./Header";

import "./styles/header.scss";

const HeaderActionButton = ({ onClick, children, icon, ...baseProps }) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`action-button`}
    onClick={onClick}
    {...baseProps}
  >
    {icon && <Icon icon={icon} />}
    {children}
  </ComponentFactory>
);

HeaderActionButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string
};

export default HeaderActionButton;
