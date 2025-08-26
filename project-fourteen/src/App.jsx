import { useEffect } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
      });
  });

  return (
    <>
      <button>fetch data from server</button>
    </>
  );
}

export default App;
