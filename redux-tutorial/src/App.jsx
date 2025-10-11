import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./feature/counter/counterSlice ";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleIncrementByAmount() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      <p className="text-4xl text-neutral-700">count: {count}</p>
      <div className="flex gap-2 items-center">
        <button
          className="size-8 bg-amber-200 border text-2xl"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="size-8 bg-amber-200 border text-2xl"
          onClick={handleDecrement}
        >
          -
        </button>
        <button className="bg-amber-200 border px-2 py-1" onClick={handleReset}>
          reset
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="number"
          className="border focus:outline-none max-w-30 px-1"
          placeholder="enter number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="size-8 bg-amber-200 border"
          onClick={handleIncrementByAmount}
        >
          add
        </button>
      </div>
    </div>
  );
}

export default App;
