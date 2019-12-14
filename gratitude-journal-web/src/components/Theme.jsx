import React from "react";
import kebabCase from "lodash/kebabCase";

const toCSSVariable = name => `--theme-${kebabCase(name)}`;

const Theme = ({ colours, children }) => {
  const processedColours = Object.entries(colours).reduce(
    (acc, [key, value]) => ({ ...acc, [toCSSVariable(key)]: value }),
    {}
  );
  return <span style={processedColours}>{children}</span>;
};

export default Theme;
