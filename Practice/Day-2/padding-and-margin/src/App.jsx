import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-2xl">
        <button className="border-2 border-green-800 rounded-md text-green-500 px-8 py-1 m-2.5 ">
          first
        </button>
        <button className=" bg-blue-400 text-white px-10 py-1.5 rounded-md m-2.5">
          second
        </button>
        <button className="bg-violet-200 text-violet-800 px-8 py-1 m-2.5 rounded-4xl">
          third
        </button>
        <button className="text-white bg-blue-950 px-6 py-6 rounded-2xl">
          Fourth
        </button>
      </div>
    </>
  );
}

export default App;
