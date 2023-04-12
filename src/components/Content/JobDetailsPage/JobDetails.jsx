import React from "react";

const JobDetails = ({ jobs }) => {
  const { job_description, job_responsibility,educational_requirements,experiences } = jobs;
  return (
    <div className="leading-7 flex flex-col gap-5 text-xl mt-12">
      <p>
        <span className="font-semibold">Description:</span> {job_description}
      </p>
      <p>
        <span className="font-semibold"> Job Responsibility: </span>
        {job_responsibility}
      </p>
      <div>
        <p className="font-semibold">Educational Requirements:</p>
        <p>{educational_requirements}</p>
      </div>
      <div>
        <p className="font-semibold">Experiences:</p>
        <p>{experiences}</p>
      </div>
    </div>
  );
};

export default JobDetails;
