import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LandingPage from "./components/Content/LandingPage/LandingPage";
import AppliedPage from "./components/Content/AppliedPage/AppliedPage";
import StatisticsPage from "./components/Content/StatisticsPage/StatisticsPage";
import Blog from "./components/Content/Blog/Blog";
import JobDetailsPage from "./components/Content/JobDetailsPage/JobDetailsPage";
import GetData from "./Loders/GetData";
import getLocalData from "./Loders/GetLocalData";
import GetMarksData from "./Loders/GetMarksData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
        loader: GetData,
        // loader: () => fetch("/data.json"),
      },
      {
        path: "/apply",
        element: <AppliedPage></AppliedPage>,
        loader: getLocalData
      },
      {
        path: "/statistics",
        element: <StatisticsPage></StatisticsPage>,
        loader: GetMarksData
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/jobDetails/:jobDetailsId",
        element: <JobDetailsPage></JobDetailsPage>,
        loader: GetData,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
