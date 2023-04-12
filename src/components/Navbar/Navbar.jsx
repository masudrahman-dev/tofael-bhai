import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-900 text-slate-50">
      <header className="">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-3xl text-slate-50 ">Job Hunter</span>
          </Link>

          <NavLink></NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-5  text-2xl justify-center">
            <NavLink
              to="statistics"
              className={({ isActive, isPending }) =>
                isActive ? "underline" : ""
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/apply"
              className={({ isActive, isPending }) =>
                isActive ? "underline" : ""
              }
            >
              Applied Jobs
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isActive ? "underline" : ""
              }
            >
              Blog
            </NavLink>
          </nav>
          <button className="btn btn-primary mt-7 md:mt-0">
            Star Applying
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
