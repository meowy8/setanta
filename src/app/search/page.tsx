import React from "react";
import SuspenseBoundary from "../components/SuspenseBoundary";
import Search from "../components/Search";

const SearchPage = () => {
  return (
    <SuspenseBoundary>
      <Search />
    </SuspenseBoundary>
  );
};

export default SearchPage;
