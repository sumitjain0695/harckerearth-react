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
      <div className="segments">
        <div className="right-segment">
          <TotalCalc />
        </div>

        <div className="left-segment">
          <Itemstable />
        </div>
      </div>
    </div>
  );
}

export default Baselayout;
