import React, { useState } from "react";
import { SearchWrapper, SearchBar } from "./Search.styles";

function Search() {
  const [searchText, setSearchText] = useState("");
  return (
    <SearchWrapper>
      <SearchBar
        type="text"
        value={searchText}
        placeholder="Search Here"
        onChange={e => setSearchText(e.target.value)}
      />
    </SearchWrapper>
  );
}
export default Search;
