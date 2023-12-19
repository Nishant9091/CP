import React from "react";
import "./Home.css";
import Navbar from "./SideBar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <main class="d-flex" style={{ width: "-webkit-fill-available" }}>
        <div
          class="section"
          style={{
            alignItems: "end",
            justifyContent: "center",
            display: "flex",
            width: "20rem",
          }}
        ></div>

        <div
          class="page-wrapper content-site"
          style={{ width: "100%", height: "fit-content" }}
        >
          <div class="main-section container">
            <div class="row  " style={{ padding: "10px 5px" }}>
              <div class="col-lg-6">
                <div class="row ">
                  <div class="col py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/1600.JPG"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/new-arival-august.gif"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/bitkart-logo.gif"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/offerbanner.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-6 py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/3_year_warranty.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-6 py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/3_year_warranty.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/amd_offer_july2.gif"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/ExpressDeliveryArtboard_2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/ExpressDeliveryArtboard_2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 py-2">
                    <img
                      src="https://bitkart.com/media/wysiwyg/homepage/custom.gif"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
