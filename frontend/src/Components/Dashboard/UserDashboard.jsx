import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinks = [
    // Your links here
  ];

  return <></>;
}

export default Dashboard;
