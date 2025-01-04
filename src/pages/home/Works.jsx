import React from 'react';
import { Pencil } from 'lucide-react';

const Works = () => {
    const projects = [
        {
            id: '01',
            category: 'Bakery & Hospitality',
            title: 'GEBAK VAN TABAK',
            tags: ['Branding', 'Print', 'Packaging'],
            image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
            id: '02',
            category: 'SaaS App',
            title: 'CONVEER',
            tags: ['UX', 'UI', 'Motion', 'Landing Page'],
            image: 'https://images.unsplash.com/photo-1590642910927-54537b38c877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
            id: '03',
            category: 'Tech & Venture Capital',
            title: 'NEW AUSTIN VENTURE ADVISORY',
            tags: ['Branding', 'Print', 'Collateral'],
            image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        }
    ];
    

  return (
    <div className="bg-amber-900 rounded-3xl" data-scroll-section>
      {/* Header */}
      <div className="px-6 md:px-12 py-8 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Pencil className="w-6 h-6" />
          <h1 className="text-2xl font-serif">
            Our<span className="font-bold">WORK</span>
          </h1>
        </div>
      </div>

      {/* Projects List */}
      <div className="px-6 md:px-12">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="py-16 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start gap-8"
          >
            {/* Project Info */}
            <div className="w-full md:w-1/2">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-gray-400 font-light text-xl">
                  {project.id}
                </span>
                <div>
                  <p className="text-sm mb-2">{project.category}</p>
                  <h2 className="text-4xl md:text-5xl font-light text-gray-400 mb-6">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-yellow-700 px-3 py-1 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;