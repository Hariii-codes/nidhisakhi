import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">Logo</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/" className="py-2 px-3 text-gray-500 hover:text-gray-700">Home</Link>
            <Link to="/about" className="py-2 px-3 text-gray-500 hover:text-gray-700">About</Link>
            <Link to="/services" className="py-2 px-3 text-gray-500 hover:text-gray-700">Services</Link>
            <Link to="/contact" className="py-2 px-3 text-gray-500 hover:text-gray-700">Contact</Link>
            <Link to="/login" className="py-2 px-3 text-gray-500 hover:text-gray-700">Login</Link>
            <Link to="/register" className="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;