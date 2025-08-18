import "./App.css";
import Heading from "./components/Heading";
import AddItems from "./components/AddItems";
import DisplayItems from "./components/DisplayItems";
import TodoItemsContextProvider from "./store/TodoItems";

function App() {
  return (
    <div className="mainContainer">
      <Heading />
      <TodoItemsContextProvider>
        <AddItems />
        <DisplayItems />
      </TodoItemsContextProvider>
    </div>
  );
}

export default App;
