import React from "react";
import kebabCase from "lodash/kebabCase";
import ComponentFactory from "./utils/ComponentFactory";

const toCSSVariable = name => `--rdp-theme-${kebabCase(name)}`;

const Theme = ({ colours, children, ...baseProps }) => {
  const processedColours = Object.entries(colours).reduce(
    (acc, [key, value]) => ({ ...acc, [toCSSVariable(key)]: value }),
    {}
  );
  return (
    <ComponentFactory
      fixedClassName="rdp-theme-root"
      defaultTag="span"
      style={processedColours}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

export default Theme;
