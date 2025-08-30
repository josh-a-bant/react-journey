import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Card from "./components/Card";
import Buttons from "./components/Buttons";
import CATS from "./assets/cats";

import "./App.css";

function App() {
  const [catIdx, setCatIdx] = useState(2);
  return (
    <div className="mt-8 flex justify-center items-center">
      <Buttons show={catIdx > 0} onClick={() => setCatIdx(catIdx - 1)}>
        <MdKeyboardArrowLeft className="text-4xl" />
      </Buttons>

      <Card cat={CATS[catIdx]} />

      <Buttons
        show={catIdx < CATS.length - 1}
        onClick={() => setCatIdx(catIdx + 1)}
      >
        <MdKeyboardArrowRight className="text-4xl" />
      </Buttons>
    </div>
  );
}

export default App;
