import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/counter/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(incrementByAmount(3))}>+3</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

export default App;
