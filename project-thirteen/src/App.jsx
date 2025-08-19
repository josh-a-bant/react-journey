import { useRef } from "react";
import "./App.css";

function App() {
  const btnRef = useRef();

  function handleClick() {
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <>
      <button ref={btnRef}>Target button</button>

      <br />
      <br />
      <button onClick={handleClick}>
        click to change color of target button
      </button>
    </>
  );
}

export default App;
