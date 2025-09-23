import { Construction } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import VideoModal from "./VideoModal";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies?: string[];
  demoVideoUrl?: string;
  underConstruction?: boolean;
  workProject?: boolean;
  onViewProject: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  demoVideoUrl,
  underConstruction = false,
  workProject = false,
  onViewProject,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleViewDemo = () => {
    if (demoVideoUrl && !underConstruction) {
      setIsVideoModalOpen(true);
    }
  };

  return (
    <>
      <div className="animate-in transition-all duration-500 pt-10">
        <div className="max-w-6xl mx-auto">
          <div className="group bg-[#19191A] p-6 md:p-5 rounded-2xl shadow-lg flex flex-col md:flex-row items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 group-hover:before:opacity-10 group-hover:before:scale-100 after:absolute after:w-full after:h-full after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 group-hover:after:opacity-10 group-hover:after:scale-100">
            <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 w-full">
              {/* Fixed Image Container */}
              <div className="flex-shrink-0 w-full md:w-80 h-48 md:h-64 relative overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                />
                {/* Optional overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Under Construction Overlay */}
                {underConstruction && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm bg-opacity-90">
                    <Construction className="w-4 h-4" />
                    <span className="text-xs font-semibold">
                      Under Construction
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between w-full h-full p-2 md:p-4 min-h-[200px] md:min-h-[256px]">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <h1 className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">
                      {title}
                    </h1>
                    {underConstruction && (
                      <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 px-2 py-1 rounded-md flex items-center gap-1.5">
                        <Construction className="w-3 h-3" />
                        <span className="text-xs font-medium">WIP</span>
                      </div>
                    )}
                    {workProject && !underConstruction && (
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 px-2 py-1 rounded-md flex items-center gap-1.5">
                        <span className="text-xs font-medium">Work</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base leading-relaxed line-clamp-3">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium border border-gray-600/30 hover:bg-gray-600/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto pt-4 flex sm:flex-row gap-3 sm:gap-4">
                  {/* Project Button */}
                  <Button
                    className="py1 px-3 text-white"
                    primary
                    onClick={
                      underConstruction || workProject ? undefined : onViewProject
                    }
                  >
                    {underConstruction
                      ? "Coming Soon"
                      : workProject
                      ? "Confidential"
                      : "View Project"}
                  </Button>

                  {/* Demo Button */}
                  <Button
                    className="py1 px-3 text-grey-400"
                    secondary
                    onClick={
                      underConstruction || workProject ? undefined : handleViewDemo
                    }
                  >
                    {underConstruction || workProject ? "Confidential" : "View Demo"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={demoVideoUrl || ""}
        title={title}
      />
    </>
  );
};

export default ProjectCard;
