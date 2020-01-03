import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/section.scss";

const Section = ({ flat, children, ...baseProps }) => {
  const css = bem`rdp-section`;
  return (
    <ComponentFactory
      defaultTag="section"
      fixedClassName={flat ? css.mod`flat` : css.mod`raised`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  flat: PropTypes.bool
};

export default Section;
