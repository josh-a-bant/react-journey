import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center">Media Search</h1>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default HomePage;
