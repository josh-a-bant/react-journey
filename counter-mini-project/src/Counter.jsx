import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  // return (
  //   <div>
  //     <div> {num} </div>
  //     <button onClick={() => setNum(num + 1)}>increment</button>
  //     <button onClick={() => setNum(num - 1)}>decrement</button>
  //   </div>
  // );

  return (
    <div className="bg-zinc-900 rounded-3xl shadow-2xl p-10 md:p-16 border border-zinc-800 max-w-md w-full">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-zinc-950 rounded-2xl p-10 shadow-xl border border-zinc-800 w-64 h-40">
          <div className="text-8xl font-semibold text-white tabular-nums tracking-tight">
            {num}
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-center mb-6">
        <button
          onClick={() => setNum(num - 1)}
          className="flex-1 px-8 py-4 bg-zinc-800 text-white font-medium rounded-full transition-all duration-200 hover:bg-zinc-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
          Decrement
        </button>

        <button
          onClick={() => setNum(num + 1)}
          className="flex-1 px-8 py-4 bg-blue-600 text-white font-medium rounded-full transition-all duration-200 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
          Increment
        </button>
      </div>

      <div className="text-center">
        <button
          onClick={() => setNum(0)}
          className="px-6 py-2.5 text-blue-400 hover:text-blue-300 font-medium rounded-full transition-all duration-200 hover:bg-zinc-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
