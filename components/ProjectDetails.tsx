import { motion } from 'framer-motion';
import { ArrowLeft, Github, Layers } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F0F11] text-white">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/" className="text-[#4C8BF5] hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F11] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#A0A0A5] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] to-transparent"></div>
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-lg text-[#C8C8D0]">{project.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-8">
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">About the Project</h3>
              <p className="text-[#C8C8D0] leading-relaxed text-lg">
                {project.longDescription || project.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-2 text-[#C8C8D0]">
                {project.keyFeatures ? project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 bg-[#4C8BF5] rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                )) : (
                  <li>No key features listed.</li>
                )}
              </ul>
            </div>

          </div>

          <div className="space-y-8">

            <div className="bg-[#1A1A1D] rounded-xl p-6 border border-[#2A2A2D]">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Layers size={20} className="text-[#4C8BF5]"/> Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-[#2A2A2D] text-[#C8C8D0] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {project.repoUrl && !project.inDevelopment && (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1A1A1D] hover:bg-[#2A2A2D] text-white px-6 py-3 rounded-lg font-medium transition-colors border border-[#2A2A2D]"
                >
                  <Github size={20} /> Source Code
                </a>
              )}
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default ProjectDetails;
