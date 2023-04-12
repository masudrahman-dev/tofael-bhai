import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster />
      {/* [calc(100vh-header+footer width)] */}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default  App ;
