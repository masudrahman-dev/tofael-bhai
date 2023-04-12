import React, { useEffect, useState } from "react";
import AppliedPageCard from "./AppliedPageCard";
import { useLoaderData } from "react-router-dom";

const AppliedPage = () => {
  const [data, setData] = useState([]);
  const applied_jobs = useLoaderData();
  useEffect(() => {
    setData(applied_jobs);
  }, []);
  const remoteHandler = () => {
    const remoteItem = applied_jobs.filter(
      (item) => item.remote_or_onsite === "Remote"
    );
    setData(remoteItem);
  };
  const onsiteHangler = () => {
    const onsiteItem = applied_jobs.filter(
      (item) => item.remote_or_onsite === "Onsite"
    );
    setData(onsiteItem);
  };

  return (
    <div className="container px-5 py-5 mx-auto mb-12  dark:text-slate-50">
      <h1 className="text-5xl text-center my-12">Applied page</h1>
      <div className=" flex gap-5 justify-center my-7">
        <button onClick={remoteHandler} className="btn btn-primary">
          remote
        </button>
        <button onClick={onsiteHangler} className="btn btn-primary">
          on-site
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-14">
        {data?.map((jobApply) => (
          <AppliedPageCard
            key={jobApply.id}
            jobApply={jobApply}
          ></AppliedPageCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedPage;
