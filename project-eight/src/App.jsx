import { useState } from "react";
import InputType from "./components/InputType";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InputType></InputType>
    </>
  );
}

export default App;
