import React from "react";
import Itemstable from "./Items/table";
import TotalCalc from "./Total/total";
import "./baselayout.css";

function Baselayout(props) {
  return (
    <div className="baselayout">
      <div className="order-summary">
        <span className="back-icon">&#8249;</span> <span>Order Summary</span>
      </div>
      <hr className="separator" />

      <div className="segments">
        <div className="left-segment">
          <Itemstable />
        </div>
        <div className="right-segment">
          <TotalCalc />
        </div>
      </div>
    </div>
  );
}

export default Baselayout;
