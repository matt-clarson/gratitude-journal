import React, { createContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/dialog.scss";

export const DialogCSS = createContext();
export const DialogContext = createContext();

const SIZES = ["s", "m", "l", "fs"];

const Dialog = ({ size = "m", open, onClose, children, ...baseProps }) => {
  const css = bem`rdp-dialog`;
  return (
    <DialogCSS.Provider value={css}>
      <DialogContext.Provider value={{ onClose }}>
        {open && (
          <div className={css.elem`backdrop`} onClick={onClose}>
            <ComponentFactory
              defaultTag="div"
              fixedClassName={css.mod`${size}`}
              {...{
                ...baseProps,
                onClick: event => {
                  event.stopPropagation();
                  return baseProps.onClick?.(event);
                }
              }}
            >
              {children}
            </ComponentFactory>
          </div>
        )}
      </DialogContext.Provider>
    </DialogCSS.Provider>
  );
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  size: PropTypes.oneOf(SIZES)
};

export default Dialog;
