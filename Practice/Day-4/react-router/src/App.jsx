import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Vehicle from "./components/Vehicle";
import Car from "./components/Car";
import Bike from "./components/Bike";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
          <Link to="/contact">Contact</Link> <Link to="/vehicle">Vehicles</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehicle" element={<Vehicle />}>
            <Route path="car" element={<Car />} />
            <Route path="bike" element={<Bike />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
