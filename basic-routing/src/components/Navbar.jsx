import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-2 px-6 bg-red-300 text-white">
        <h1 className="text-4xl">JK</h1>
        <div className="flex gap-5 text-xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
