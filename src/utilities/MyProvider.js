import { data } from "autoprefixer";
import React, { createContext, useEffect, useState } from "react";
// create a context
const MyContext = createContext();
// create a Provider
const MyProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
      console.log("data :>> ", data);
    };
    fetchData();
  }, []);
  return <MyContext.Provider value={data}>{props.children}</MyContext.Provider>;
};

export default MyProvider;
