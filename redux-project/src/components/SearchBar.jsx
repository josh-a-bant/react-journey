import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));
    setText("");
  };

  return (
    <>
      <form
        className="px-10 py-5 flex gap-5"
        onSubmit={(e) => submitHandler(e)}
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          type="text"
          placeholder="search something"
          className="border-2 outline-none text-xl px-3 py-1 rounded w-full"
        />
        <button className="border-2 bg-neutral-300 active:scale-95 cursor-pointer text-xl rounded px-3 py-1">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
