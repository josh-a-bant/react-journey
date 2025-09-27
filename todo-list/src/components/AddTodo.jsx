export function AddTodo({ handleAddTodo, handleOnChange, todo }) {
  return (
    <section className="flex flex-col gap-2 bg-violet-200/80 p-2 sm:p-4 rounded-lg">
      <h2 className="text-base sm:text-lg">Add a Todo</h2>
      <div className="flex gap-4">
        <input
          type="text"
          className="flex-1 rounded-lg text-sm sm:text-base outline-1 px-1 placeholder:tracking-tight"
          placeholder="Enter your task here"
          onChange={handleOnChange}
          value={todo}
        />
        <button
          className="px-4 py-1 rounded-lg text-sm sm:text-base bg-violet-700 text-violet-100 text-shadow-lg/20 cursor-pointer hover:bg-violet-600"
          onClick={handleAddTodo}
        >
          add
        </button>
      </div>
    </section>
  );
}
