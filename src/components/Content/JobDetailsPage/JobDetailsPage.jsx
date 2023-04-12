import React, { useEffect, useState } from "react";
import JobDSidebar from "./JobDSidebar";
import JobDetails from "./JobDetails";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const [jobs, setJobs] = useState([]);
  const { jobDetailsId } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    if (data && data[0]) {
      const job = data[0].find((job) => job.id === jobDetailsId);
      setJobs(job);
    }

  }, []);


  return (
    <div className="container px-5 py-5 mx-auto dark:text-slate-50 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* <JobDetails></JobDetails>
        <JobDSidebar ></JobDSidebar> */}
        <JobDetails jobs={jobs}></JobDetails>
        <JobDSidebar jobs={jobs}></JobDSidebar>
      </div>
    </div>
  );
};

export default JobDetailsPage;
