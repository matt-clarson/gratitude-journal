import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/icons.css";

const Icon = ({ icon, ...baseProps }) => (
  <ComponentFactory
    defaultTag="i"
    fixedClassName={bem`material-icons`}
    {...baseProps}
  >
    {icon}
  </ComponentFactory>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
