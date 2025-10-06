import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const Vehicle = ({ navLinkStyles }) => {
  return (
    <div>
      <h1>Vehicles Page</h1>
      <nav>
        <NavLink style={navLinkStyles} to="/vehicle/car">
          Cars
        </NavLink>{" "}
        <NavLink style={navLinkStyles} to="/vehicle/bike">
          Bikes
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Vehicle;
