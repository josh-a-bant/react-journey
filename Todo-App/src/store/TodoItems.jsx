import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewTask: () => {},
  removeTask: () => {},
});

const TodoItemReducer = (currTodoItem, action) => {

  let newTodoItem = currTodoItem;

  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItem,
      {
        task: action.payload.task,
        dueDate: action.payload.dueDate,
      },
    ];
  } else if (action.type === "REMOVE_ITEM") {
    newTodoItem = currTodoItem.filter(
      (item) => item.task !== action.payload.task
    );
  }

  return newTodoItem;
};

const TodoItemsContextProvider = ({ children }) => {

  const [todoItems, dispatchTodoItems] = useReducer(TodoItemReducer, []);

  function addNewItemAction(newTask, newDate) {
    
    const addNewItemAction = {
      type: "NEW_ITEM",
      payload: {
        task: newTask,
        dueDate: newDate,
      },
    };

    dispatchTodoItems(addNewItemAction);
  }

  function removeItemAction(task) {

    const removeItemAction = {
      type: "REMOVE_ITEM",
      payload: {
        task: task,
      },
    };

    dispatchTodoItems(removeItemAction);
  }

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addNewItemAction, removeItemAction }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
