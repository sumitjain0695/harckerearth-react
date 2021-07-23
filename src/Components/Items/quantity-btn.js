import React from "react";
import "./styles/quantity-btn.css";
function QuantityButton(props) {
  return (
    <div className="btn-container">
      <div>
        <span className="btn-left">−</span>
        <p className="btn-mid"> {4332}</p>
        <span className="btn-right">+</span>
      </div>
    </div>
  );
}
export default QuantityButton;
