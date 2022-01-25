import React, { useState, useEffect } from "react";
import SIDEBAR from "../../Constants/sidebar.contants";
import { AUTHENTICATION } from "../../Constants/authentication.constants";
import { PAGES } from "../../Constants/pages.constants";
import LogoTPL from "../../Assets/Images/LogoTPL.svg";
import Hamburger from "../../Assets/Icons/hamburger.png";
import XBlack from "../../Assets/Icons/xBlack.png";

//import scss
import "./scss/sidebar.scss";

const Sidebar = () => {
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState(true);
  const redirectToPage = (page) => {
    window.location.href = page;
  };

  useEffect(() => {
    window.innerWidth < 1190
      ? setIsSidebarDisplayed(false)
      : setIsSidebarDisplayed(true);
  }, []);

  const check = (elem, elemIndex) => {
    if (
      PAGES[elemIndex].label.includes(elem) &&
      PAGES[elemIndex].value === window.location.pathname
    ) {
      return "sidebar--btns-btn";
    }
  };

  return isSidebarDisplayed ? (
    <div
      className={
        window.innerWidth < 1190 ? "sidebar--responsive" : "sidebar--container"
      }
    >
      {window.innerWidth < 1190 && (
        <img
          src={XBlack}
          alt="Close"
          className="xblack--img"
          onClick={() => setIsSidebarDisplayed(false)}
        />
      )}
      <img src={LogoTPL} alt="Logo TPL" className="sidebar--logo" />
      <ul className="sidebar--btns">
        {Object.keys(SIDEBAR).map((elem, elemIndex) => (
          <li
            className={check(elem, elemIndex)}
            key={elemIndex}
            onClick={() => {
              PAGES.forEach((page) => {
                page.label.includes(
                  Object.values(SIDEBAR)[elemIndex].props.of
                ) && redirectToPage(page.value);
              });
            }}
          >
            {Object.values(SIDEBAR)[elemIndex]}
          </li>
        ))}
      </ul>
      {/* <div
        style={{
          marginTop: "-800px",
          display: "flex",
          justifyContent: "space-evenly",
          height: "25px",
          width: "inherit",
        }}
      >
        <span className="imageLogin" title={AUTHENTICATION.LOGIN_RO} />
      </div> */}
    </div>
  ) : (
    <div className="hamburger--container">
      <img
        src={Hamburger}
        alt="hamburger"
        onClick={() => setIsSidebarDisplayed(true)}
      />
    </div>
  );
};

export default Sidebar;
