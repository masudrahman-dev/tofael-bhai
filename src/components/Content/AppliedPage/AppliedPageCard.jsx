import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const AppliedPageCard = ({ jobApply }) => {
  const {
    id,
    remote_or_onsite,
    fulltime_or_parttime,
    job_title,
    company_logo,
    company_name,
    location,
    salary,
  } = jobApply;
  return (
    <div className="card  dark:border border shadow-md">
      <div className="card-body">
        <div className="flex gap-10 flex-col xl:flex-row items-center">
          <div>
            <img className="rounded w-48" src={company_logo} alt="Shoes" />
          </div>
          <div>
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex gap-5 my-5 ">
              <button className="btn btn-outline btn-primary dark:btn-outline dark:btn-warning">
                {remote_or_onsite}
              </button>
              <button className="btn btn-outline btn-primary dark:btn-outline dark:btn-warning">
                {fulltime_or_parttime}
              </button>
            </div>
            <div className="flex flex-col xl:flex-row gap-3 md:gap-3 my-5">
              <div className="flex gap-3">
                <MapPinIcon className="h-6 w-6 text-blue-500" />
                <p>{location}</p>
              </div>
              <div className="flex gap-3">
                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                <p>Salary : {salary}</p>
              </div>
            </div>

            <div className="text-center xl:text-start">
              <Link to={`/jobDetails/${id}`}>
                <button className="btn btn-primary w-32">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedPageCard;
