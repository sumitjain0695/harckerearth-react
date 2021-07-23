import React from "react";
import './styles/item-card.css'
function ItemCard(props) {
  return (
    <div className="card-container">
        <span className="image">
        <img src="https://place-hold.it/40.jpg" alt="" />
        </span>
      <span className="item-name">{props.name || "item 1"}</span>
      <span className="close-btn">&#10005;</span>
    </div>
  );
}
export default ItemCard