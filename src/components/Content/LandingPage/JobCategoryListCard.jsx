import React from "react";

const JobCategoryListCard = ({ category }) => {
  const { job_available, job_category, job_category_icon } = category;


  return (
    <div className="card  shadow-md  border dark:border">
      <div className="card-body">
        <div>
          <img className="rounded" src={job_category_icon} alt="Shoes" />
        </div>
        <h2 className="card-title">{job_category}</h2>
        <p>{job_available}</p>
      </div>
    </div>
  );
};

export default JobCategoryListCard;
