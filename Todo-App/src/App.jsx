import "./App.css";
import Heading from "./components/Heading";
import AddItems from "./components/AddItems";
import DisplayItems from "./components/DisplayItems";

function App() {
  return (
    <div className="mainContainer">
      <Heading />
      <AddItems />
      <DisplayItems />
    </div>
  );
}

export default App;
