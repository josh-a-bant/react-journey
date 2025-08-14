import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const displayButtonValue = (buttonValue) => {
    if (buttonValue === "C") {
      setDisplayValue("");
    } else if (buttonValue === "=") {
      const result = eval(displayValue);
      setDisplayValue(result);
    } else {
      setDisplayValue(displayValue + buttonValue);
    }
  };

  return (
    <>
      <Display displayValue={displayValue} />
      <Buttons displayButtonValue={displayButtonValue} />
    </>
  );
}

export default App;
