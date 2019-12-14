import React from "react";
import PropTypes from "prop-types";

import "./styles/header.scss";

const HeaderTitle = ({ children, tag = "span", ...baseProps }) => {
  const Tag = tag;
  return (
    <h1 className="theme-header-title">
      <Tag className="theme-header-title-content" {...baseProps}>
        {children}
      </Tag>
    </h1>
  );
};

HeaderTitle.propTypes = {
  children: PropTypes.element.isRequired
};

export default HeaderTitle;
