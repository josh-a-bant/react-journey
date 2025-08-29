import { useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("hi");
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="m-4 text-2xl text-gray-800">{msg}</div>
      <div>
        <button
          className="m-2 bg-red-300  px-4 py-2 rounded-md text-white text-xl cursor-pointer"
          onClick={() => {
            setMsg("Hello!");
          }}
        >
          One
        </button>
        <button
          className="m-2 bg-green-300  px-4 py-2 rounded-md text-white text-xl cursor-pointer"
          onClick={() => {
            setMsg("Wow!");
          }}
        >
          Two
        </button>
        <button
          className="m-2 bg-blue-300  px-4 py-2 rounded-md text-white text-xl cursor-pointer"
          onClick={() => setMsg("Yey!")}
        >
          Three
        </button>
      </div>
    </div>
  );
}

export default App;
