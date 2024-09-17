import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { getUserProfile } from "@/services/userService";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const name = localStorage.getItem("userName");
    setUserRole(role);
    setUserName(name);
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    toast.success("Logged out successfully");
    window.location.reload();
  };

  const dashboardLink = () => {
    switch (userRole) {
      case "admin":
        return "/dashboard";
      case "user":
        return "/user/profile";
      case "organizer":
        return "/organizer/dashboard";
      default:
        return "/user/dashboard";
    }
  };

  return (
    <nav className="fixed w-full z-20 top-0 left-0  shadow-md backdrop-blur-sm bg-gradient-to-b from-sky-100/60 to-transparent">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo (Left) */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="./event-logo.png"
            className="h-12 ms-6 md:ms-0 drop-shadow-sm"
            alt="Event Sphere Logo"
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex absolute left-0 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu size={20} />
        </button>

        {/* Navbar Links (Center) */}
        <div
          className={`${
            isOpen ? "block absolute top-20" : "hidden"
          } md:flex items-center justify-center flex-grow`}
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-50/50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {[
              { name: "Home", to: "/" },
              { name: "Browse Events", to: "/event-list" },
              { name: "Contact Us", to: "/contact-us" },
              { name: "About Us", to: "/about-us" },
            ].map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-600 md:p-0"
                      : "block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* User Avatar & Buttons (Right) */}
        <div className="flex items-center space-x-4">
          {userRole ? (
            <>
              <Link to={dashboardLink()} className="text-gray-600">
                <img
                  src={`http://localhost:5000/uploads/${user.profilePicture}`}
                  alt={`${userName} Avatar`}
                  className="w-12 h-12 rounded-full object-cover object-top"
                />
              </Link>
              <Button
                variant="destructive"
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button
                variant="primary"
                className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
