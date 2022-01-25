import React from "react";
import SearchLanguages from "../Common/SearchLanguage/SearchLanguages";
import LocalizedMessage from "../Localization/LocalizedMessage";

//scss
import "./scss/aboutus.scss";

const AboutUs = () => {
  return (
    <div className="aboutus--container">
      <SearchLanguages />
      <div className="text-aboutus--container">
        <div>
          <h1 style={{ textAlign: "center" }}>
            <LocalizedMessage of="ABOUT_US_HISTORY" />
          </h1>
        </div>
        <div className="text-aboutus">
          <p>
            <b>
              <LocalizedMessage of="ABOUT_US_TEXT1_BOLD" />
            </b>
            <LocalizedMessage of="ABOUT_US_TEXT1" />
          </p>
          <p>
            <LocalizedMessage of="ABOUT_US_TEXT2" />
          </p>
          <p>
            <LocalizedMessage of="ABOUT_US_TEXT3" />
          </p>
          <p>
            <LocalizedMessage of="ABOUT_US_TEXT4" />
          </p>
          <p>
            <LocalizedMessage of="ABOUT_US_TEXT5" />
          </p>
          <p>
            <LocalizedMessage of="ABOUT_US_TEXT6" />
          </p>
          <p>
            <b>
              <LocalizedMessage of="ABOUT_US_TEXT1_BOLD" />
            </b>{" "}
            <LocalizedMessage of="ABOUT_US_TEXT7_1" />{" "}
            <a href="http://www.primariasv.ro/">
              <LocalizedMessage of="ABOUT_US_TEXT7_HREF" />
            </a>{" "}
            <LocalizedMessage of="ABOUT_US_TEXT7" />
          </p>
          <p>
            <b>
              <LocalizedMessage of="ABOUT_US_TEXT1_BOLD" />
            </b>{" "}
            <LocalizedMessage of="ABOUT_US_TEXT8_1" />{" "}
            <a href="http://www.urtp.ro/">
              <LocalizedMessage of="ABOUT_US_TEXT8_HREF" />
            </a>{" "}
            <LocalizedMessage of="ABOUT_US_TEXT8" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
