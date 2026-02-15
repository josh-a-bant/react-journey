import React from "react";

const ResultCard = ({ item }) => {
  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem("colllection")) || [];

    const newData = [...oldData, item];

    localStorage.setItem("colllection", JSON.stringify(newData));
    console.log(oldData);
  };

  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-md overflow-hidden">
      <a target="_blank" className="h-full" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
      </a>
      <div
        className="flex justify-between gap-3 items-center w-full px-4 py-4 absolute bottom-0 text-white"
        id="bottom"
      >
        <h2 className="text-xs font-semibold flex items-center capitalize h-14 overflow-hidden opacity-90">
          {item.title}
        </h2>
        <button
          className="bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-semibold text-sm"
          onClick={() => addToCollection(item)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
