import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('Web Design');
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const [isSidebarSticky, setIsSidebarSticky] = useState(true);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { name: 'Web Design', count: 10 },
    { name: 'Webflow Development', count: 10 },
    { name: 'Mobile App Design', count: 3 }
  ];

  const projects = [
    {
      title: "Sentry X - Landing Page",
      category: "Web Design",
      image: "",
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

  const CategoryButton = ({ category, isActive, onClick }) => (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-2xl transition-all relative overflow-hidden ${
        isActive 
          ? 'bg-gradient-to-r from-black/90 to-black/80 text-white dark:from-white/90 dark:to-white/80 dark:text-black shadow-lg' 
          : 'hover:bg-black/5 text-black dark:hover:bg-white/10 dark:text-white'
      }`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-center relative z-10">
        <span className="font-medium">{category.name}</span>
        <div className="flex items-center gap-2">
          <span className={`text-sm ${isActive ? 'text-white/80 dark:text-black/80' : 'text-gray-600'}`}>
            ({category.count})
          </span>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.button>
  );

  // Project card component
  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer w-[350px]"
      onHoverStart={() => setHoveredProject(project.title)}
      onHoverEnd={() => setHoveredProject(null)}
    >
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 "
        />
        <motion.div 
          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
          animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
        >
          <button className="px-6 py-3 bg-white text-black rounded-full flex items-center gap-2 hover:bg-white/90 transition-colors">
            View Project <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Navigation button component
  const NavButton = ({ direction, disabled, onClick }) => (
    <motion.button 
      onClick={onClick}
      disabled={disabled}
      className={`p-4 rounded-2xl ${
        disabled 
          ? 'bg-gray-100 text-gray-400 dark:bg-gray-800/50 dark:text-gray-600 cursor-not-allowed' 
          : 'bg-black text-white dark:bg-white dark:text-black hover:opacity-90'
      }`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6" />
      ) : (
        <ChevronRight className="w-6 h-6" />
      )}
    </motion.button>
  );

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300; // Customize as needed
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(true);
      } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
        setCanScrollLeft(true);
        setCanScrollRight(container.scrollLeft + container.offsetWidth < container.scrollWidth);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 py-12 h-full">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div 
            ref={sidebarRef}
            className={`w-72 flex flex-col justify-between ${isSidebarSticky ? 'sticky top-8 h-full' : 'relative'}`}
          >
            <div className="space-y-8">
              <div>
                <motion.h1 
                  className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Creating Digital Magic ✨
                </motion.h1>
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  I'm obsessed with crafting experiences that are as addictive as your favorite TV show.
                </motion.p>
              </div>

              <div className="space-y-3">
                <AnimatePresence mode="wait">
                  {categories.map((category) => (
                    <CategoryButton
                      key={category.name}
                      category={category}
                      isActive={activeCategory === category.name}
                      onClick={() => setActiveCategory(category.name)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex justify-center gap-4">
                <NavButton 
                  direction="left" 
                  disabled={!canScrollLeft}
                  onClick={() => scroll('left')}
                />
                <NavButton 
                  direction="right" 
                  disabled={!canScrollRight}
                  onClick={() => scroll('right')}
                />
              </div>

              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white dark:bg-black rounded-2xl p-6">
                  <p className="text-lg font-medium mb-4">Ready to bring your ideas to life?</p>
                  <button className="w-full px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium">
                    Let's talk! <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Project Grid */}
          <div ref={contentRef} className="flex-1 overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="grid grid-rows-2 auto-rows-max gap-8 overflow-x-auto hide-scrollbar pb-8"
              style={{
                gridAutoFlow: 'column',
                gridAutoColumns: 'min-content'
              }}
            >
              <AnimatePresence mode="wait">
                {projects
                  .filter(project => project.category === activeCategory)
                  .map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Works;
