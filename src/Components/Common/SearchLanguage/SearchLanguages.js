import React from "react";
import "./scss/search.scss";
import searchPurple from "../../../Assets/Icons/searchPurple.png";

const SearchLanguages = () => {
  return (
    <div className="search-languages--container">
      <div style={{display: "flex"}}>
        <input className="search-input" />
        <img src={searchPurple} alt="search" />
      </div>
      <div>Languages</div>
    </div>
  );
};

export default SearchLanguages;
