import React from "react";

export const ItemContainer = ({ children, className }) => {
  return (
    <div className={`item-container${className ? " " + className : ""}`}>
      {children}
    </div>
  );
};
