import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { query } = useSelector((state) => state.search);

  // console.log(query);

  return (
    <div>
      <h1 className="text-4xl font-semibold py-5 px-10 bg-(--c4) text-(--c1)">
        Media Search
      </h1>
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
