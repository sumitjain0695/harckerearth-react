import React from "react";

function ItemCard(props) {
  return (
    <div>
      <img src="" alt="" />
      <span>{props.name && "item 1"}</span>
      <span>&#10005;</span>
    </div>
  );
}

export default ItemCard;
