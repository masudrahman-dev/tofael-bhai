import React from "react";

const getLocalData = () => {
  const applied_jobs = JSON.parse(localStorage.getItem("applied_jobs"));

  return applied_jobs;
};

export default getLocalData;
