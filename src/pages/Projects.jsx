import React, { useEffect } from "react";
import html from "../assets/html.svg";
import reactimage from "../assets/react.svg";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Chat App",
      description: "A real-time chat application using WebSockets.",
      tech: ["React", "Node.js", "Tailwind"],
      link: "https://yourprojectlink.com",
      images: [reactimage, html],
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with payment integration.",
      tech: ["Next.js", "Stripe", "Tailwind"],
      link: "https://yourprojectlink.com",
      images: [reactimage, html],
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-in");
    elements.forEach((element, index) => {
      element.classList.add("opacity-0", "translate-y-10");
      setTimeout(() => {
        element.classList.remove("opacity-0", "translate-y-10");
        element.classList.add("opacity-100", "translate-y-0");
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24 p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-full after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
          <div className="relative z-10 w-full">
            <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12 animate-in">
              My Projects
            </h1>
            <div className="grid gap-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group/item animate-in flex flex-col md:flex-row items-center gap-8 bg-black/20 hover:bg-black/40 transition-all duration-500 p-8 rounded-xl relative overflow-hidden before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500/20 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:group-hover/item:opacity-10 before:group-hover/item:scale-100"
                >
                  {/* Image Gallery - Left Side */}
                  <div className="w-full md:w-1/2">
                    <div className="relative group/image overflow-hidden rounded-xl">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-all duration-500 group-hover/image:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500 flex justify-center items-center">
                        <p className="text-white text-sm font-medium transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-500">
                          Click to View More
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project Details - Right Side */}
                  <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
