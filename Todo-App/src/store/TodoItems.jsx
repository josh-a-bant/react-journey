import { createContext } from "react";

export const TodoItems = createContext({
  todoItems: [],
  addNewTask: () => {},
  removeTask: () => {},
});
