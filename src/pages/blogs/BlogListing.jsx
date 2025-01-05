import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import blogs from './blogdata'; // Import blog data

const BlogListing = () => {
  const scrollContainerRef = useRef(null);
  const titleRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
      lerp: 0.1,
      tablet: { smooth: true, breakpoint: 768 },
      smartphone: { smooth: true },
    });

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }
    );

    const handleResize = () => scroll.update();

    window.addEventListener('resize', handleResize);

    return () => {
      if (scroll) scroll.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleViewCase = (id) => {
    navigate(`/blogs/${id}`); // Navigate to the blog detail page
  };

  return (
    <div className="bg-gray-900" data-scroll-section ref={scrollContainerRef}>
      {/* Header */}
      <div className="py-20 px-6 md:px-12">
        <div className="mx-auto mb-8 md:mb-16">
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-8xl font-bold">
            <span className="text-yellow-300">Blogs</span>
            <br />
            <span className="text-white">Latest Articles & Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl p-4">
            Stay up to date with our latest posts on technology, trends, and in-depth discussions on web and mobile development.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="px-6 md:px-12 py-16 min-h-screen">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-gray-950 rounded-3xl overflow-hidden transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">{blog.category}</span>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{blog.readTime}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-medium mb-2 text-white">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h2>
                <h3 className="text-lg text-gray-400 mb-4">{blog.subtitle}</h3>
                <p className="text-gray-300 mb-6">{blog.description}</p>

                <button
                  onClick={() => handleViewCase(blog.id)} // Handle the navigation on click
                  className="flex items-center rounded-full border-2 p-3 px-4 border-yellow-300 gap-2 text-xl font-medium hover:gap-3 transition-all"
                >
                  view case
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
