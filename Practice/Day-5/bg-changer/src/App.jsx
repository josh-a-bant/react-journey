import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      style={{ backgroundColor: color }}
      className="h-screen flex justify-center"
    >
      <div className="flex gap-2 justify-center bg-neutral-100 rounded-xl px-4 py-2 fixed bottom-10">
        <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 bg-orange-800 rounded-xl text-white"
        >
          orange
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 bg-green-800 rounded-xl text-white"
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 bg-blue-800 rounded-xl text-white"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 bg-gray-800 rounded-xl text-white"
        >
          Grey
        </button>
      </div>
    </div>
  );
}

export default App;
