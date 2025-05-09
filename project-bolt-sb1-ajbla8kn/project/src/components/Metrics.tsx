import React from 'react';
import { metricsData } from '../data/metrics';
import { Timer, Cpu, TrendingUp, Server } from 'lucide-react';

const Metrics: React.FC = () => {
  const iconComponents = {
    time: Timer,
    cpu: Cpu,
    trending: TrendingUp,
    server: Server
  };

  return (
    <section id="metrics" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Impact & Metrics</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Measuring performance improvements and operational efficiency gains from my DevOps implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metricsData.map((metric, index) => {
            const IconComponent = iconComponents[metric.icon as keyof typeof iconComponents];
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{metric.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{metric.description}</p>
                  </div>
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-teal-600 dark:text-teal-400">
                    {IconComponent && <IconComponent size={20} />}
                  </div>
                </div>
                
                <div className="mt-6 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">Before</span>
                    <span className="text-slate-600 dark:text-slate-400 text-sm">After</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${metric.improvementPercentage}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-mono text-3xl font-bold text-slate-800 dark:text-white">
                      {metric.beforeValue} <span className="text-sm">→</span> {metric.afterValue}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{metric.unit}</div>
                  </div>
                  <div className="text-teal-500 dark:text-teal-400 font-bold">
                    {metric.improvementPrefix}{metric.improvementPercentage}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-lg max-w-4xl mx-auto text-white">
          <h3 className="text-2xl font-bold mb-4">CI/CD Pipeline Visualization</h3>
          <div className="w-full relative py-8">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-slate-700 transform -translate-y-1/2"></div>
            
            <div className="flex justify-between relative">
              {["Code", "Build", "Test", "Deploy", "Monitor"].map((stage, index) => (
                <div key={index} className="flex flex-col items-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mb-2">
                    <span className="text-white font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-sm font-semibold">{stage}</span>
                  
                  <div className={`absolute top-6 left-6 w-full h-0.5 bg-teal-500 ${index === 4 ? 'hidden' : ''}`} style={{ width: 'calc(100% - 24px)' }}></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-slate-300 text-center text-sm">
            Average build time reduced from 15 minutes to 4 minutes with automated testing and parallel job execution
          </div>
        </div>
      </div>
      
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6" y2="6"></line>
          <line x1="6" y1="18" x2="6" y2="18"></line>
        </svg>
      </div>
    </section>
  );
};

export default Metrics;