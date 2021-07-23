import React, { useState } from "react";
import DATA from "../Constants/data";

export const DataContext = React.createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState(DATA);

  const updateData = (data) => {
    setData(data);
  };
  return (
    <DataContext.Provider value={{ data, updateData }}>
      {props.children}
    </DataContext.Provider>
  );
};
