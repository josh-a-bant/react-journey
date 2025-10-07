import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const listSize = 20000;

  function handleChange(e) {
    setInput(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < listSize; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      )}
    </>
  );
}

export default App;
