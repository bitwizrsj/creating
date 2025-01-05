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
import Footer from '../../components/footer/Footer';

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

      <div data-scroll-container ref={scrollContainerRef} className='flex flex-col'>
        
        <Hero />
        <Clients />
        <Services />
        <Works />
        <TestimonialSlider />
        <Footer />
      </div>
    </>
  );
};

export default Home;
