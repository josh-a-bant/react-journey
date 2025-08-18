import { useContext } from "react";
import style from "../assets/css/DisplayItems.module.css";
import { TodoItemsContext } from "../store/TodoItems";

const DisplayItems = () => {
  const { todoItems, removeItemAction } = useContext(TodoItemsContext);
  return (
    <div>
      {todoItems.map((item) => (
        <div key={item.task} className={style.displayContainer}>
          <div>{item.task}</div>
          <div>{item.dueDate}</div>
          <button
            className={style.btn}
            onClick={() => removeItemAction(item.task)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayItems;
