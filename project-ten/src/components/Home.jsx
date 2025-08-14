import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function hancleclicked() {
    navigate("/about");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio
        libero voluptates necessitatibus ex ut voluptatem eaque sit officiis,
        cupiditate hic delectus animi provident sint?
      </p>
      <button onClick={hancleclicked}>About Page</button>
    </div>
  );
};

export default Home;
