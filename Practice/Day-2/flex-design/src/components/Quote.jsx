import React from "react";

const Quote = (props) => {
  const { quote } = props;
  return (
    <div className="flex flex-col m-8 w-[420px]f">
      <div className="bg-cyan-600 text-cyan-200 p-8 text-lg rounded-t-lg">
        <div>{quote.text}</div>
      </div>
      <div className="flex flex-col border border-stone-300 rounded-b-lg items-center bg-stone-100 p-5">
        <div className="text-cyan-700 text-xl">{quote.author}</div>
        <div className="text-stone-500">{quote.bio}</div>
      </div>
    </div>
  );
};

export default Quote;
