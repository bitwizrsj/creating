import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './App.css'; // Add custom styles for your landing page
import Navbar from './components/navbar/Navbar';
import Hero from './pages/home/Hero';
import Clients from './pages/home/Clients';
import Services from './pages/home/Services';
import Works from './pages/home/Works';
import TestimonialSlider from './pages/home/TestimonialSlider';

const App = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll for the entire container
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
    });

    return () => {
      if (scroll) scroll.destroy(); // Clean up LocomotiveScroll instance
    };
  }, []);

  return (
    <>
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      <div data-scroll-container ref={scrollContainerRef}>
        <Hero />
        <Clients />
        <Services />
        <Works />
        <TestimonialSlider />
        {/* Hero Section */}
        <section data-scroll-section className="hero-section">
<h1 data-scroll data-scroll-speed="3" className="hero-title">
            Welcome to Locomotive Scroll
          </h1>
          <p data-scroll data-scroll-delay="0.5" className="hero-subtitle">
            Experience smooth scrolling like never before.
          </p>
        </section>
        {/* Features Section */}
        <section data-scroll-section className="features-section">
          <div data-scroll data-scroll-speed="2" className="feature">
            <h2>Fast and Smooth</h2>
            <p>Locomotive Scroll provides silky smooth scrolling for modern web apps.</p>
          </div>
          <div data-scroll data-scroll-speed="-2" className="feature">
            <h2>Customizable Effects</h2>
            <p>Speed, delay, and animation options make it easy to create stunning effects.</p>
          </div>
          <div data-scroll data-scroll-speed="1" className="feature">
            <h2>Seamless Integration</h2>
            <p>Compatible with modern frameworks like React and Vue.js.</p>
          </div>
        </section>

        {/* Footer Section */}
        <section data-scroll-section className="footer-section">
          <h2 data-scroll data-scroll-speed="-1">Thanks for Scrolling!</h2>
          <p>Follow us for more awesome tutorials.</p>
        </section>
      </div>
    </>
  );
};

export default App;
