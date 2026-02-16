import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { query } = useSelector((state) => state.search);

  // console.log(query);

  return (
    <div className="flex flex-col gap-5">
      <SearchBar />

      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        <h2 className="px-10 py-5 text-2xl text-center text-(--c4) uppercase">
          Search something
        </h2>
      )}
    </div>
  );
};

export default HomePage;
