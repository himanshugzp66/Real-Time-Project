import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Dev</span>Ops<span className="text-teal-500">.me</span>
            </h3>
            <p className="text-slate-300 max-w-md">
              Specializing in cloud infrastructure, automated deployments, and DevOps practices that enable teams to deliver high-quality software faster and more reliably.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-teal-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-teal-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-slate-300 hover:text-teal-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-teal-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-teal-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">AWS</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Kubernetes</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Docker</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Terraform</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Jenkins</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">GitOps</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Prometheus</span>
              <span className="px-2 py-1 bg-slate-800 rounded text-xs">Linux</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Himanshu Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;