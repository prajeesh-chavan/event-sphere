// src/Pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 cursor-pointer">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-9xl font-bold text-sky-500  flex gap-1 justify-center">
          <div className="drop-shadow-md duration-300 ease-in hover:scale-[1.2] hover:drop-shadow-sm">4</div>
          <div className="drop-shadow-md duration-300 ease-in hover:scale-[1.2] hover:drop-shadow-sm">0</div>
          <div className="drop-shadow-md duration-300 ease-in hover:scale-[1.2] hover:drop-shadow-sm">4</div>
        </h1>
        <p className="text-2xl md:text-3xl font-light text-gray-800 mt-4">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-5 py-3 w-64 bg-sky-500 text-white rounded-full text-sm font-medium hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
