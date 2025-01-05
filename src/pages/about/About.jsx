import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import TeamProfile from './TeamProfile';
import Goals from './Goals';

const About = () => {
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
    <div className="bg-gray-50" data-scroll-section ref={scrollContainerRef}>
      
      <Goals />
      <TeamProfile />
    </div>
  );
};

export default About;
