import React, { useRef } from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/text-field.scss";

const TextField = ({
  width = 200,
  name,
  label,
  value,
  onChange,
  type = "text",
  required,
  title,
  pattern,
  minLength,
  maxLength,
  ...baseProps
}) => {
  const css = bem`theme-text-field`;
  const id = useRef(null);
  if (!id.current) {
    id.current = nanoid();
  }
  return (
    <ComponentFactory
      style={{ width }}
      fixedClassName={css}
      defaultTag="div"
      {...baseProps}
    >
      <label id={id.current} className={css.elem`label`}>
        {label}
      </label>
      <input
        className={css.elem`input`}
        aria-labelledby={id.current}
        {...{
          name,
          type,
          pattern,
          minLength,
          maxLength,
          value,
          onChange,
          required,
          title: title ?? `${label} ${pattern ?? ""}`
        }}
      />
      {maxLength && (
        <span
          className={css.elem`char-count`}
        >{`${value.length}/${maxLength}`}</span>
      )}
    </ComponentFactory>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
  pattern: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number
};

export default TextField;
