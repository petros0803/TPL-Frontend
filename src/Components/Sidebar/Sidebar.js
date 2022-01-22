import React, { useState, useEffect } from "react";
import SIDEBAR from "../../Constants/sidebar.contants";
import { AUTHENTICATION } from "../../Constants/authentication.constants";
import { PAGES } from "../../Constants/pages.constants";
import LogoTPL from "../../Assets/Images/LogoTPL.svg";

//import scss
import "./scss/sidebar.scss";

const Sidebar = () => {
  const redirectToPage = (page) => {
    window.location.href = page;
  };

  const [pag, setPag] = useState();

  useEffect(() => {
    PAGES.forEach(
      (page) => page.value === window.location.pathname && setPag(page.label)
    );
  }, []);

  return (
    <div className="sidebar--container">
      <img src={LogoTPL} alt="Logo TPL" className="sidebar--logo" />
      <ul className="sidebar--btns">
        {Object.keys(SIDEBAR).map(
          (elem, elemIndex) =>
            elem.includes("RO") && (
              <li
                className={
                  pag?.includes(Object.values(SIDEBAR)[elemIndex])
                    ? "sidebar--btns-btn"
                    : ""
                }
                key={elemIndex}
                onClick={() => {
                  PAGES.forEach((page) => {
                    page.label.includes(Object.values(SIDEBAR)[elemIndex]) &&
                      redirectToPage(page.value);
                  });
                }}
              >
                {Object.values(SIDEBAR)[elemIndex]}
              </li>
            )
        )}
      </ul>
      <div
        style={{
          marginTop: "-800px",
          display: "flex",
          justifyContent: "space-evenly",
          height: "25px",
          width: "inherit",
        }}
      >
        <span className="imageLogin" title={AUTHENTICATION.LOGIN_RO} />
      </div>
    </div>
  );
};

export default Sidebar;
