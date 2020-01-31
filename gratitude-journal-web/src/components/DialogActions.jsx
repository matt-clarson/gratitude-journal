import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { DialogCSS } from "./Dialog";

const DialogActions = ({ children, ...baseProps }) => {
  const css = useContext(DialogCSS);
  return (
    <ComponentFactory
      defaultTag="div"
      fixedClassName={css.elem`actions`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

DialogActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default DialogActions;
