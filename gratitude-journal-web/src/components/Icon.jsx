import React from "react";
import PropTypes from "prop-types";

import "./styles/icons.scss";

const Icon = ({ icon }) => <i className="material-icons">{icon}</i>;

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
