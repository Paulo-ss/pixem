import React from "react";
import PropTypes from "prop-types";

const DropdownMenuItem = ({ children }) => {
  return <>{children}</>;
};

DropdownMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropdownMenuItem;
