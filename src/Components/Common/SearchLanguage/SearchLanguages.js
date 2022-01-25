import React from "react";
import "./scss/search.scss";
import searchPurple from "../../../Assets/Icons/searchPurple.png";
import roFlag from "../../../Assets/Icons/ro.png";
import ukFlag from "../../../Assets/Icons/uk.png";
import Context from "../../Localization/Context";

const SearchLanguages = () => {
  const changeLanguage = (language) => {
    localStorage.setItem("language", language);
  };

  return (
    <Context.Consumer>
      {({ state, actions }) => {
        let handleChange = (val) => actions.changeLanguage(val);
        return (
          <div className="search-languages--container">
            <div style={{ display: "flex" }}>
              <input className="search-input" />
              <img
                src={searchPurple}
                alt="search"
                style={{ marginLeft: "-30px" }}
              />
            </div>
            <div>
              <img
                src={roFlag}
                alt="Romana"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  handleChange("ro");
                  localStorage.setItem("language", "ro");
                }}
                className={state.language === "ro" && "selectedLanguage"}
              />
              <img
                src={ukFlag}
                alt="Engleza"
                onClick={() => {
                  handleChange("en");
                  localStorage.setItem("language", "en");
                }}
                className={state.language === "en" && "selectedLanguage"}
              />
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default SearchLanguages;
