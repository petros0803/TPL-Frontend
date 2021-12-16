import React from "react";
import SIDEBAR from "../../Constants/sidebar.contants";
import loginWhite from "../../Assets/Icons/loginWhite.svg";
import loginPurple from "../../Assets/Icons/loginPurple.svg";
import registerWhite from "../../Assets/Icons/registerWhite.svg";
import registerPurple from "../../Assets/Icons/registerPurple.svg";
import { AUTHENTICATION } from "../../Constants/authentication.constants";

//import scss
import "./scss/sidebar.scss";
import LogoTPL from "../../Assets/Images/LogoTPL.svg";

const Sidebar = () => {
  return (
    <div className="sidebar--container">
      <img src={LogoTPL} alt="Logo TPL" className="sidebar--logo" />
      <ul className="sidebar--btns">
        {Object.keys(SIDEBAR).map(
          (elem, elemIndex) =>
            elem.includes("RO") && (
              <li className="sidebar--btns-btn" key={elemIndex}>
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
