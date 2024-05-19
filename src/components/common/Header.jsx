// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">MyCompany</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button id="menu-button" className="text-gray-400 focus:outline-none focus:text-white">
            {/* Menu Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="md:hidden hidden">
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white">About</Link>
          <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white">Services</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
