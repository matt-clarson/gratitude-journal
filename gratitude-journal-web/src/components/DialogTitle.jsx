import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { DialogContext, css } from "./Dialog";
import Icon from "./Icon";

const DialogTitle = ({ children, closeButton, ...baseProps }) => {
  const { onClose } = useContext(DialogContext);
  return (
    <ComponentFactory
      defaultTag="header"
      fixedClassName={css.elem`title`}
      {...baseProps}
    >
      <h3>{children}</h3>
      {closeButton && (
        <button className={css.elem`title-close-button`} onClick={onClose}>
          <Icon icon="close" />
        </button>
      )}
    </ComponentFactory>
  );
};

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool
};

export default DialogTitle;
