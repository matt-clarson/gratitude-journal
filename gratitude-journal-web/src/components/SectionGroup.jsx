import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

export const SectionGroupContext = createContext({
  active: null,
  setActive: null
});

const SectionGroup = ({ children, ...baseProps }) => {
  const [active, setActive] = useState(null);
  const css = bem`rdp-section-group`;
  return (
    <SectionGroupContext.Provider
      value={{
        active,
        setActive
      }}
    >
      <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
        {children}
      </ComponentFactory>
    </SectionGroupContext.Provider>
  );
};

SectionGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default SectionGroup;
