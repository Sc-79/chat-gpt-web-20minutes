// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://source.unsplash.com/random/1600x900")' }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to MyCompany</h1>
            <p className="text-lg md:text-xl mb-8">Providing top-notch services to help you succeed.</p>
            <Link to="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg className="h-12 w-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-6-3h6a9 9 0 11-9-9v6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Experience quick and reliable service with our efficient delivery system.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg className="h-12 w-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-6-3h6a9 9 0 11-9-9v6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Support</h3>
              <p className="text-gray-600">Our support team is here to assist you with any questions or issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg className="h-12 w-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-6-3h6a9 9 0 11-9-9v6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Affordable Prices</h3>
              <p className="text-gray-600">Get the best value for your money with our competitive pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Join us today and experience the difference.</p>
          <Link to="/contact" className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
