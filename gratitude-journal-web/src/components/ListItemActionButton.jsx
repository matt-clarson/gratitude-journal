import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import Icon from "./Icon";
import { css } from "./List";

const ListItemActionButton = ({ icon, onClick, children, ...baseProps }) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`item-action-button`}
    {...{ onClick, ...baseProps }}
  >
    {icon && <Icon icon={icon} />}
    {children}
  </ComponentFactory>
);

ListItemActionButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default ListItemActionButton;
