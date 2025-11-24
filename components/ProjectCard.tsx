import { Construction, ExternalLink, Github, Lock, PlayCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Project, ProjectType } from "../types";

interface ProjectCardProps {
  project: Project;
  onOpenDemo: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDemo }) => {
  const isWork = project.type === ProjectType.WORK;
  const isDev = project.inDevelopment;

  return (
    <div className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {isWork && (
          <div className="absolute top-3 right-3 z-20 bg-amber-500/90 text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1">
            <Lock size={12} /> Confidential
          </div>
        )}
        {!isWork && isDev && (
          <div className="absolute top-3 right-3 z-20 bg-purple-500/90 text-white text-xs font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1">
            <Construction size={12} /> In Dev
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2 py-1 rounded-md bg-slate-700 text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs font-medium px-2 py-1 rounded-md bg-slate-700 text-slate-300">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-700">
          {isWork ? (
            <div className="w-full text-center py-2 bg-slate-800/50 border border-slate-700 border-dashed rounded text-slate-500 text-sm italic">
              Internal Project - View Disabled
            </div>
          ) : isDev ? (
            <>
              <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-400 text-sm font-medium rounded-lg border border-slate-700 cursor-not-allowed">
                <Construction size={16} /> In Progress
              </div>
              <Link
                to={`/project/${project.id}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Details
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => onOpenDemo(project)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <PlayCircle size={16} /> Demo
              </button>
              <Link
                to={`/project/${project.id}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Details
              </Link>
            </>
          )}
        </div>

        {!isWork && !isDev && (
          <div className="flex gap-4 mt-3 justify-center">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;