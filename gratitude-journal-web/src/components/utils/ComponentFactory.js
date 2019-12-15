import React from "react";

export default ({ defaultTag, tag, children, ...props }) => {
  const Tag = tag || defaultTag;
  return <Tag {...props}>{children}</Tag>;
};
