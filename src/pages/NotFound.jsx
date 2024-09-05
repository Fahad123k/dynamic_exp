import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-6">Oops! Page not found</h2>
      <p className="text-gray-500 mb-8">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
