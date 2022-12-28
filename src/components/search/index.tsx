import React from "react";
import searchIcon from "../../assets/svgs/Search.svg";

const Search = () => {
  return (
    <div id="search">
      <label htmlFor="search__input">
        <input type="text" name="search__input" id="search__input" />
      </label>
      <img id="search__icon" src={searchIcon} alt="Search icon" />
    </div>
  );
};

export default Search;
