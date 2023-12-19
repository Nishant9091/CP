import { useState } from "react";
import React from "react";
import MyComponent from "./Form";
import Logo from "../Photos/1657275844880.jpg";
import "./Main.css";
import Details from "./Details";

const LeftImageSection = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  const pageWrapperStyle = {
    width: "100%",
    height: "fit-content",
  };

  const itemStyle = {
    margin: "0px 11px",
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2"></div>

        <div className="col-md-10">
          <div className="page-wrapper content-site" style={pageWrapperStyle}>
            <div className="breadcrumbs mx-4 my-5">
              <div>
                {/* <img src={Logo} alt="Logo" style={{display:"none"}} className="logo"/> */}
              </div>
              <ul className="items">
                <li className="item home">
                  <a
                    href="/index.html"
                    title="Go to Home Page"
                    style={itemStyle}
                    className="fw-bolder"
                  >
                    HOME
                  </a>
                </li>

                <li className="item product">
                  <strong style={itemStyle}>CUSTOM PC</strong>
                </li>
              </ul>
            </div>
          </div>

          <div class=" col-6-lg col-12-md col-12-sm d-flex justify-content-space-between">
            <div
              style={{
                flex: "1",
                height: "70vh",
                padding: "20px",
              }}
            >
              <img
                src="https://bitkart.com/media/cabinets/Fractal%20Design%20Torrent%20Compact%20RGB%20Tempered%20Glass-Black.png?v=1.1"
                alt="CUSTOM PC"
                aria-labelledby="labelledby1693286634126"
                class="fotorama__img"
                aria-hidden="false"
                style={{
                  borderRadius: "4%",
                  width: "27rem",
                  backgroundColor: "#b4b4b4a1",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              />
            </div>
            <div
              style={{
                paddingLeft: "5rem",
                flex: 3,
                padding: "20px",
                overflowY: "scroll",
                height: "64vh",
              }}
              class="scroll-bar container"
            >
              <h2
                class="fw-bolder"
                style={{ fontFamily: "'Anton', sans-serif", fontSize: "19px" }}
              >
                CUSTOM PC
              </h2>
              <br />
              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "'Rajdhani', sans-serif",
                  textAlign: "justify",
                  margin: "0",
                }}
              >
                Build your dream custom PC with our intuitive online tool!
                Choose high-performance components from NVIDIA, AMD, Intel, and
                more. Customize for gaming, creativity, or tech passion. Design
                your ultimate PC today!
              </p>
              <br />
              <div
                class="price-box price-final_price"
                data-role="priceBox"
                data-product-id="6"
                data-price-box="product-id-6"
              >
                <span
                  class="price-container price-final_price tax weee"
                  itemprop="offers"
                  itemscope=""
                  itemtype="http://schema.org/Offer"
                >
                  <span
                    id="product-price-6"
                    data-price-amount="0"
                    data-price-type="finalPrice"
                    class="price-wrapper"
                  ></span>
                  <meta itemprop="price" content="0" />
                  <meta itemprop="priceCurrency" content="INR" />
                </span>
                <div class="value" id="emi-div" style={{ display: "none" }}>
                  <span class="emi-value">
                    EMI starts at ₹ 0.00
                    <span style={{ color: "#8bc500", cursor: "pointer" }}>
                      View Options
                    </span>
                  </span>
                </div>
                <div class="product-view">
                  <div
                    class="product-view product-info-stock-sku"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      borderTop: "2px solid #cccccc",
                      borderBottom: "2px solid #cccccc",
                      paddingTop: "20px",
                      paddingBottom: "15px",
                    }}
                  >
                    <div
                      class="stock available fw-bolder"
                      title="Availability"
                      style={{ marginTop: "3px", fontSize: "20px" }}
                    >
                      Availability
                      <span
                        style={{
                          margin: "0px 15px",
                          fontFamily: "Oswald",
                          color: "#7e7e7e",
                        }}
                      >
                        In stock
                      </span>
                    </div>

                    <div
                      class="product attribute sku"
                      style={{ display: "flex" }}
                    >
                      <strong class="type" style={{ margin: "0px 15px" }}>
                        SKU
                      </strong>
                      <div class="value" itemprop="sku">
                        <span
                          class="fw-bolder"
                          style={{ fontFamily: "Oswald" }}
                        >
                          CUSTOM PC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <MyComponent />

                <div
                  style={{
                    gap: "20px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    margin: "36px 0 42px 0px",
                  }}
                >
                  <button
                    style={{
                      padding: "0 10px",
                      borderRadius: "30px",
                      display: "inline-block",
                      background: "#fff",
                      border: "3px solid #1f2610",
                      color: "#1f2610",
                      lineHeight: "46px",
                      width: "123px",
                      height: "49px",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      display: "flex",
                    }}
                  >
                    <button
                      onClick={handleDecrement}
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      <i
                        class="fa fa-solid fa-minus"
                        style={{ color: "#000000" }}
                      ></i>
                    </button>
                    {count}
                    <button
                      onClick={handleIncrement}
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      <i class="fa fa-plus" style={{ color: "#000000" }}></i>
                    </button>
                  </button>

                  <button
                    type="submit"
                    style={{
                      fontSize: "18px",
                      padding: "0 10px",
                      borderRadius: "30px",
                      display: "inline-block",
                      background: "black",
                      border: "3px solid #1f2610",
                      color: "white",
                      lineHeight: "46px",
                      width: "123px",
                      height: "49px",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <Details />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftImageSection;
