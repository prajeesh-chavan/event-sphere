import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/load-anim.json";

function Layout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading delay
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <Lottie animationData={loadingAnimation} style={{ width: 500 }} />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
