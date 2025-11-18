import React from "react";

const Alert = ({ children, type }) => {
  return (
    <div
      style={{
        color: "white",
        borderRadius: "8px",
        backgroundColor: type === "success" ? "green" : "red",
      }}
    >
      {children}
    </div>
  );
};

export default Alert;
