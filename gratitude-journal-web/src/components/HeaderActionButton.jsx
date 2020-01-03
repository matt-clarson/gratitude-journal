import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import Icon from "./Icon";
import { HeaderCSS } from "./Header";

import "./styles/header.scss";

const HeaderActionButton = ({ onClick, children, icon, ...baseProps }) => {
  const baseCss = useContext(HeaderCSS);
  return (
    <ComponentFactory
      defaultTag="button"
      fixedClassName={baseCss.elem`action-button`}
      onClick={onClick}
      {...baseProps}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </ComponentFactory>
  );
};

HeaderActionButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string
};

export default HeaderActionButton;
