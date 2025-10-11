import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todoSlice";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { EmptyTodoList } from "./EmptyTodoList";

const Todo = () => {
  const todos = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");

  function handleAddTodo(text) {
    if (todoInput === "") {
      return;
    }
    dispatch(addTodo(text));
    setTodoInput("");
  }

  function handleEditTodo(todo) {
    setTodoInput(todo.text);
    dispatch(removeTodo(todo.id));
  }

  return (
    <div className="px-4 max-w-xl mx-auto">
      <AddTodo
        handleAddTodo={handleAddTodo}
        todo={todoInput}
        setTodo={setTodoInput}
      />

      {todos.length === 0 ? (
        <EmptyTodoList />
      ) : (
        <TodoList handleEdit={handleEditTodo} />
      )}
    </div>
  );
};

export default Todo;
