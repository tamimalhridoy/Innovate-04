import React from "react";
import Navbar from "../components/Fixed/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Fixed/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
