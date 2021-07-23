import React, { useState, useEffect } from "react";
import DATA from "../../Constants/data";
import ItemCard from "./item-card";
import QuantityButton from "./quantity-btn";
import "./styles/table.css";

function Itemstable(props) {
  const [data, setData] = useState(DATA);

  useEffect(() => {
    const temp = [...DATA].map((item) => {
      return { ...item, quantity: 1 };
    });
    setData(temp);
  }, []);

  const onDelete = (id) => {
    console.log(id);
    setData(data.filter((item) => item.id !== id));
  };

  const increaseAmount = (ind) => {
    const temp = [...data];
    temp[ind].quantity += 1;
    setData(temp);
  };

  const deccreaseAmount = (ind) => {
    const temp = [...data];
    if (temp[ind].quantity) {
      temp[ind].quantity -= 1;
      setData(temp);
    }
  };
  const onReload = () => {
    const temp = [...DATA].map((item) => {
      return { ...item, quantity: 1 };
    });
    setData(temp);
  };

  return (
    <>
      {console.log("d", data)}
      <hr className="separator" />
      {data.length ? (
        <>
          <div className="columns">
            <span className="col1">
              Items({data.reduce((a, b) => a + b.quantity, 0)})
            </span>
            <span className="col2">Qty</span>
            <span className="col3">Price</span>
          </div>
          <hr className="separator" />
          {data.map((item, index) => (
            <div className="item-row" key={item.id}>
              <ItemCard
                item={item}
                onDelete={() => {
                  onDelete(item.id);
                }}
              />
              <QuantityButton
                quantity={item.quantity}
                increaseAmount={() => {
                  increaseAmount(index);
                }}
                decreaseAmount={() => {
                  deccreaseAmount(index);
                }}
              />
              <div className="price-elem">${item.price}</div>
            </div>
          ))}
        </>
      ) : (
        <div className="reload">
          <span className="reload-span" onClick={onReload}>
            &#8635; Reload
          </span>
        </div>
      )}
    </>
  );
}
export default Itemstable;
