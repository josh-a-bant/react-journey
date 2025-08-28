const quote1 = {
  text: "One of my most productive days was throwing away 1000 lines of code.",
  author: "Ken Thompson",
  bio: "Designer of Unix Operating System",
};

const quote2 = {
  text: "A ship in port is safe, but that's not what ships are built for.",
  author: "Admiral Grace Hopper",
  bio: "Inventor of Programming Compilers",
};

const quote3 = {
  text: "If you optimize everything, you will always be unhappy.",
  author: "Donald Knuth",
  bio: "Pioneer of Algorithm Analysis",
};

import "./App.css";
import Quote from "./components/Quote";
import Quote2 from "./components/Quote2";
import Quote3 from "./components/Quote3";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Quote quote={quote1} />
      <Quote2 quote={quote2} />
      <Quote3 quote={quote3} />
    </div>
  );
}

export default App;
