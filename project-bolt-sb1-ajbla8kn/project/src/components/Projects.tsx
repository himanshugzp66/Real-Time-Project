import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ExternalLink, Server, Layers, Clock, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my DevOps work highlighting infrastructure solutions, automation projects, and optimizations.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-md">
            {['all', 'infrastructure', 'automation', 'security'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-teal-500 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group"
            >
              <div className="h-48 relative overflow-hidden bg-slate-200 dark:bg-slate-700">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.category === 'infrastructure' && (
                    <Server size={64} className="text-teal-500/30 dark:text-teal-400/30" />
                  )}
                  {project.category === 'automation' && (
                    <Layers size={64} className="text-blue-500/30 dark:text-blue-400/30" />
                  )}
                  {project.category === 'security' && (
                    <div className="text-red-500/30 dark:text-red-400/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/70 text-white capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                
                <div className="flex items-center mb-4 text-slate-500 dark:text-slate-400 text-sm">
                  <Clock size={16} className="mr-1" />
                  <span>{project.duration}</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm font-semibold text-teal-500 dark:text-teal-400">
                    {project.outcome}
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    View Details 
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;