import React from "react";
import ItemCard from "./item-card";
import QuantityButton from "./quantity-btn";
import "./styles/table.css";
function Itemstable() {
  return (
    <div>
        <hr className="separator" />
      <div>
        <span>Items({})</span>
        <span>Qty</span>
        <span>Price</span>
      </div>
      {[1].map((item, index) => (
        <div>
          <div>
            <ItemCard />
          </div>
          <div>
            <QuantityButton />
          </div>
          <div>{"$25"}</div>
        </div>
      ))}
    </div>
  );
}

export default Itemstable;
