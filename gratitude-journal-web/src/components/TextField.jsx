import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";
import { FormContext } from "./Form";

import "./styles/text-field.scss";

const useAutoControlledInput = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const onChange = () => {
    setValue(inputRef.current.value);
  };
  return { inputRef, value, onChange };
};

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
  const css = bem`rdp-text-field`;
  const { autoControlled } = useContext(FormContext);
  const { inputRef, ...auto } = useAutoControlledInput();
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
        ref={inputRef}
        {...{
          name,
          type,
          pattern,
          minLength,
          maxLength,
          value,
          onChange: autoControlled ? auto.onChange : onChange,
          required,
          title: title ?? `${label} ${pattern ?? ""}`
        }}
      />
      {maxLength && (
        <span className={css.elem`char-count`}>{`${value?.length ??
          auto.value.length}/${maxLength}`}</span>
      )}
    </ComponentFactory>
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
  pattern: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number
};

export default TextField;
