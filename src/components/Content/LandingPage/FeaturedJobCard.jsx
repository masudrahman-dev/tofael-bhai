import React from "react";
import {
  BeakerIcon,
  CurrencyDollarIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FeaturedJobCard = ({ job }) => {
  // console.log("job :>> ", job);
  const { company_logo, company_name, location, salary,id,job_title } = job;
  return (
    <div className="card dark:border shadow-xl">
      <div className="card-body">
        <div>
          <img className="rounded" src={company_logo} alt="Shoes" />
        </div>
        <h2 className="card-title my-3">{job_title}</h2>
        <p className="my-3">{company_name}</p>
        <div className="flex gap-5">
          <button className="btn btn-outline btn-primary dark:btn-warning dark:btn-outline">Remote</button>
          <button className="btn btn-outline btn-primary dark:btn-warning dark:btn-outline">Full Time</button>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 my-5">
          <div className="flex gap-3">
            <MapPinIcon className="h-6 w-6 text-blue-500" />
            <p>{location}</p>
          </div>
          <div className="flex gap-3">
            <CurrencyDollarIcon className="h-6 w-6 text-blue-500"></CurrencyDollarIcon>
            <p>Salary : {salary}</p>
          </div>
        </div>
        <Link to={`/jobDetails/${id}`}>
          <button className="btn btn-primary w-32 ">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
