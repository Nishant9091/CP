import React from "react";

const Track = () => {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div>
          <h3 style={{ marginTop: "10rem", marginRight: "42rem" }}>
            Track your Order
          </h3>
        </div>
        <div
          style={{
            borderBottom: "1px solid gray",
            alignItems: "center",
            marginBottom: "10rem",
            padding: "0rem 0rem 5rem 0rem",
            display: "flex",
          }}
        >
          <div>
            <input
              type="number"
              class="form-control"
              name="order_id"
              id="number"
              placeholder="Order Number"
              style={{ width: "25rem" }}
            />
          </div>
          <div>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Email Address"
              style={{ width: "25rem" }}
            />
          </div>
          <div>
            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
