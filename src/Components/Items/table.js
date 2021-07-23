import React from "react";
import ItemCard from "./item-card";
import QuantityButton from "./quantity-btn";
import "./styles/table.css";
function Itemstable() {
  return (
    <>
      <hr className="separator" />
      <div className="columns">
        <span className="col1">Items({})</span>
        <span className="col2">Qty</span>
        <span className="col3">Price</span>
      </div>
      <hr className="separator" />
      <br />
      {[1].map((item, index) => (
        <div className="item-row">
          <ItemCard />
          <QuantityButton />
          <div className="price-elem">{"$25"}</div>
        </div>
      ))}
    </>
  );
}
export default Itemstable;
