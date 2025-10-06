import React from "react";
import { Link, Outlet } from "react-router-dom";

const Vehicle = () => {
  return (
    <div>
      <h1>Vehicles Page</h1>
      <nav>
        <Link to="/vehicle/car">Cars</Link>{" "}
        <Link to="/vehicle/bike">Bikes</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Vehicle;
