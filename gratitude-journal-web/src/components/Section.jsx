import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";
import { SectionGroupContext } from "./SectionGroup";

import "./styles/section.scss";

const Section = ({ flat, children, ...baseProps }) => {
  const componentId = useRef(null);
  componentId.current = componentId.current ?? nanoid();
  const sectionGroup = useContext(SectionGroupContext);
  const css = bem`rdp-section`;
  const isInGroup = !!sectionGroup.setActive;

  let className;
  if (isInGroup)
    className =
      sectionGroup.active === componentId.current
        ? css.mod`raised`
        : css.mod`flat`;
  else className = flat ? css.mod`flat` : css.mod`raised`;
  const onMouseEnter = event => {
    if (isInGroup) sectionGroup.setActive(componentId.current);
    if (baseProps.onMouseEnter) baseProps.onMouseEnter(event);
  };
  const onMouseLeave = event => {
    if (isInGroup) sectionGroup.setActive(null);
    if (baseProps.onMouseLeave) baseProps.onMouseLeave(event);
  };

  return (
    <ComponentFactory
      defaultTag="section"
      fixedClassName={className}
      {...{ ...baseProps, onMouseEnter, onMouseLeave }}
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
