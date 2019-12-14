import React from "react";
import PropTypes from "prop-types";

import "./styles/header.scss";

const HeaderActions = ({ children }) => (
  <div className="theme-header-actions">{children}</div>
);

HeaderActions.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default HeaderActions;
