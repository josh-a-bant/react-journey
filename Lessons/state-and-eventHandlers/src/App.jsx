import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <>
      {/* <Button count={count} setCount={setCount} />
      <Button count={count} setCount={setCount} />
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button> */}

      <Text text={text} setText={setText} />
      <button
        onClick={() => {
          setText("");
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setText("Alice");
        }}
      >
        example
      </button>
    </>
  );
}

function Text({ text, setText }) {
  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter name here"
        value={text}
      />
      <p>Hello {text}</p>
    </>
  );
}

function Button({ count, setCount }) {
  function handleCLick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleCLick}>
        {count === 1 ? `Clicked ${count} time` : `Clicked ${count} times`}
      </button>
    </>
  );
}

export default App;
