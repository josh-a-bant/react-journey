import { useState } from "react";
import "./App.css";

function App() {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  return (
    <div
      className={`${
        toggleSwitch ? "bg-yellow-200" : "bg-gray-600"
      } h-screen flex justify-center items-center`}
    >
      <button
        className="cursor-pointer"
        onClick={() => setToggleSwitch(!toggleSwitch)}
      >
        <div
          className={`h-8 w-5 ${
            toggleSwitch ? "bg-stone-300" : "bg-stone-200"
          } `}
        ></div>
        <div
          className={`h-8 w-5 ${
            toggleSwitch ? "bg-stone-200" : "bg-stone-300"
          }`}
        ></div>
      </button>
    </div>
  );
}

export default App;
