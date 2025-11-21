import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-between items-center p-8">
      <div className="bg-neutral-900 text-white px-4 py-1 rounded-full uppercase text-sm">
        Target Audience
      </div>
      <div className="uppercase text-xs px-4 py-1 bg-gray-200 rounded-full font-semibold">
        Digital Banking Platform
      </div>
    </div>
  );
};

export default Header;
