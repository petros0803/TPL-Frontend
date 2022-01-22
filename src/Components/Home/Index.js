import React from "react";
import SearchLanguages from "../Common/SearchLanguage/SearchLanguages";
import inaugurareAutobuze from "../../Assets/Images/inaugurareAutobuze.png";
import { HOME } from "../../Constants/home.constants";
import { ANNOUNCEMENT_DUMMY_DATA } from "../../DummyData/Announcement_dummy_data";

import "./scss/home.scss";

const Home = () => {
  return (
    <div className="home--container">
      <SearchLanguages />
      <div className="image--container">
        <div style={{ width: "1500px" }}>
          <div className="image-text--container">
            <img src={inaugurareAutobuze} alt="Home TPL" />
            <div className="image--text--background">
              <div className="image--text--title">
                {HOME.TEXT_IMAGE_TITLE_RO}
              </div>
              <div className="image--text">
                <p>{HOME.TEXT_IMAGE_1_RO}</p>
                <p>{HOME.TEXT_IMAGE_2_RO}</p>
                <p>{HOME.TEXT_IMAGE_3_RO}</p>
                <p>{HOME.TEXT_IMAGE_4_RO}</p>
              </div>
            </div>
          </div>
          <div className="announcements--container">
            <div className="announcement--title">
              <p>Anunturi</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {ANNOUNCEMENT_DUMMY_DATA.map(
                  (elem, elemIndex) =>
                    elemIndex < 3 && (
                      <div
                        className="announcement--each--container"
                        key={elemIndex}
                      >
                        <h1>{elem.label}</h1>
                        <hr />
                        <p>{elem.value}</p>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
