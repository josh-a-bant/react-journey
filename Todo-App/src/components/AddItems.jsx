import { useContext } from "react";
import style from "../assets/css/AddItems.module.css";
import { useState } from "react";
import { TodoItems } from "../store/TodoItems";

const AddItems = () => {
  const { addNewTask } = useContext(TodoItems);
  const [task, SetTask] = useState("");
  const [date, SetDate] = useState("");

  function handleTask(event) {
    SetTask(event.target.value);
  }

  function handleDate(event) {
    SetDate(event.target.value);
  }

  function addTask(newTask, newDate) {
    addNewTask(newTask, newDate);
    SetTask("");
    SetDate("");
  }
  return (
    <div className={style.addItem}>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={handleTask}
        value={task}
      />
      <input type="date" onChange={handleDate} value={date} />
      <button className={style.btn} onClick={() => addTask(task, date)}>
        Add
      </button>
    </div>
  );
};

export default AddItems;
