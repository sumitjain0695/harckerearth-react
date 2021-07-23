import React, { useContext, useEffect } from "react";
import DATA from "../../Constants/data";
import { DataContext } from "../../Context/data-context";
import ItemCard from "./item-card";
import QuantityButton from "./quantity-btn";
import "./styles/table.css";

function Itemstable(props) {
  const { data, updateData } = useContext(DataContext);

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      const temp = [...DATA].map((item) => {
        return { ...item, quantity: 1 };
      });
      updateData(temp);
    } else {
      updateData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  const onDelete = (id) => {
    updateData(data.filter((item) => item.id !== id));
    document.getElementById("alert").style.display = "block";
    var time = setTimeout(function () {
      document.getElementById("alert").style.display = "none";
      clearTimeout(time);
    }, 1000);
  };

  const increaseAmount = (ind) => {
    const temp = [...data];
    temp[ind].quantity += 1;
    updateData(temp);
  };

  const deccreaseAmount = (ind) => {
    const temp = [...data];
    if (temp[ind].quantity > 1) {
      temp[ind].quantity -= 1;
      updateData(temp);
    } else {
      onDelete(data[ind].id);
    }
  };

  const onReload = () => {
    const temp = [...DATA].map((item) => {
      return { ...item, quantity: 1 };
    });
    updateData(temp);
  };

  return (
    <div className="over-handler">
      <hr className="separator" />
      {data.length ? (
        <>
          <div className="columns">
            {console.log("check renders in table", data)}
            <span className="col1">
              Items({data.reduce((a, b) => a + b.quantity, 0)})
            </span>
            <span className="col2">Qty</span>
            <span className="col3">Price</span>
          </div>
          <hr className="separator" />
          <br />
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
    </div>
  );
}
export default Itemstable;
