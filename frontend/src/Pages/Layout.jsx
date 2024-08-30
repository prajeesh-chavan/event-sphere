import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
