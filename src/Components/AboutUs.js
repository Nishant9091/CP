import React from "react";
import About from "../Photos/nav20.png";
import Our from "../Photos/AboutUs.jpeg";

const AboutUs = () => {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div
          class="page-wrapper content-site"
          style={{ width: "100%", height: "fit-content" }}
        >
          <div class="breadcrumbs mx-4 my-5">
            <ul class="items">
              <li class="item home">
                <a
                  href="/index.html"
                  title="Go to Home Page"
                  style={{ margin: "0px 11px" }}
                  class="fw-bolder"
                >
                  HOME
                </a>
              </li>

              <li class="item product">
                <strong style={{ margin: "0px 11px" }}>About Us</strong>
              </li>
            </ul>
            <div>
              <img
                src={About}
                alt="img"
                style={{
                  height: "24rem",
                  width: "69rem",
                  filter: " blur(2px)",
                }}
              />
              <span
                class="span_us"
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 500,
                  fontSize: "45px",
                  color: "#fff",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                About us
              </span>
            </div>
          </div>

          <div class="list-contact-info">
            <div class="container" style={{ gridGap: "0px" }}>
              <div class="row h-100">
                <div class="col-lg-6 col-12">
                  <div class=" row w-auto ">
                    <div class=" mb-md-3">
                      <img
                        src={Our}
                        style={{ height: "30rem", width: "50rem" }}
                        alt="Pre Built Computers"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-12">
                  <h4 style={{ marginTop: "10px" }}>
                    <span>Our</span> Story
                  </h4>
                  <div class="description">
                  <p>AXEPERT EXHIBITS (P). LTD., one of the few IT System
                    integration , professional service and software development
                    Firms in New Delhi that work with Enterprise System and
                    companies. As a corporate, Axepert Exhibits Pvt. Ltd.
                    Provides IT Consultancy, Software Design and development,
                    Web-Application Design and Development as well. Being a
                    Pioneer in Customized user application with finest and
                    quality user experience thus deadlines on time and on track.
                    We gain competitive advantage from these distinctive
                    capabilities and have developed the ability to implement and
                    manage complex IT System in changing times with greater
                    effectiveness than many competitors.</p>
                  </div>
                  <p class="adress">
                    <span>
                      <i
                        class="fa fa-map-marker"
                        style={{ marginTop: "4px" }}
                      ></i>
                    </span>
                    Address:B-4/307 C, 2nd Floor, Keshavpuram, Delhi-110035
                  </p>
                  <p class="cell-phone">
                    <span>
                      <i
                        class="fa fa-phone-square"
                        style={{ marginTop: "4px" }}
                      ></i>
                    </span>
                    Hotline: +91 9717217878
                  </p>
                  <p class="e-mail">
                    <span>
                      <i class="fa fa-envelope"></i>
                    </span>
                    Email:mail@axepertexhibits.com
                  </p>
                  <div class="nav-fotter-2">
                    <span>Social:</span>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-snapchat"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="banking">
              <div class="title-us">
                <div class="container mt-5">
                  <div class="row">
                    <div class="col-6" style={{ fontSize: "12px" }}>
                      <h3>Bank Details</h3>
                      <p>BANK NAME : ICICI BANK</p>
                      <p>ACCOUNT NUMBER : 418005000675</p>
                      <p>ACCOUNT HOLDER NAME : AE RETAIL LLP</p>
                      <p>ACCOUNT TYPE : CURRENT </p>
                      <p>IFSC CODE: ICIC0004180 </p>
                      <p>BRANCH : NEHRU PLACE </p>
                    </div>
                    <div class="col-6">
                      <p>
                        <img
                          src="https://bitkart.com/media/wysiwyg/Bitkart_Payment.jpeg"
                          alt=""
                          style={{ maxWidth: "40%" }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
