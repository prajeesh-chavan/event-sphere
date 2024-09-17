import DashboardSidebar from "../Components/Dashboard/DashboardSidebar";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { getUserProfile } from "../services/userService";

function Dashboard() {
  const navLinks = [];
  const role = localStorage.getItem("userRole");
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      // Redirect to login if no role is found
      navigate("/login");
    }
  }, [role, navigate]);

  if (role === "user") {
    navLinks.push(
      // {
      //   icon: <RiDashboardLine size={28} />,
      //   label: "Dashboard",
      //   path: "dashboard",
      // },
      {
        icon: <CgProfile size={28} />,
        label: "Profile",
        path: "profile",
      },
      {
        icon: <IoTicketOutline size={28} />,
        label: "Ticket",
        path: "tickets",
      }
    );
  } else if (role === "organizer") {
    navLinks.push(
      {
        icon: <RiDashboardLine size={28} />,
        label: "Dashboard",
        path: "dashboard",
      },
      {
        icon: <CgProfile size={28} />,
        label: "Profile",
        path: "profile",
      },
      {
        icon: <IoTicketOutline size={28} />,
        label: "Create Event",
        path: "create-event",
      },
      {
        icon: <MdOutlineEventAvailable size={28} />,
        label: "Events",
        path: "events",
      }
    );
  } else {
    // Handle case where role is invalid
    navigate("/login");
  }

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getUserProfile();
        setUser(userData);
      } catch (err) {
      } finally {
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="h-[70px] w-full px-4 md:px-10 py-[15px] fixed z-50 bg-white flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-[82px]">
          <button className="md:hidden" onClick={toggleSidebar}>
            <FiMenu size={28} />
          </button>
          <Link to="/">
            <img
              src="/event-logo.png"
              alt="EventSphere Logo"
              className="w-24 md:w-40"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 flex justify-center items-center">
              <img
                className="w-10 h-10 rounded-full object-cover object-top"
                src={`http://localhost:5000/uploads/${user.profilePicture}`}
                alt="User Profile Picture"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[#11142d] text-sm font-semibold capitalize">
                {user.name}
              </div>
              <div className="text-[#808191] text-sm font-normal capitalize">
                {user.role}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <DashboardSidebar navLinks={navLinks} isOpen={isSidebarOpen} />

        <div className="w-full p-10 flex flex-col gap-10 pt-24 bg-gray-100 min-h-screen">
          {/* Main content goes here */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
