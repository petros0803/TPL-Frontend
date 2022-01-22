import React from "react";
import SearchLanguages from "../Common/SearchLanguage/SearchLanguages";
import { ANNOUNCEMENT_DUMMY_DATA } from "../../DummyData/Announcement_dummy_data";
import { useNavigate } from "react-router-dom";
import { APP } from "../../Routing/constants";

// scss
import "./scss/announces.scss";

const Announces = () => {
  const goToAnnouncement = (id) => {
    navigate(APP.ANNOUNCE + id);
  };

  const navigate = useNavigate();

  return (
    <div className="announces--cointainer">
      <SearchLanguages />
      <div className="announcements--container">
        <div className="announcement--title">
          <p>Anunturi</p>
          <div className="announcement-all--container">
            {ANNOUNCEMENT_DUMMY_DATA.map((elem, elemIndex) => (
              <div
                className="announcement--each--container"
                key={elemIndex}
                onClick={() => goToAnnouncement(elemIndex)}
              >
                <h1>{elem.label}</h1>
                <hr />
                <p>{elem.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announces;
