import React from "react";
import { classes } from "./css";

export default ({
  fixedClassName,
  className,
  defaultTag,
  tag,
  children,
  ...props
}) => {
  const Tag = tag || defaultTag;
  return (
    <Tag className={classes(fixedClassName, className)} {...props}>
      {children}
    </Tag>
  );
};
