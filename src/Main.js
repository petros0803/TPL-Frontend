import React from "react";
import Register from "./Components/Authentication/Register";
import Sidebar from "./Components/Sidebar/Sidebar";
import Authentication from "./Components/Authentication/Authentication";
import ResetPassword from "./Components/Authentication/ResetPassword";

//scss
import "./main.scss";

const Main = () => {
  return (
    <div className="main--container">
      <Sidebar />
      <Authentication />
    </div>
  );
};

export default Main;
