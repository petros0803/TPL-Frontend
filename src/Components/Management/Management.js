import React from "react";
import { MANAGEMENT } from "../../DummyData/management";
import ManagementIcon from "../../Assets/Icons/management.svg";
import downloadIcon from "../../Assets/Icons/download.png";
import SearchLanguages from "../Common/SearchLanguage/SearchLanguages";

//scss
import "./scss/management.scss";

const Management = () => {
  return (
    <div className="management--container">
      <SearchLanguages />
      <div className="persons--container">
        {MANAGEMENT.map((elem, elemIndex) => (
          <div key={elem.id} className="person--container">
            <div>
              <img src={ManagementIcon} alt="Management icon" />
            </div>
            <div>
              <p>{elem.name.split(" ")[0]}</p>
              <p>{elem.name.substring(elem.name.indexOf(" ") + 1)}</p>
            </div>
            {!!elem.cv && (
              <a href={elem.cv} target="_blank">
                <img
                  src={downloadIcon}
                  alt="download CV"
                  className="download-img"
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
