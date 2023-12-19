import React from "react";
import "./Collaboration.css";
import Colimg from "../Photos/ANSYS_logo.webp";

const Collaboration = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10 collabdiv">
          <div class="breadcrumbs">
            <ul class="items">
              <li class="item home">
                <a href="https://bitkart.com/" title="Go to Home Page">
                  Home{" "}
                </a>
              </li>
              <li class="item category105">
                <strong>COLLABORATIONS</strong>
              </li>
            </ul>
          </div>
          <div class="Collab">
            <img src={Colimg} alt="collab" style={{ width: "15rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
