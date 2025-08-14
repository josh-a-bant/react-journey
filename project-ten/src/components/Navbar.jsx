import styles from "../assets/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
