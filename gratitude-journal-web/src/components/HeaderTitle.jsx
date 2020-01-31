import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { css } from "./Header";

import "./styles/header.scss";

const HeaderTitle = ({ children, ...baseProps }) => (
  <h1 className={css.elem`title`}>
    <ComponentFactory
      defaultTag="span"
      fixedClassName={css.elem`title-content`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  </h1>
);

HeaderTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderTitle;
