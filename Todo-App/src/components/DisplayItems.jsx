import { useContext } from "react";
import style from "../assets/css/DisplayItems.module.css";
import { TodoItems } from "../store/TodoItems";

const DisplayItems = () => {
  const { todoItems, removeTask } = useContext(TodoItems);
  return (
    <div>
      {todoItems.map((item) => (
        <div key={item.task} className={style.displayContainer}>
          <div>{item.task}</div>
          <div>{item.dueDate}</div>
          <button className={style.btn} onClick={() => removeTask(item.task)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayItems;
