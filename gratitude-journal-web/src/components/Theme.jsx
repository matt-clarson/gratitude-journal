import React from "react";
import kebabCase from "lodash/kebabCase";
import ComponentFactory from "./utils/ComponentFactory";

const toCSSVariable = name => `--theme-${kebabCase(name)}`;

const Theme = ({ colours, children, ...baseProps }) => {
  const processedColours = Object.entries(colours).reduce(
    (acc, [key, value]) => ({ ...acc, [toCSSVariable(key)]: value }),
    {}
  );
  return (
    <ComponentFactory defaultTag="span" style={processedColours} {...baseProps}>
      {children}
    </ComponentFactory>
  );
};

export default Theme;
