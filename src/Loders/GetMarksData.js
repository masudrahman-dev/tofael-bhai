import React from "react";

const GetMarksData = async () => {
  const res = await fetch("MarksData.json");
  const data = await res.json();
  return data;
};

export default GetMarksData;
