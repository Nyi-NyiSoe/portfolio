import { Github, Linkedin, Mail } from "lucide-react";
import React, { useEffect } from "react";
import Css from "../assets/css.svg?react";
import Django from "../assets/django.svg?react";
import Firebase from "../assets/firebase.svg?react";
import Flutter from "../assets/flutter.svg?react";
import Git from "../assets/git.svg?react";
import Html from "../assets/html.svg?react";
import Python from "../assets/python.svg?react";
import ReactLogo from "../assets/react.svg?react";

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
    <div className="min-h-screen bg-black pt-24 p-8 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Profile Card - Left */}
          <div className="md:col-span-4 animate-in transition-all duration-500">
            <Profile />
          </div>
          
          {/* About Section - Right */}
          <div className="md:col-span-8 animate-in transition-all duration-500">
            <About />
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Skills - Left */}
          <div className="md:col-span-6 animate-in transition-all duration-500">
            <Skills />
          </div>
          
          {/* Experience - Right */}
          <div className="md:col-span-6 animate-in transition-all duration-500">
            <Experience />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Education */}
          <div className="md:col-span-6 animate-in transition-all duration-500">
            <Education />
          </div>
          
          {/* Contact */}
          <div className="md:col-span-6 animate-in transition-all duration-500">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-80 after:h-80 after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
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
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full h-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-80 before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-80 after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          About Me
        </h1>
        <p className="text-gray-300 mt-4 leading-relaxed">
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
            href="mailto:nyinyisoe.dev@gmail.com"
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

export default Home;