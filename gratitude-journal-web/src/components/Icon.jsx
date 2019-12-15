import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";

import "./styles/icons.scss";

const Icon = ({ icon, ...baseProps }) => (
  <ComponentFactory defaultTag="i" className="material-icons">
    {icon}
  </ComponentFactory>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
