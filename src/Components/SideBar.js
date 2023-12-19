import React from "react";
import "./CustomBuild.css";
import P1 from "../Photos/1657275844880.jpg";
import LeftImageSection from "./Main";
import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <nav
              className=" p-5 d-flex flex-column fixed-bottom align-content-between"
              style={{ width: "250px", height: "100vh" }}
            >
              <div className="nav-img w-auto">
                <img src={P1} alt="" width="100px" className="img-fluid" />
              </div>
              <div className="nav-main m-auto d-flex align-items-center">
                <ul
                  className="list-unstyled m-0"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li className="w-auto py-1">
                    <a href="/" activeClassName="active">
                      HOME
                    </a>
                  </li>
                  <li className="w-auto py-1">
                    <NavLink to="/custom-pc" activeClassName="active">
                      CUSTOM PC
                    </NavLink>
                  </li>
                  <li className="w-auto py-1">
                    <a href="/" activeClassName="active">
                      PRE BUILT PC
                    </a>
                  </li>
                  <li className="w-auto py-1">
                    <a href="/" activeClassName="active">
                      PERIPHERALS
                    </a>
                  </li>
                  <li className="w-auto py-1">
                    <NavLink to="/collaboration" activeClassName="active">
                      COLLABORATION
                    </NavLink>
                  </li>
                  <li className="w-auto py-1">
                    <NavLink to="/AboutUs" activeClassName="active">
                      ABOUT US
                    </NavLink>
                  </li>
                  <li className="w-auto py-1">
                    <NavLink to="/Track" activeClassName="active">
                      TRACKING YOUR ORDER
                    </NavLink>
                  </li>
                  <li className="w-auto py-1">
                    <NavLink to="/component" activeClassName="active">
                      REQUEST A COMPONENT
                    </NavLink>
                  </li>
                  <li className="w-auto py-1">
                    <a href="/" activeClassName="active">
                      GALLERY
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-fotter-1 d-flex justify-content-around align-items-center mb-3">
                <i className="fa-solid fa-magnifying-glass text-dark"></i>
                <i className="fa-solid fa-basket-shopping text-dark"></i>
                <i className="fa-solid fa-user text-dark"></i>
              </div>
              <div className="nav-fotter-2 d-flex justify-content-around align-items-center">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-snapchat"></i>
              </div>
            </nav>
          </div>
          <div className="col-md-10">{/* <LeftImageSection /> */}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
