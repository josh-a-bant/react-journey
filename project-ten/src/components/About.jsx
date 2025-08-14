import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function handleClicked() {
    navigate("/");
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, ipsa
        maxime! Numquam ut, non accusantium corrupti dicta nulla quisquam quia
        velit perferendis, quibusdam obcaecati. Ipsam.
      </p>
      <button onClick={handleClicked}>Home</button>
    </div>
  );
};

export default About;
