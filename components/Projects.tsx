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
    <SectionWrapper id="projects" className="bg-[#111111]">
      <div className="flex flex-col items-center mb-12">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Featured Projects
        </h2>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-[#1A1A1D] rounded-xl relative border border-[#2A2A2D]">
          
          {/* Animated Active Badge */}
          <motion.div
            layoutId="activeTab"
            className="absolute rounded-lg h-[calc(100%-8px)] top-1 bg-[#4C8BF5]"
            style={{
              width: "50%",
              left: activeTab === ProjectType.WORK ? "4px" : "calc(50% - 4px)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* WORK tab */}
          <button
            onClick={() => setActiveTab(ProjectType.WORK)}
            className={`relative z-10 px-8 py-2 rounded-lg font-medium text-sm transition-colors 
              ${activeTab === ProjectType.WORK ? 'text-white' : 'text-[#A0A0A5] hover:text-white'}`}
          >
            Professional Work
          </button>

          {/* HOBBY tab */}
          <button
            onClick={() => setActiveTab(ProjectType.HOBBY)}
            className={`relative z-10 px-8 py-2 rounded-lg font-medium text-sm transition-colors 
              ${activeTab === ProjectType.HOBBY ? 'text-white' : 'text-[#A0A0A5] hover:text-white'}`}
          >
            Hobby & Creative
          </button>

        </div>
      </div>

      {/* Project Grid with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDemo={handleOpenDemo}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
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
