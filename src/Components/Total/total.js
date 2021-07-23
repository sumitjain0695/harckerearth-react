import React, { useContext } from "react";
import { DataContext } from "../../Context/data-context";
import "./total.css";

function TotalCalc(props) {
  const KEYS = [`Items ${7}`, "Discount", "Type Discount"];
  const { data } = useContext(DataContext);
  return (
    <div className="total-container">
      {console.log("context value", data)}
      <p className="total-head">Total</p>
      {KEYS.map((item, index) => (
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
