import React from "react";

const FlexBox = ({
  children,
  alignItems = "items-center",
  justifyItems = "justify-center",
  direction = "flex-row",
  gap = "gap-3",
  className,
}) => {
  return (
    <div
      className={`flex ${gap} ${direction} ${alignItems} ${justifyItems} ${className}`}
    >
      {children}
    </div>
  );
};

export default FlexBox;
