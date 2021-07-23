import React, { useState } from "react";
import DATA from "../Constants/data";

export const DataContext = React.createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || DATA
  );

  const updateData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    setData(data);
  };
  return (
    <DataContext.Provider value={{ data, updateData }}>
      {props.children}
    </DataContext.Provider>
  );
};
