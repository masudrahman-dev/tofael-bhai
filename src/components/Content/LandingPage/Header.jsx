import React from "react";

const Header = () => {
  return (
    <section className=" ">
      <div className="container px-4 mx-auto dark:text-slate-50">
        <div className=" flex flex-col lg:flex-row items-center  pt-20">
          <div className="text-center lg:text-start">
            <h1 className="text-5xl font-semibold">
              <p> One Step Closer </p>
              <p className="mt-5">To Your Dream Job</p>
            </h1>
            <p className="my-7 text-xl">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary">GET Started</button>
          </div>
          <div className="mt-10">
            <img
              className=""
              alt="hero"
              src="https://i.ibb.co/bbBLhfz/P3-OLGJ1-copy-1.png"
            />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Header;
