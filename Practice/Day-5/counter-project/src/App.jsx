import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 20) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
