// src/ServicesPage.js
import React from 'react';

const services = [
  {
    title: "Web Development",
    description: "We create beautiful and responsive websites tailored to your needs.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Our team develops user-friendly mobile applications for both iOS and Android.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "We design intuitive and engaging user interfaces for your digital products.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with our expert digital marketing services.",
    icon: "💼",
  },
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings with our comprehensive SEO strategies.",
    icon: "🔍",
  },
  {
    title: "Cloud Solutions",
    description: "Leverage the power of the cloud with our scalable and secure cloud solutions.",
    icon: "☁️",
  },
];

const ServicesPage = () => {
  return (
    <div className="ServicesPage">
      {/* Hero Section */}
      <section className="py-20 bg-blue-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl mb-8">We offer a wide range of services to meet your needs.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
