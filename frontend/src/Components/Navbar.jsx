import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 shadow-md bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="./event-logo.png"
            className="h-12 drop-shadow-sm"
            alt="Event Sphere Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to='/sign-in'>
            <Button variant="destructive">Sign In</Button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-600 md:p-0"
                    : "block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/event-list"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-600 md:p-0"
                    : "block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0"
                }
              >
                Browse Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create-event"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-600 md:p-0"
                    : "block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0"
                }
              >
                Create Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-600 md:p-0"
                    : "block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
