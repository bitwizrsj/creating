import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './Works.css';

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('Web Design');
  const sidebarRef = useRef(null);

  const categories = [
    { name: 'Web Design' },
    { name: 'Webflow Development' },
    { name: 'Mobile App Design' },
  ];

  const projects = [
    {
      title: 'Sentry X ',
      category: 'Web Design',
      image: 'https://img.freepik.com/free-vector/gradient-abstract-technology-landing-page_23-2149140002.jpg',
      tags: ['Web Design', 'Webflow'],
    },
    {
      title: 'Apple Watch ',
      category: 'Web Design',
      image: 'https://img.freepik.com/free-vector/technology-landing-page-template-with-photo_52683-21231.jpg',
      tags: ['Webflow', '3D', 'Creative Website'],
    },
    {
      title: 'Concert Website',
      category: 'Web Design',
      image: 'https://img.freepik.com/free-vector/live-concert-landing-page-template_23-2150997999.jpg',
      tags: ['Creative Website', 'Animation'],
    },

    {
      title: 'E-commerce Platform',
      category: 'Web Design',
      image: 'https://img.freepik.com/free-vector/futuristic-shoeshop_23-2149215484.jpg',
      tags: ['E-commerce', 'Responsive Design'],
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App Design',
      image: 'https://img.freepik.com/free-vector/banking-template-design_52683-146003.jpg',
      tags: ['Mobile App', 'Banking'],
    },
    {
      title: 'Fitness Tracker App',
      category: 'Mobile App Design',
      image: 'https://img.freepik.com/free-vector/sport-landing-page-with-photo_23-2148362702.jpg',
      tags: ['Mobile App', 'Health'],
    },
    {
      title: 'Social Media Dashboard',
      category: 'Web Design',
      image: 'https://img.freepik.com/free-vector/dashboard-user-panel-template_23-2148275813.jpg',
      tags: ['Web Design', 'Dashboard'],
    },
    {
      title: 'Studio Portfolio',
      category: 'Web Design',
      image: 'https://img.freepik.com/free-vector/landing-page-template-photographer-career-hobby_23-2150306818.jpg',
      tags: ['Portfolio', 'Creative Website'],
    },
  ];

  const CategoryButton = ({ category, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full min-w-64 text-left p-4 rounded-2xl transition-all relative overflow-hidden ${
        isActive
          ? 'bg-gradient-to-r from-black/90 to-black/80 text-white dark:from-white/90 dark:to-white/80 dark:text-black shadow-lg'
          : 'hover:bg-black/5 text-black dark:hover:bg-white/10 border-white border-2 dark:text-white'
      } h-16 sm:h-20 md:h-auto flex items-center justify-center dog`}
    >
      <div className="flex justify-between items-center relative z-10 w-full">
        <span className="font-medium">{category.name}</span>
      </div>
    </button>
  );

  const ProjectCard = ({ project }) => (
    <div className="group max-w-80 cursor-pointer w-full sm:w-[350px]">
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-2xl md:bg-gray-100 md:dark:bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {/* <button className="px-6 py-3 bg-white text-black rounded-full flex items-center gap-2 hover:bg-white/90 transition-colors">
            View Project <ExternalLink className="w-4 h-4" />
          </button> */}
        </div>
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
    </div>
  );

  return (
    <div className="min-h-[120vh] bg-white text-black dark:bg-black dark:text-white" data-scroll-section>
      <div className="text-5xl text-center font-bold p-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Our Works
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 h-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div ref={sidebarRef} className="w-full md:w-72 flex flex-col justify-between">
            <div className="space-y-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-start">
                Creating Digital Magic ✨
              </h1>
              <div className="space-y-3 md:flex-col flex items-center overflow-x-auto gap-2 no-scrollbar">
                {categories.map((category) => (
                  <CategoryButton
                    key={category.name}
                    category={category}
                    isActive={activeCategory === category.name}
                    onClick={() => setActiveCategory(category.name)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full space-y-6">
            {/* Display projects with different layouts depending on screen size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 py-4">
              {projects
                .filter((project) => project.category === activeCategory)
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
