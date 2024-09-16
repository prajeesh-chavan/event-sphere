import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const DashboardSidebar = ({ navLinks, isOpen }) => {
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    toast.success("Logged out successfully");
    Navigate("/");
  };
  return (
    <nav
      className={`sticky  top-0 left-0 z-20 py-12 px-4 w-[250px] h-screen bg-white pt-24 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full hidden"
      } md:translate-x-0 md:block`}
    >
      <ul className="flex h-full relative flex-col gap-2">
        {navLinks.map((link, index) => (
          <NavLink
            key={`${link.path}-${index}`}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "block py-2 px-4 font-medium text-sky-500 bg-sky-100 rounded-lg hover:scale-[1.02] transform transition-transform"
                : "block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg hover:scale-[1.02] transform transition-transform"
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            aria-label={link.label}
          >
            <div className="flex items-center gap-2">
              {link.icon}
              {link.label}
            </div>
          </NavLink>
        ))}
      <Button
        variant="destructive"
        onClick={handleLogout}
        className="absolute -bottom-5 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </Button>
      </ul>
    </nav>
  );
};

DashboardSidebar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default DashboardSidebar;
