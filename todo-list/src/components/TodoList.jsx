import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todoSlice";

export function TodoList({ handleEdit }) {
  const todos = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeTodo(id));
  }

  return (
    <section className="bg-violet-200/80 p-2 sm:p-4 rounded-lg mt-4 flex flex-col gap-4">
      {todos.map((item) => (
        <div
          key={item.id}
          className="flex gap-2 items-center text-xs sm:text-sm"
        >
          <input
            type="checkbox"
            className="cursor-pointer"
            onChange={() => dispatch(toggleTodo(item.id))}
          />
          <p className={item.isComplete ? "flex-1 line-through" : "flex-1"}>
            {item.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              className="border-violet-950 px-2 py-[2px] rounded-lg bg-violet-700 text-violet-100 text-shadow-lg/20 hover:bg-violet-600 cursor-pointer"
              onClick={() => handleEdit(item)}
            >
              edit
            </button>
            <button
              className="border-violet-950 px-2 py-[2px] rounded-lg bg-violet-700 text-violet-100 text-shadow-lg/20 hover:bg-violet-600 cursor-pointer"
              onClick={() => handleDelete(item.id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
