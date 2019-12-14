import React from "react";
import PropTypes from "prop-types";

import "./styles/header.scss";

const Header = ({ children }) => (
  <header className="theme-header">{children}</header>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Header;
