// src/AboutPage.js
import React from 'react';

const AboutPage = () => {
  const teamMembers = [
    { name: 'Alice Johnson', position: 'CEO', imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Bob Smith', position: 'CTO', imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Carol White', position: 'CFO', imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'David Brown', position: 'COO', imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
  ];

  return (
    <div className="AboutPage">
      {/* Company Description */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="text-lg mb-8 text-gray-700">
            Welcome to MyCompany! We are dedicated to providing the best services to help you achieve your goals. Our team of professionals works tirelessly to bring you innovative solutions and exceptional support.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-8">
            Our mission is to deliver innovative and efficient solutions to our clients, helping them navigate the complexities of their industries and achieve lasting success. We are committed to excellence, integrity, and continuous improvement in all our endeavors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
