import React from 'react';
import { Server, Cloud, Database, Code, GitBranch, BarChart, Cpu, Globe } from 'lucide-react';
import { skillsData } from '../data/skills';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-teal-600 dark:text-teal-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            <span className="text-slate-700 dark:text-slate-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    { 
      title: "Cloud Platforms", 
      icon: <Cloud size={24} />,
      skills: skillsData.cloudPlatforms
    },
    { 
      title: "Container Orchestration", 
      icon: <Server size={24} />,
      skills: skillsData.containerOrchestration
    },
    { 
      title: "CI/CD", 
      icon: <GitBranch size={24} />,
      skills: skillsData.ciCd
    },
    { 
      title: "Infrastructure as Code", 
      icon: <Code size={24} />,
      skills: skillsData.infrastructureAsCode
    },
    { 
      title: "Monitoring & Logging", 
      icon: <BarChart size={24} />,
      skills: skillsData.monitoringLogging
    },
    { 
      title: "Databases", 
      icon: <Database size={24} />,
      skills: skillsData.databases
    },
    { 
      title: "Operating Systems", 
      icon: <Cpu size={24} />,
      skills: skillsData.operatingSystems
    },
    { 
      title: "Networking", 
      icon: <Globe size={24} />,
      skills: skillsData.networking
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My technical expertise spans across multiple domains of DevOps and cloud infrastructure,
            enabling me to build robust, scalable, and automated systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;