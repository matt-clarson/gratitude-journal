import React, { useContext } from "react";
import PropTypes from "prop-types";
import ComponentFactory from "./utils/ComponentFactory";
import { HeaderCSS } from "./Header";

import "./styles/header.scss";

const HeaderTitle = ({ children, ...baseProps }) => {
  const baseCss = useContext(HeaderCSS);
  return (
    <h1 className={baseCss.elem`title`}>
      <ComponentFactory
        defaultTag="span"
        fixedClassName={baseCss.elem`title-content`}
        {...baseProps}
      >
        {children}
      </ComponentFactory>
    </h1>
  );
};

HeaderTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderTitle;
