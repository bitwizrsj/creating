import React, { useEffect, useRef, useState } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../../App.css';
import './Home.css';
import Hero from './Hero';
import Clients from './Clients';
import Services from './Services';
import Works from './Works';
import TestimonialSlider from './TestimonialSlider';
import Footer from '../../components/footer/Footer';
import CareersSection from './Job';


const Home = () => {
    const scrollContainerRef = useRef(null);
    const [locomotiveScroll, setLocomotiveScroll] = useState(null);

    useEffect(() => {
        // Check if we're in the browser environment
        if (typeof window === 'undefined') return;

        // Dynamically import Locomotive Scroll
        const initLocomotiveScroll = async () => {
            try {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;

                // Make sure the ref and container exist
                if (!scrollContainerRef.current) return;

                // Initialize Locomotive Scroll with error handling
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

                setLocomotiveScroll(scroll);

                // Update scroll on route change
                const handleRouteChange = () => {
                    scroll?.update();
                };

                // Update scroll on window resize with debounce
                let resizeTimer;
                const handleResize = () => {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(() => {
                        scroll?.update();
                    }, 250);
                };

                window.addEventListener('resize', handleResize);

                // Return cleanup function
                return () => {
                    window.removeEventListener('resize', handleResize);
                    clearTimeout(resizeTimer);
                    if (scroll) {
                        scroll.destroy();
                    }
                };
            } catch (error) {
                console.error('Failed to initialize Locomotive Scroll:', error);
            }
        };

        initLocomotiveScroll();
    }, []);

    // Update scroll when children mount or update
    useEffect(() => {
        const updateScroll = () => {
            if (locomotiveScroll) {
                setTimeout(() => {
                    locomotiveScroll.update();
                }, 100);
            }
        };

        updateScroll();
    }, [locomotiveScroll]);

    return (
        <div 
            data-scroll-container 
            ref={scrollContainerRef} 
            className="flex flex-col min-h-screen"
        >
            <Hero />
            <Clients />
            <Services />
            <Works />
            <TestimonialSlider />
            <CareersSection />
            <Footer />
        </div>
    );
};

export default Home;