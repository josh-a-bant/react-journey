import "./App.css";
import Widget1 from "./components/widget1";
import Widget2 from "./components/Widget2";
import Widget3 from "./components/Widget3";

function App() {
  return (
    <div className="flex flex-col  items-center">
      <Widget1 />
      <Widget2 />
      <Widget3 />
    </div>
  );
}

export default App;
