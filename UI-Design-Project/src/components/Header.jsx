import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-between items-center py-4 px-14">
      <div className="bg-neutral-900 text-white px-4 py-1 rounded-full uppercase text-sm font-semibold">
        Target Audience
      </div>
      <div className="uppercase text-sm px-4 py-1 bg-gray-200 rounded-full font-semibold">
        Digital Banking Platform
      </div>
    </div>
  );
};

export default Header;
