import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl mb-4">{count}</h1>
        <button
          className="border mx-2 px-4 py-2 rounded-md bg-neutral-600 text-white"
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          className="border mx-2 px-4 py-2 rounded-md bg-neutral-600  text-white"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>

        <input
          type="number"
          className="border mx-2 px-4 py-2 rounded-md bg-neutral-600 text-white"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <button
          className="border mx-2 px-4 py-2 rounded-md bg-neutral-600  text-white"
          onClick={() => {
            dispatch(incrementByValue(Number(num)));
          }}
        >
          increment by amount
        </button>
      </div>
    </>
  );
}

export default App;
