import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import React, { useEffect } from "react";
import Css from "../assets/css.svg?react";
import Django from "../assets/django.svg?react";
import Firebase from "../assets/firebase.svg?react";
import Flutter from "../assets/flutter.svg?react";
import Git from "../assets/git.svg?react";
import Html from "../assets/html.svg?react";
import Python from "../assets/python.svg?react";
import ReactLogo from "../assets/react.svg?react";

const Profile = () => {
  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-80 relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-80 after:h-80 after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-600 flex justify-center items-center mb-6 ring-4 ring-blue-500/20">
          <img
            src="https://avatars.githubusercontent.com/u/60168596?v=4"
            className="w-full h-full object-cover"
            alt="profile image"
          />
        </div>

        <a
          href="https://github.com/Nyi-NyiSoe"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center group"
        >
          <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:scale-110">
            Nyi Nyi Soe
          </h1>
          <p className="text-gray-400 mt-2 text-sm">Full Stack Developer</p>
        </a>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/Nyi-NyiSoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:nyinyisoe.dev@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-80 before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-80 after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          About Me
        </h1>
        <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl">
          I'm Nyi Nyi Soe, a full-stack developer. I love to build web/mobile
          applications and solve problems. I'm currently learning new
          technologies and building projects. If you have projects or ideas,
          feel free to contact me.
        </p>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "CSS", Icon: Css },
    { name: "HTML", Icon: Html },
    { name: "Python", Icon: Python },
    { name: "Git", Icon: Git },
    { name: "React", Icon: ReactLogo },
    { name: "Django", Icon: Django },
    { name: "Firebase", Icon: Firebase },
    { name: "Flutter", Icon: Flutter },
  ];

  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-full after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10 w-full">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Skills
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              <skill.Icon className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <span className="mt-2 text-gray-400 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-full after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10 w-full">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Experience
        </h1>
        <div className="space-y-4">
          <div className="group cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
              Programming Instructor
            </h3>
            <p className="text-gray-400 text-sm">
              Teaching and mentoring aspiring developers
            </p>
          </div>
          <div className="group cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
              Freelance Developer
            </h3>
            <p className="text-gray-400 text-sm">
              Building custom solutions for clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with Flutter",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/your-repo",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      tech: ["React", "Firebase", "Tailwind"],
      link: "https://github.com/your-repo",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS"],
      link: "https://github.com/your-repo",
    },
  ];

  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-full after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10 w-full">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Projects
        </h1>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group/item cursor-pointer p-6 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-200 group-hover/item:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>
              <div className="flex gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-full after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10 w-full">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Education
        </h1>
        <div className="space-y-6">
          <div className="group cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
              Computer Science
            </h3>
            <p className="text-gray-400 text-sm">
              University of computer studies,Mandalay • 2017 - 2019
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Relevant coursework: Data Structures, Algorithms, Web Development
            </p>
          </div>
          <div className="group cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
              Online Certifications
            </h3>
            <p className="text-gray-400 text-sm">
              Various platforms • 2021 - Present
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Web Developer, Python Certification, Flutter Masterclass
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-full after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10 w-full">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-300 mb-6">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className="space-y-4">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>nyinyisoe.dev@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/Nyi-NyiSoe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
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
    <div className="min-h-screen bg-black p-8 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3 animate-in transition-all duration-500">
          <About />
        </div>

        <div className="animate-in transition-all duration-500">
          <Skills />
        </div>
        <div className="flex justify-center items-start animate-in transition-all duration-500">
          <Profile />
        </div>
        <div className="animate-in transition-all duration-500">
          <Experience />
        </div>

        <div className="lg:col-span-2 animate-in transition-all duration-500">
          <Projects />
        </div>
        <div className="animate-in transition-all duration-500">
          <Education />
        </div>

        <div className="lg:col-span-3 animate-in transition-all duration-500">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
