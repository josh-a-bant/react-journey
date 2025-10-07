import { useState, useTransition } from "react";
import "./App.css";

const products = Array.from({ length: 10000 }, (_, i) => `Product ${i + 1}`);

function App() {
  // const [isPending, startTransition] = useTransition();
  // const [input, setInput] = useState("");
  // const [list, setList] = useState([]);
  // const listSize = 20000;
  // function handleChange(e) {
  //   setInput(e.target.value);
  //   startTransition(() => {
  //     const l = [];
  //     for (let i = 0; i < listSize; i++) {
  //       l.push(e.target.value);
  //     }
  //     setList(l);
  //   });
  // }
  // return (
  //   <>
  //     <input type="text" value={input} onChange={handleChange} />
  //     {isPending ? (
  //       <div>Loading...</div>
  //     ) : (
  //       list.map((item, index) => {
  //         return <div key={index}>{item}</div>;
  //       })
  //     )}
  //   </>
  // );

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(products);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value); // urgent update (typing should feel instant)

    startTransition(() => {
      // non-urgent update (filtering big data)
      const filtered = products.filter((p) =>
        p.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product Search</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
        style={{ padding: "10px", width: "300px" }}
      />
      {isPending && <p style={{ color: "gray" }}>Loading suggestions...</p>}

      <ul>
        {results.slice(0, 20).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
