import React from "react";

const Buttons = ({ children, setPage, page }) => {
  const handleClick = () => {
    if (children === "prev") {
      if (page > 1) setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className=" py-1 px-4 rounded bg-neutral-500 text-neutral-50 text-lg active:scale-95 shadow-sm shadow-neutral-600"
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
