import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';  // Import Locomotive Scroll
import blogs from './blogdata'; // Import blog data

const BlogDetail = () => {
  const { id } = useParams();  // Get blog ID from URL params
  const navigate = useNavigate(); // Use useNavigate for navigation
  const scrollContainerRef = useRef(null);  // Create reference for scroll container

  // Find the selected blog by ID
  const blog = blogs.find((b) => b.id === parseInt(id));

  // If blog not found, display a message
  if (!blog) {
    return <div>Blog not found</div>;
  }

  // GSAP animation for the title
  useEffect(() => {
    gsap.fromTo('.blog-title', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
  }, []);

  // Initialize Locomotive Scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;  // Make sure we're in a browser environment

    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
      lerp: 0.1,
      tablet: {
        smooth: true,
        breakpoint: 768,
      },
      smartphone: {
        smooth: true,
      },
    });

    // Update scroll on window resize
    const handleResize = () => {
      scroll.update();
    };

    window.addEventListener('resize', handleResize);

    // Clean up the scroll instance on component unmount
    return () => {
      if (scroll) {
        scroll.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-12" >
      {/* Add the scroll container ref here */}
      <div><div ref={scrollContainerRef} className="mx-auto max-w-4xl" >
        
        <button className="text-yellow-300" onClick={() => navigate(-1)}>
          &larr; Back to Blog List
        </button>
        <div className="mt-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold blog-title">{blog.title}</h1>
          <h2 className="text-xl text-gray-400 mt-4">{blog.subtitle}</h2>
          <div className="mt-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-3xl"
            />
          </div>
          <div className="mt-6 text-gray-300" dangerouslySetInnerHTML={{ __html: blog.content }} />
          <p className="text-sm text-gray-500 mt-4">{blog.readTime} | {blog.date}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogDetail;
