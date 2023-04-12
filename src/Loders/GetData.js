import React from "react";

const GetData = async () => {
  // const res = await fetch('DBapi.json');
  const res = await fetch(
    "https://raw.githubusercontent.com/masudrahman-dev/career-hub-data/main/career-hub-data.json"
  );
  const data = await res.json();

  return data;
};

export default GetData;
