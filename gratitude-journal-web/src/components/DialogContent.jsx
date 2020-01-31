import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { DialogCSS } from "./Dialog";

const DialogContent = ({ children, ...baseProps }) => {
  const css = useContext(DialogCSS);
  return (
    <ComponentFactory
      defaultTag="div"
      fixedClassName={css.elem`content`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

DialogContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default DialogContent;
