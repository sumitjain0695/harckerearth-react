import React, { useContext } from "react";
import { DataContext } from "../../Context/data-context";
import "./total.css";

function TotalCalc(props) {
  const { data } = useContext(DataContext);
  const KEYS = [
    `Items ${data.reduce((a, b) => a + b.quantity, 0)}`,
    "Discount",
    "Type Discount",
  ];
  const calculateTotal = (data) => {
    return data.reduce((a, b) => a + b.price * b.quantity, 0);
  };
  const calculateDiscount = (data) => {
    return data.reduce((a, b) => a + b.quantity * b.discount, 0);
  };
  const calculateTypeDiscount = (data) => {
    return data
      .filter((item) => item.type === "fiction")
      .reduce((a, b) => a + b.price * b.quantity * 0.15, 0);
  };

  const funcSequence = [
    calculateTotal,
    calculateDiscount,
    calculateTypeDiscount,
  ];
  return (
    <div className="total-container">
      {console.log("context value", data, calculateTotal(data))}
      <p className="total-head">Total</p>
      {KEYS.map((item, index) => (
        <div key={index} className="total-details">
          <span className="detail-item-name">{item}</span>
          <span className="detail-item-value">
            : {index === 0 ? "" : "-"} ${funcSequence[index](data)}
          </span>
        </div>
      ))}

      <div className="footer">
        <span className="order-total">Order Total</span>
        <span className="order-total-value">
          $
          {calculateTotal(data) -
            calculateDiscount(data) -
            calculateTypeDiscount(data)}
        </span>
      </div>
    </div>
  );
}

export default TotalCalc;