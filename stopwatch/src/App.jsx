import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  let timeInterval = useRef(null);

  function handleStart() {
    timeInterval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timeInterval.current);
    timeInterval.current = null;
  }

  function handleReset() {
    handleStop();
    setTime(0);
  }

  return (
    <>
      <h1>StopWatch: {time}</h1>
      <button onClick={handleStart}>start</button>
      <br />
      <br />
      <button onClick={handleStop}>stop</button>
      <br />
      <br />
      <button onClick={handleReset}>reset</button>
    </>
  );
}

export default App;
