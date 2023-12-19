import React from "react";
import "./Component.css";

const Component = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <div class="breadcrumbs">
            <ul class="items">
              <li class="item home">
                <a href="https://bitkart.com/" title="Go to Home Page">
                  Home{" "}
                </a>
              </li>
              <li class="item cms_page">
                <strong>Request a component</strong>
              </li>
            </ul>
          </div>
          <div class="page-title-wrapper">
            <h1 class="page-title">
              <span class="base" data-ui-id="page-title-wrapper">
                Request a component
              </span>{" "}
            </h1>
          </div>
          <form class="missing-form m-5">
            <div class="row">
              <div class="col-md-4">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" />
              </div>
              <div class="col-md-4">
                <label for="name">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="col-md-4">
                <label for="name">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div class="row first-row">
              {/* <a href="/" class="float-right plus-icon add-element">
                <span class="fa fa-plus"></span>
              </a> */}
              <div class="col-md-6">
                <label for="component">Component Type</label>
                <select
                  id="component"
                  name="component"
                  class="component"
                  placeholder="Select"
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option>Cabinet</option>
                  <option>Processor</option>
                  <option>Motherboard</option>
                  <option>Graphic Card</option>
                  <option>Power Supply Unit</option>
                  <option>SSD</option>
                  <option>HDD</option>
                  <option>RAM</option>
                  <option>Cooler</option>
                  <option>Wifi</option>
                  <option>Custom Mod</option>
                  <option>Monitor</option>
                </select>
              </div>
              <div class="col-md-6 pl-0">
                <label for="model">Model Name</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  placeholder="Model Name"
                />
              </div>
            </div>
            <div class="row message-row">
              <div class="col-md-12">
                <label for="message" style={{ marginTop: "10px !important" }}>
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Other info.."
                ></textarea>
                <input type="button" value="Submit" id="submit-btn" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Component;
