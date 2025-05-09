import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronRight, ChevronDown } from 'lucide-react';
import { experienceData } from '../data/experience';

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional journey as a DevOps Engineer, showcasing my growth and accomplishments in different organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-300 dark:border-slate-700 pl-8 ml-4">
            {experienceData.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-12 transition-all duration-300 ${
                  expandedId === index ? '' : 'hover:translate-x-1'
                }`}
              >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[9px] mt-2"></div>
                
                <div 
                  className={`bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-all duration-300 cursor-pointer ${
                    expandedId === index ? 'border-l-4 border-teal-500' : ''
                  }`}
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.role}</h3>
                      <div className="flex items-center text-slate-600 dark:text-slate-400 mt-1">
                        <Briefcase size={16} className="mr-2" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      {exp.summary}
                    </p>
                    {expandedId === index ? 
                      <ChevronDown size={20} className="text-teal-500 ml-2 flex-shrink-0" /> : 
                      <ChevronRight size={20} className="text-teal-500 ml-2 flex-shrink-0" />
                    }
                  </div>
                  
                  {expandedId === index && (
                    <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                      <h4 className="font-semibold text-slate-800 dark:text-white">Key Responsibilities & Achievements:</h4>
                      <ul className="space-y-2 mt-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex">
                            <span className="text-teal-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;