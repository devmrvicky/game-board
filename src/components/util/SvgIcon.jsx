import React from "react";

const SvgIcon = ({ children, className = "" }) => {
  return <div className={`w-6 ${className}`}>{children}</div>;
};

export default SvgIcon;
