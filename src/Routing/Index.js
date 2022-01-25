import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Register from "../Components/Authentication/Register";
import Sidebar from "../Components/Sidebar/Sidebar";
import Authentication from "../Components/Authentication/Authentication";
import ResetPassword from "../Components/Authentication/ResetPassword";
import Home from "../Components/Home/Index";
import Contact from "../Components/Contact/Contact";
import { APP } from "./constants";
import Announces from "../Components/Announces/Announces";
import Announcement from "../Components/Announces/Announcement/Announcement";

//SCSS
import "../main.scss";
import Management from "../Components/Management/Management";
import AboutUs from "../Components/AboutUs/AboutUs";
import Prices from "../Components/Prices/Prices";
import Gallery from "../Components/Gallery/Gallery";

const PublicRoutes = () => {
  return (
    <Router>
      <div className="main--container">
        <Sidebar />
        <div style={{ width: "100%", height: "100vh", display: "flex" }}>
          <Routes>
            <Route path={APP.HOME} element={<Home />} />
            <Route path={APP.CONTACT} element={<Contact />} />
            <Route path={APP.ANNOUNCES} element={<Announces />} />
            <Route path={APP.ANNOUNCE_ID} element={<Announcement />} />
            <Route path={APP.REGISTER} element={<Register />} />
            <Route path={APP.LOGIN} element={<Authentication />} />
            <Route path={APP.RESET_PASSWORD} element={<ResetPassword />} />
            <Route path={APP.MANAGEMENT} element={<Management />} />
            <Route path={APP.ABOUTUS} element={<AboutUs />} />
            <Route path={APP.PRICES} element={<Prices />} />
            <Route path={APP.GALLERY} element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default PublicRoutes;
