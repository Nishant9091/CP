import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ padding: "0", margin: "0" }}>
          <div className="col-md-2"></div>
          <div
            className="col-md-10 row1 justify-content-md-around align-items-end mb-0"
            style={{
              display: "flex",
              borderTop: "4px solid black",
              padding: "40px 0px 40px 0px",
            }}
          >
            <div className="col-md-auto justify-content-center">
              <div className="row d-block text-center d-sm-flex justify-content-center">
                <div className="col-md-4 w-auto">
                  <a>Privacy Policy</a>
                </div>
                <div
                  className="col-md-4 w-auto"
                  style={{
                    padding: "0px 10px 0px 10px",
                    borderLeft: "2px solid black",
                    borderRight: "2px solid black",
                  }}
                >
                  <a>Terms & Conditions</a>
                </div>
                <div className="col-md-4 w-auto">
                  <a>Copyright</a>
                </div>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="row d-block text-center d-sm-flex justify-content-center align-items-center">
                <div className="col-md-3 w-auto">
                  <a>Home</a>
                </div>
                <div className="col-md-3 w-auto">
                  <a>Contact Us</a>
                </div>
                <div className="col-md-3 w-auto">
                  <a>FAQ</a>
                </div>
                <div className="col-md-3 w-auto">
                  <a>Refund Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
