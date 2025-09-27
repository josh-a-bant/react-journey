import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { EmptyTodoList } from "./EmptyTodoList";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleOnChange(e) {
    setTodo(e.target.value);
  }

  function handleAddTodo() {
    setTodos([...todos, { todo, isComplete: false, id: uuidv4() }]);
    setTodo("");
  }

  function handleEdit(id) {
    let newTodo = todos.find((item) => item.id === id);
    setTodo(newTodo.todo);
    handleDelete(id);
  }

  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }

  function handleCheckBoxChange(id) {
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];

    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  }

  return (
    <div className="px-4 max-w-xl mx-auto">
      <AddTodo
        handleAddTodo={handleAddTodo}
        handleOnChange={handleOnChange}
        todo={todo}
      />

      {todos.length === 0 ? (
        <EmptyTodoList />
      ) : (
        <TodoList
          todos={todos}
          todo={todo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleCheckBoxChange={handleCheckBoxChange}
        />
      )}
    </div>
  );
};

export default Todo;
