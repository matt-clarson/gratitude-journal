import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";
import { useMeasureString } from "./utils/measure-string";

import "./styles/spinner.scss";

const sizes = {
  xs: 60,
  s: 110,
  m: 160,
  l: 210,
  xl: 310
};

const Spinner = ({ size = "m", message, ...baseProps }) => {
  const { width: messageWidth } = useMeasureString(message);
  const css = bem`rdp-spinner`;
  const dropMessage = messageWidth > sizes[size];
  return (
    <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
      <i className={css.elem`spinner`.mod`${size}`} />
      <span
        className={
          dropMessage ? css.elem`message`.mod`drop` : css.elem`message`
        }
      >
        {message}
      </span>
    </ComponentFactory>
  );
};

Spinner.propTypes = {
  message: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes))
};

export default Spinner;
