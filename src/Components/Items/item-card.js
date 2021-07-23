import React from "react";
import "./styles/item-card.css";
function ItemCard(props) {
  const item = props.item;
  return (
    <div className="card-container">
      <span className="image">
        <img src={item.img_url} alt="" />
      </span>
      <span className="item-name">{item.name || ""}</span>
      <span
        className="close-btn"
        onClick={() => {
          props.onDelete();
        }}
      >
        &#10005;
      </span>
    </div>
  );
}
export default ItemCard;
