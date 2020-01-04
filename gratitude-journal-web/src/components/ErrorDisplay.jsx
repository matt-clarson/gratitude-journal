import React from "react";
import { isElement } from "react-is";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/error.scss";

const wrapError = error => {
  const errorContent = error.message ?? error;
  return <span key={errorContent}>{errorContent}</span>;
};

const processError = error => {
  if (isElement(error)) return error;
  else if (Array.isArray(error)) return error.map(wrapError);
  else return wrapError(error);
};

const ErrorDisplay = ({ error, ...baseProps }) => {
  const css = bem`rdp-error`;
  return (
    <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
      {processError(error)}
    </ComponentFactory>
  );
};

const errorShape = PropTypes.shape({ message: PropTypes.string.isRequired });

ErrorDisplay.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    errorShape,
    PropTypes.arrayOf(errorShape)
  ]).isRequired
};

export default ErrorDisplay;
