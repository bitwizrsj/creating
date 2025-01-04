import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const BlogListing = () => {
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

  const blogs = [
    {
      id: 1,
      category: "Web Development",
      title: "Modern Web Architecture",
      subtitle: "Building scalable applications with microservices",
      image: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      description: "A deep dive into modern web architectures, exploring microservices, serverless computing, and cloud-native applications",
      readTime: "8 min read",
      date: "Jan 2025"
    },
    {
      id: 2,
      category: "Mobile Development",
      title: "Cross-Platform Apps",
      subtitle: "The future of mobile development with Flutter",
      image: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      description: "Exploring the evolution of cross-platform development and how Flutter is revolutionizing mobile app creation",
      readTime: "6 min read",
      date: "Jan 2025"
    },
    {
      id: 3,
      category: "Artificial Intelligence",
      title: "AI in Production",
      subtitle: "Implementing LLMs in enterprise applications",
      image: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      description: "Best practices for integrating large language models into production environments",
      readTime: "10 min read",
      date: "Jan 2025"
    },
    {
      id: 4,
      category: "DevOps",
      title: "Modern CI/CD",
      subtitle: "Streamlining deployment pipelines",
      image: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      description: "A comprehensive guide to building efficient CI/CD pipelines using modern tools and practices",
      readTime: "7 min read",
      date: "Jan 2025"
    }
  ];

  return (
    <div className="bg-gray-50" data-scroll-section ref={scrollContainerRef}>
      {/* Header */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-4">
            Development
            <br />
            <span className="text-gray-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Expert perspectives on web development, mobile apps, AI, and modern software practices
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl overflow-hidden transition-transform hover:-translate-y-1 duration-300"
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
                  <span className="text-sm font-medium text-gray-500">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{blog.readTime}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-medium mb-2">{blog.title}</h2>
                <h3 className="text-lg text-gray-500 mb-4">{blog.subtitle}</h3>
                <p className="text-gray-600 mb-6">{blog.description}</p>

                <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
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
