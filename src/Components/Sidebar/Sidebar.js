import React from "react";
import SIDEBAR from "../../Constants/sidebar.contants";

//import scss
import "./scss/sidebar.scss"
import LogoTPL from "../../Assets/Images/LogoTPL.svg"

const Sidebar = () => {
  return (
    <div className="sidebar--container">
        <img src={LogoTPL} alt="Logo TPL" className="sidebar--logo"/>
      <ul className="sidebar--btns">
        {Object.keys(SIDEBAR).map(
          (elem, elemIndex) =>
            elem.includes("RO") && <li className="sidebar--btns-btn" key={elemIndex}>{Object.values(SIDEBAR)[elemIndex]}</li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
