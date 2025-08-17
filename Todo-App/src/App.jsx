import "./App.css";
import Heading from "./components/Heading";
import AddItems from "./components/AddItems";
import DisplayItems from "./components/DisplayItems";
import { useState } from "react";
import { TodoItems } from "./store/TodoItems";

function App() {
  const [todoItems, SetTodoItems] = useState([]);

  function addNewTask(newTask, newDate) {
    const newItem = {
      task: newTask,
      dueDate: newDate,
    };

    SetTodoItems([...todoItems, newItem]);
  }

  function removeTask(task) {
    const newItems = todoItems.filter((item) => item.task !== task);
    SetTodoItems(newItems);
  }

  return (
    <div className="mainContainer">
      <Heading />
      <TodoItems.Provider value={{ todoItems, addNewTask, removeTask }}>
        <AddItems />
        <DisplayItems />
      </TodoItems.Provider>
    </div>
  );
}

export default App;
