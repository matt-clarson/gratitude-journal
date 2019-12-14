import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

import "./styles/header.scss";

const HeaderActionButton = ({
  tag = "button",
  onClick,
  children,
  icon,
  ...baseProps
}) => {
  const Tag = tag;
  return (
    <Tag
      className="theme-header-action-button"
      onClick={onClick}
      {...baseProps}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </Tag>
  );
};

HeaderActionButton.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string
};

export default HeaderActionButton;
