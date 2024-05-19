// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">MyCompany</h3>
          <p className="text-gray-400">
            Providing top-notch services since 2024. We are dedicated to delivering the best customer experience.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            <li className="mb-2"><Link to="/services" className="hover:text-gray-400">Services</Link></li>
            <li className="mb-2"><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.39-1.83.654-2.828.775 1.017-.61 1.798-1.574 2.165-2.724-.953.566-2.005.978-3.127 1.2-.896-.955-2.173-1.55-3.592-1.55-2.719 0-4.92 2.201-4.92 4.92 0 .386.043.762.127 1.124-4.086-.205-7.71-2.165-10.141-5.144-.423.724-.666 1.562-.666 2.457 0 1.694.862 3.188 2.169 4.065-.8-.026-1.554-.245-2.213-.611v.061c0 2.366 1.684 4.342 3.918 4.788-.41.111-.843.171-1.287.171-.314 0-.616-.031-.916-.089.617 1.924 2.411 3.32 4.536 3.357-1.662 1.303-3.76 2.079-6.045 2.079-.393 0-.779-.023-1.161-.068 2.156 1.381 4.714 2.188 7.466 2.188 8.958 0 13.862-7.42 13.862-13.862 0-.211-.005-.423-.014-.633.951-.686 1.775-1.545 2.427-2.523z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.39-1.83.654-2.828.775 1.017-.61 1.798-1.574 2.165-2.724-.953.566-2.005.978-3.127 1.2-.896-.955-2.173-1.55-3.592-1.55-2.719 0-4.92 2.201-4.92 4.92 0 .386.043.762.127 1.124-4.086-.205-7.71-2.165-10.141-5.144-.423.724-.666 1.562-.666 2.457 0 1.694.862 3.188 2.169 4.065-.8-.026-1.554-.245-2.213-.611v.061c0 2.366 1.684 4.342 3.918 4.788-.41.111-.843.171-1.287.171-.314 0-.616-.031-.916-.089.617 1.924 2.411 3.32 4.536 3.357-1.662 1.303-3.76 2.079-6.045 2.079-.393 0-.779-.023-1.161-.068 2.156 1.381 4.714 2.188 7.466 2.188 8.958 0 13.862-7.42 13.862-13.862 0-.211-.005-.423-.014-.633.951-.686 1.775-1.545 2.427-2.523z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.242 1.314 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.252-3.608 1.314-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.242-1.314-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.975-.975 2.242-1.252 3.608-1.314 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.071-1.347.062-2.533.34-3.537 1.344-1.003 1.003-1.281 2.189-1.343 3.537-.058 1.279-.071 1.688-.071 4.947s.012 3.667.071 4.947c.062 1.347.34 2.533 1.344 3.537 1.003 1.003 2.189 1.281 3.537 1.343 1.279.058 1.688.071 4.947.071s3.667-.012 4.947-.071c1.347-.062 2.533-.34 3.537-1.344 1.003-1.003 1.281-2.189 1.343-3.537.058-1.279.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.062-1.347-.34-2.533-1.344-3.537-1.003-1.003-2.189-1.281-3.537-1.343-1.279-.058-1.688-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        &copy; 2024 MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
