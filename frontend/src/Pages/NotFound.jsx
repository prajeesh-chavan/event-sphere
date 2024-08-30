// src/Pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-sky-600">404</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-800 mt-4">Oops! Page not found</p>
        <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="inline-block mt-6 px-5 py-3 bg-sky-600 text-white rounded-full text-sm font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
