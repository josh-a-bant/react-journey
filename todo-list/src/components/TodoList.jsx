import cn from "classnames";

export function TodoList({
  todos,
  handleEdit,
  handleDelete,
  handleCheckBoxChange,
}) {
  return (
    <section
      className={cn(
        "bg-violet-200/80 p-2 sm:p-4 rounded-lg mt-4 ",
        todos.length == 0 ? "hidden" : "flex flex-col gap-4"
      )}
    >
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            className="flex gap-2 items-center text-xs sm:text-sm"
          >
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={() => handleCheckBoxChange(item.id)}
            />
            <p className={cn("flex-1", item.isComplete ? "line-through" : "")}>
              {item.todo}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                className=" border-violet-950 px-2 py-[2px] rounded-lg bg-violet-700 text-violet-100 text-shadow-lg/20 hover:bg-violet-600 cursor-pointer"
                onClick={() => handleEdit(item.id)}
              >
                edit
              </button>
              <button
                className=" border-violet-950 px-2 py-[2px] rounded-lg bg-violet-700 text-violet-100 text-shadow-lg/20 hover:bg-violet-600 cursor-pointer"
                onClick={() => handleDelete(item.id)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
