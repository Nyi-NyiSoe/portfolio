import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project, ProjectType } from '../types';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';
import VideoModal from './VideoModal';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectType>(ProjectType.WORK);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = PROJECTS.filter(p => p.type === activeTab);

  const handleOpenDemo = (project: Project) => {
    if (project.type === ProjectType.WORK) return;
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <SectionWrapper id="projects" className="bg-slate-900">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">Featured Projects</h2>
        
        {/* Custom Tab Switcher */}
        <div className="flex p-1 bg-slate-800 rounded-xl relative">
          {/* Active Tab Background Animation */}
          <motion.div
            layoutId="activeTab"
            className="absolute bg-blue-600 rounded-lg h-[calc(100%-8px)] top-1 transition-all duration-300"
            style={{
              width: "50%",
              left: activeTab === ProjectType.WORK ? "4px" : "calc(50% - 4px)", 
            }}
          />
          
          <button
            onClick={() => setActiveTab(ProjectType.WORK)}
            className={`relative z-10 px-8 py-2 rounded-lg font-medium text-sm transition-colors ${activeTab === ProjectType.WORK ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Professional Work
          </button>
          <button
            onClick={() => setActiveTab(ProjectType.HOBBY)}
            className={`relative z-10 px-8 py-2 rounded-lg font-medium text-sm transition-colors ${activeTab === ProjectType.HOBBY ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Hobby & Creative
          </button>
        </div>
      </div>

      {/* 
         Using mode='wait' prevents the layout thrashing that occurs when 
         one set of grid items is exiting while another enters.
      */}
      <AnimatePresence mode='wait'>
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenDemo={handleOpenDemo} 
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <VideoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedProject?.demoVideoUrl}
        title={selectedProject?.title || ""}
      />
    </SectionWrapper>
  );
};

export default Projects;