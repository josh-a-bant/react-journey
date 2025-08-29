import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex justify-center items-center text-4xl">
      <button
        className="bg-green-400 text-4xl w-8 mx-4 text-white rounded-md"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <p>{count}</p>
      <button
        className="bg-blue-400 text-4xl w-8 mx-4 text-white rounded-md"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default App;
