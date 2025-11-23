import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("JK");
    console.log(inputValue);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="JK - Jagannath"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
