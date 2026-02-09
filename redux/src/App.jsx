import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <div>
        <h1 className="text-6xl mb-4">{count}</h1>
        <button
          className="border mx-2 px-4 py-2 rounded-md bg-neutral-600 text-3xl text-white"
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          className="border mx-2 px-4 py-2 rounded-md bg-neutral-600 text-3xl text-white"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
