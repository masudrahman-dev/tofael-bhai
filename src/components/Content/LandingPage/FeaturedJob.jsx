import React, { useEffect, useState } from "react";
import FeaturedJobCard from "./FeaturedJobCard";
import JobCategoryListCard from "./JobCategoryListCard";
import { useLoaderData } from "react-router-dom";

const FeaturedJob = () => {
  const [data, setData] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const fourItem = jobs[0].slice(0, 4);

    setData(fourItem);
  }, []);
  const allDataHandler = () => {
    setData(jobs[0]);
  };
  return (
    <section className="mt-20 dark:text-slate-50 ">
      <section className=" mt-20">
        <div className="container px-5  mx-auto ">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-semibold ">Job Category List</h1>
            <p className="my-7 text-xl">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-7">
            {jobs[1].map((category) => (
              <JobCategoryListCard
                key={category.id}
                category={category}
              ></JobCategoryListCard>
            ))}
          </div>
        </div>
      </section>

      {/* job featured */}
      <div className="container px-5   mx-auto">
        <div className="text-center mt-12">
          <h1 className="text-5xl font-semibold ">Featured Jobs</h1>
          <p className="my-7 text-xl ">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-12">
          {data.map((job) => (
            <FeaturedJobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="text-center my-12">
          <button
            onClick={allDataHandler}
            className={data.length > 5 ? "hidden" : "btn btn-primary w-32  "}
          >
            see all jobs{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;
