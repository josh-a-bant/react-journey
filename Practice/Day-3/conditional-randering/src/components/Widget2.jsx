import React, { useState } from "react";

const Widget2 = () => {
  const [color, SetColor] = useState("blue");
  return (
    <div className="flex flex-col items-center bg-blue-100 border border-blue-300 px-4 py-2 m-4 rounded-md">
      <button
        className={`rounded-full ${
          color === "orange" ? "bg-orange-400" : "bg-blue-400"
        } bg-blue-400 px-2 py-0.5 mt-1 text-white`}
        onClick={() => {
          if (color === "orange") {
            SetColor("blue");
          } else {
            SetColor("orange");
          }
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Widget2;
