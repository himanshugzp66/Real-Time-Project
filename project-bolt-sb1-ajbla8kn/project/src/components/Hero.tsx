import React, { useState, useEffect } from 'react';
import { Terminal, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'DevOps Engineer';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (displayText === fullText) {
      setIsTypingComplete(true);
      return;
    }

    const typingTimer = setTimeout(() => {
      setDisplayText(fullText.substring(0, displayText.length + 1));
    }, 100);

    return () => clearTimeout(typingTimer);
  }, [displayText, fullText]);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-header flex items-center bg-slate-800 dark:bg-slate-700 p-2 rounded-t-lg">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-white font-mono text-sm">terminal@portfolio:~</div>
          </div>
          
          <div className="terminal-body bg-slate-900 dark:bg-slate-800 p-6 md:p-8 rounded-b-lg shadow-xl font-mono text-sm md:text-base">
            <div className="flex items-start mb-4">
              <span className="text-green-400 mr-2">$</span>
              <div>
                <p className="text-slate-300">
                  <span className="text-white">whoami</span>
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-teal-400 font-bold text-xl md:text-3xl mb-2">Alex Morgan</p>
              <p className="text-slate-300 mb-4">
                <span className="inline-flex items-center">
                  <Terminal size={18} className="mr-2 text-teal-400" />
                  <span className="text-white">{displayText}</span>
                  {!isTypingComplete && <span className="animate-pulse">_</span>}
                </span>
              </p>
            </div>
            
            <div className="flex items-start mb-4">
              <span className="text-green-400 mr-2">$</span>
              <div>
                <p className="text-slate-300">
                  <span className="text-white">cat</span> about.txt
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-slate-300 mb-3 leading-relaxed">
                I'm a <span className="text-teal-400 font-semibold">DevOps Engineer</span> with 3 years of experience specializing in 
                cloud infrastructure, CI/CD pipelines, and automation. I help teams deliver software faster and more reliably.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My expertise includes <span className="text-yellow-400">AWS</span>, <span className="text-blue-400">Kubernetes</span>,
                <span className="text-red-400"> Docker</span>, <span className="text-green-400">Terraform</span>, and implementing 
                GitOps workflows that streamline development and operations.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-green-400 mr-2">$</span>
              <div>
                <p className="text-slate-300">
                  <span className="text-white">./</span>view_portfolio.sh
                </p>
              </div>
            </div>
            
            <div className="mt-4 mb-2">
              <p className="text-slate-300">
                <span className="text-white">[INFO]</span> Loading portfolio assets...
              </p>
            </div>
            
            <div className="loading-bar w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-teal-500 animate-pulse rounded-full"></div>
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <a href="#skills" className="animate-bounce flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">
              <span className="mb-2 text-sm font-medium">Explore My Work</span>
              <ChevronDown size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;