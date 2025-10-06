import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Vehicle from "./components/Vehicle";
import Car from "./components/Car";
import Bike from "./components/Bike";

// const navLinkStyles = ({ isActive }) => ({
//   color: isActive ? "#007bff" : "#333",
//   textDecoration: isActive ? "none" : "underline",
//   fontWeight: isActive ? "bold" : "normal",
//   padding: "5px 10px",
// });

function Info() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <nav>
          <NavLink style={navLinkStyles} to="/">
            Home
          </NavLink>{" "}
          <NavLink style={navLinkStyles} to="/about">
            About
          </NavLink>{" "}
          <NavLink style={navLinkStyles} to="/contact">
            Contact
          </NavLink>{" "}
          <NavLink style={navLinkStyles} to="/vehicle">
            Vehicles
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/vehicle"
            element={<Vehicle navLinkStyles={navLinkStyles} />}
          >
            <Route path="car" element={<Car />} />
            <Route path="bike" element={<Bike />} />
          </Route>
        </Routes> */}

        <nav>
          <Link to="/Emil">Emil</Link> |<Link to="/Tobias">Tobias</Link> |
          <Link to="/Linus">Linus</Link>
        </nav>

        <Routes>
          <Route path="/:firstname" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
