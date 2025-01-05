import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';



const Services = () => {
       const scrollContainerRef = useRef(null);
  const features = [
    {
      id: '01',
      title: 'App Development',
      description: 'We create scalable, high-performing mobile and web applications tailored to meet your business needs. Our apps ensure seamless user experiences and optimized performance.',
      image: 'https://img.freepik.com/free-photo/programmer-working-with-program-code-laptop-software-development-it_169016-22257.jpg',
      logo: 'https://img.icons8.com/color/96/code.png'
    },
    {
      id: '02',
      title: 'UI/UX Design',
      description: 'Our designs prioritize user-centric experiences, blending aesthetics with functionality to deliver interfaces that are visually appealing and intuitive.',
      image: 'https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg',
      logo: 'https://img.icons8.com/color/96/design.png'
    },
    {
      id: '03',
      title: 'Logo Making',
      description: 'We design memorable and impactful logos that represent your brand’s identity and resonate with your target audience.',
      image: 'https://img.freepik.com/free-photo/graphic-designer-working-logo-design_23-2148793367.jpg',
      logo: 'https://img.icons8.com/color/96/paint-palette.png'
    },
    {
      id: '04',
      title: 'Data Science Solutions',
      description: 'Our data science services provide actionable insights, leveraging machine learning and advanced analytics to solve complex business problems.',
      image: 'https://img.freepik.com/free-photo/data-analytics-concept-business-intelligence-bi-make-business-decisions-data-dashboard-with-key-performance-indicators-kpi_53876-124747.jpg',
      logo: 'https://img.icons8.com/color/96/artificial-intelligence.png'
    },
    {
      id: '05',
      title: 'Video Editing',
      description: 'We craft professional videos with seamless transitions, dynamic effects, and captivating storytelling to engage your audience.',
      image: 'https://img.freepik.com/free-photo/man-editing-video-software-with-timeline-professional-post-production-studio-editing-movie-creative-content-digital-multimedia-artist_482257-40961.jpg',
      logo: 'https://img.icons8.com/color/96/video-editing.png'
    },
    {
      id: '06',
      title: 'Digital Marketing',
      description: 'Our marketing strategies drive engagement and growth through targeted campaigns, SEO, and social media optimization.',
      image: 'https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg',
      logo: 'https://img.icons8.com/color/96/marketing.png'
    }
  ];

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
    <div data-scroll-container ref={scrollContainerRef} className='flex flex-col'>
      {/* Hero Section */}
      <div className="text-center mb-32" data-scroll>
        <h1 className="text-6xl font-bold text-gray-950 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">
          Empowering businesses with cutting-edge solutions tailored to your needs.
        </p>
      </div>

      {/* Features Section */}
      <div className="space-y-24" data-scroll>
        {features.map((feature) => (
          <div
            key={feature.id}
            className="hover:bg-gray-950 hover:text-white text-gray-950 rounded-3xl p-8 transition-all duration-300"
            data-scroll
          >
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
              {/* Image Container */}
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-96 h-64 object-cover rounded-3xl"
                />
              </div>

              {/* Content Container */}
              <div className="w-full flex flex-col justify-center">
                <div className="flex w-full justify-between items-center mb-10">
                  <div className="flex items-center space-x-4">
                    <img
                      src={feature.logo}
                      alt={`${feature.title} Logo`}
                      className="w-10 h-10"
                    />
                    <h3 className="text-4xl font-light">{feature.title}</h3>
                  </div>
                  <span className="text-xl">{feature.id}</span>
                </div>
                <p className="text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
            <hr className="bg-black mt-4"></hr>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="mt-32" data-scroll>
        <h2 className="text-5xl font-light mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-6 border rounded-lg shadow-lg" data-scroll>
            <p className="text-lg italic">
              "The team was professional and delivered beyond expectations. Their app development service is top-notch!"
            </p>
            <h4 className="text-gray-950 mt-4 font-semibold">- Sarah Johnson</h4>
          </div>
          <div className="p-6 border rounded-lg shadow-lg" data-scroll>
            <p className="text-lg italic">
              "Their UI/UX designs completely transformed our website. Highly recommended!"
            </p>
            <h4 className="text-gray-950 mt-4 font-semibold">- Michael Lee</h4>
          </div>
          <div className="p-6 border rounded-lg shadow-lg" data-scroll>
            <p className="text-lg italic">
              "The data science solutions they provided were instrumental in our business growth."
            </p>
            <h4 className="text-gray-950 mt-4 font-semibold">- Priya Sharma</h4>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-32 text-center" data-scroll>
        <h2 className="text-5xl font-light mb-8">Ready to Get Started?</h2>
        <p className="text-xl mb-6 text-gray-600">
          Contact us today to discuss how we can help your business grow.
        </p>
        <button className="px-6 py-3 bg-gray-950 text-white rounded-lg text-lg hover:bg-gray-800 transition-all">
          Contact Us
        </button>
      </div>

      {/* Footer Section */}
      <footer className="mt-32 py-12 bg-gray-950 text-white text-center" data-scroll>
        <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
