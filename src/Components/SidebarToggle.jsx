import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SidebarToggle.css";
import Logo from "../Photos/1657275844880.jpg";

export default function SidebarToggle() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <FaIcons.FaBars
        onClick={showSidebar}
        style={{
          color: "black",
          position: "absolute",
          top: "6%",
          left: "87%",
          display:"none"
        }}
        className="bars"
      />
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="container-fluid" onClick={showSidebar}>
          <div className="row">
            <div className="col-md-2 navcontent">
              <nav
                className=" D-5 d-flex flex-column  align-content-between"
                style={{
                  width: "250px",
                  height: "105vh",
                  background: "black",
                  opacity: "1",
                }}
              >
                <div className="toggler-img w-auto">
                  <img src={Logo} alt="" width="100px" className="img-fluid" />
                </div>
                <div
                  className="nav-main d-flex align-items-center"
                  style={{ margin: " 8rem auto 8rem auto" }}
                >
                  <ul
                    className="list-unstyled m-0"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <li className="w-auto py-1">
                      <a href="/index.html">HOME</a>
                    </li>
                    <li className="w-auto py-1">
                      <a href="/Custompc.html">CUSTOM PC</a>
                    </li>
                    <li className="w-auto py-1">
                      <a href="#">PRE BUILT PC</a>
                    </li>
                    <li className="w-auto py-1">
                      <a href="#">PERIPHERALS</a>
                    </li>
                    <li className="w-auto py-1">
                      <a href="#">COLLABORATION</a>
                    </li>
                    <li className="w-auto py-1">
                      <a href="/AboutUs.html">ABOUT US</a>
                    </li>
                    <li className="w-auto py-1">
                      <a href="/Track.html">TRACKING YOUR ORDER</a>
                    </li>
                    <li className="fs-4 fw-semibold w-auto">
                      <a href="#">MORE ++</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-icon mb-3 d-flex justify-content-evenly flex-row">
                  <i className="fa-solid fa-magnifying-glass text-light"></i>
                  <i className="fa-solid fa-basket-shopping text-light"></i>
                  <i className="fa-solid fa-user text-light"></i>
                </div>
                <div className="nav-icon-2 d-flex justify-content-evenly flex-row">
                  <i className="fa-brands fa-instagram text-light"></i>
                  <i className="fa-brands fa-youtube text-light"></i>
                  <i className="fa-brands fa-facebook text-light"></i>
                  <i className="fa-brands fa-snapchat text-light"></i>
                </div>
              </nav>
            </div>
            <div className="col-md-10"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
