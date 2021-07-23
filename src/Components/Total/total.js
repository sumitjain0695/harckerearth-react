import React from "react";
import "./total.css";

function TotalCalc(props) {
  const data = [`Items ${7}`, "Discount", "Type Discount"];
  return (
    <div className="total-container">
      <p className="total-head">Total</p>
      {data.map((item, index) => (
        <div key={index} className="total-details">
          <span className="detail-item-name">{item}</span>
          <span className="detail-item-value">: {"$1355"}</span>
        </div>
      ))}

      <div className="footer">
        <span className="order-total">Order Total</span>
        <span className="order-total-value">{"$125.00"}</span>
      </div>
    </div>
  );
}

export default TotalCalc;
