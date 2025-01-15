import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ServicesPage = () => {

  const designServices = [
    { name: 'Web Design', icon: '🎨' },
    { name: 'App Design', icon: '📱' },
    { name: '3D Design', icon: '🎮' },
    { name: 'Logo Design', icon: '✒️' },
    { name: 'Prototyping', icon: '🔄' },
  ];

  const developmentServices = [
    { name: 'Frontend Development', icon: '💻' },
    { name: 'Backend Development', icon: '⚙️' },
    { name: 'App Development', icon: '📱' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Cloud Hosting', icon: '☁️' },
    { name: 'WordPress', icon: 'W' },
    { name: 'Webflow', icon: 'W' },
    { name: 'Shopify', icon: 'S' },
    { name: 'Database Migration', icon: '💾' },
    { name: 'Hosting Migration', icon: '🔄' },
  ];

  const videoEditingServices = [
    { name: 'Video Production', icon: '🎬' },
    { name: 'Post-Production', icon: '✂️' },
    { name: 'Animation', icon: '📽️' },
    { name: 'Motion Graphics', icon: '🎞️' },
    { name: 'Video Editing', icon: '🎥' },
  ];

  const digitalMarketingServices = [
    { name: 'SEO Optimization', icon: '🔍' },
    { name: 'Content Marketing', icon: '📝' },
    { name: 'PPC Campaigns', icon: '💰' },
    { name: 'Social Media Management', icon: '📱' },
    { name: 'Email Marketing', icon: '📧' },
  ];

  const dataAnalyticsServices = [
    { name: 'Data Visualization', icon: '📊' },
    { name: 'Business Intelligence', icon: '📈' },
    { name: 'Predictive Analytics', icon: '🔮' },
    { name: 'Data Mining', icon: '⛏️' },
    { name: 'Big Data Solutions', icon: '🗄️' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8" data-scroll-section>
      {/* Background Sphere */}
      <div className="fixed left-0 top-0 w-1/2 h-screen">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full aspect-square rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <nav className="flex justify-end mb-16">
          <button className="px-4 py-2 text-sm hover:bg-white/10 rounded-lg transition-colors">
            Services ↓
          </button>
        </nav>

        {/* Design Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">DESIGN SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {designServices.map((service) => (
              <motion.div
                key={service.name}
                whileHover={{ scale: 1.02 }}
                className="px-6 py-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              >
                <span className="mr-2">{service.icon}</span>
                {service.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Development Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">DEVELOPMENT SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {developmentServices.map((service) => (
              <motion.div
                key={service.name}
                whileHover={{ scale: 1.02 }}
                className="px-6 py-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              >
                <span className="mr-2">{service.icon}</span>
                {service.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Editing Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">VIDEO EDITING SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoEditingServices.map((service) => (
              <motion.div
                key={service.name}
                whileHover={{ scale: 1.02 }}
                className="px-6 py-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              >
                <span className="mr-2">{service.icon}</span>
                {service.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Digital Marketing Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">DIGITAL MARKETING SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {digitalMarketingServices.map((service) => (
              <motion.div
                key={service.name}
                whileHover={{ scale: 1.02 }}
                className="px-6 py-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              >
                <span className="mr-2">{service.icon}</span>
                {service.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Data Analytics Services Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">DATA ANALYTICS SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataAnalyticsServices.map((service) => (
              <motion.div
                key={service.name}
                whileHover={{ scale: 1.02 }}
                className="px-6 py-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              >
                <span className="mr-2">{service.icon}</span>
                {service.name}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
