import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../../App.css'; // Add custom styles for your landing page
import './Home.css'; 
import Hero from './Hero';
import Clients from './Clients';
import Services from './Services';
import Works from './Works';
import TestimonialSlider from './TestimonialSlider';

const Home = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
      // Check if we're in the browser environment
      if (typeof window === 'undefined') return;
  
      // Initialize Locomotive Scroll
      const scroll = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
        lerp: 0.1,
        tablet: {
          smooth: true,
          breakpoint: 768
        },
        smartphone: {
          smooth: true
        }
      });
  
      // Update scroll on route change
      const handleRouteChange = () => {
        scroll.update();
      };
  
      // Update scroll on window resize
      const handleResize = () => {
        scroll.update();
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up
      return () => {
        if (scroll) scroll.destroy();
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <>

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
            <p>Locomotive Scroll provides silky smooth scrolling for modern web Homes.</p>
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

export default Home;
