import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('Web Design');
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const [isSidebarSticky, setIsSidebarSticky] = useState(true);

  const categories = [
    { name: 'Web Design', count: 10 },
    { name: 'Webflow Development', count: 10 },
    { name: 'Mobile App Design', count: 3 }
  ];

  const projects = [
    {
      title: "Sentry X - Landing Page",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b8?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDJ8fHdlayUyMGRlc2lnbnxlbnwwfHx8fDE2NzgyMTMwNzA&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["Web Design", "Webflow"]
    },
    {
      title: "Apple Watch Landing Page",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1555685818-bb2812f3be8c?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDJ8fGxhdGRlY3VsdHVyZXN8ZW58MHx8fHwxNjc4MjEyMjQ3&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["Webflow", "3D", "Creative Website"]
    },
    {
      title: "Taylor Swift Tribute",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1503199082283-40253530782b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDMxfHxlc2NhcGUlMjBhdnRlbnR1c3xlbnwwfHx8fDE2NzgyMTMzMTg&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["Creative Website", "Animation"]
    },
    {
      title: "Studio Portfolio",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1516122982281-9a261205c335?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDYxfHxsZWFkZXIlMjBsaWdodCUyMGFydCUyMGluZGV4fGVufDB8fHx8fDE2NzgyMTYyMzg&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["Portfolio", "Creative Website"]
    },
    // Additional Projects
    {
      title: "E-commerce Platform",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1592950120444-6c7fe2f4e9f4?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDMyfHxlY29tbWVyY2V8ZW58MHx8fHwxNjc4MjEzODcz&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["E-commerce", "Responsive Design"]
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App Design",
      image: "https://images.unsplash.com/photo-1568725402-481d8de26c18?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDk5fHxiYW5raW5nfGVufDB8fHx8fDE2NzgyMTMwNTc&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["Mobile App", "Banking"]
    },
    {
      title: "Fitness Tracker App",
      category: "Mobile App Design",
      image: "https://images.unsplash.com/photo-1585365169730-cc3a30f902ee?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDkzfHxmZHRyYWluaW5nJTIwYXBwfGVufDB8fHx8fDE2NzgyMTYzNzI&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["Mobile App", "Health"]
    },
    {
      title: "Social Media Dashboard",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1585164285073-e1d43656e84e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDk2fHxtYWRlJTIwb3B0aW1pemF0aW9uYXxldnwwfHx8fDE2NzgyMTY0NTQ&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["Web Design", "Dashboard"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current && sidebarRef.current) {
        const contentBottom = contentRef.current.getBoundingClientRect().bottom;
        const sidebarHeight = sidebarRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        setIsSidebarSticky(contentBottom > windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-12">
          {/* Sidebar */}
          <div 
            ref={sidebarRef}
            className={`w-80 ${isSidebarSticky ? 'sticky top-8' : 'relative'}`}
          >
            <div className="mb-12">
              <h1 className="text-2xl font-bold mb-4">
                I'm obsessed with creating digital magic that's as addictive as your favorite TV show. Mobile apps, web design? Consider me your personal genie ✨
              </h1>
            </div>

            <div className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${activeCategory === category.name ? 'bg-black/10 text-black' : 'hover:bg-black/5 text-black'}`}
                >
                  <div className="flex justify-between items-center">
                    <span>{category.name}</span>
                    <span className="text-gray-600">({category.count})</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-gray-600 mb-4">Ready to brainstorm?<br />I offer free proposals and unlimited enthusiasm</p>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors">
                Let's talk!
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div ref={contentRef} className="flex-1 h-screen overflow-y-auto" data-scroll
                    data-scroll-speed="2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              {projects.filter(project => project.category === activeCategory).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-gray-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-sm px-3 py-1 rounded-full bg-black/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
