import Css from "../assets/css.svg?react";
import Dart from "../assets/dart.svg?react";
import Django from "../assets/django.svg?react";
import Figma from "../assets/figma.svg?react";
import Firebase from "../assets/firebase.svg?react";
import Flutter from "../assets/flutter.svg?react";
import Git from "../assets/git.svg?react";
import Html from "../assets/html.svg?react";
import Mysql from "../assets/mysql.svg?react";
import Python from "../assets/python.svg?react";
import ReactLogo from "../assets/react.svg?react";
import Tailwind from "../assets/tailwind.svg?react";
import TypeScript from "../assets/ts.svg?react";

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
    { name: "Figma", Icon: Figma },
    { name: "TypeScript", Icon: TypeScript },
    { name: "Dart", Icon: Dart },
    { name: "Tailwind CSS", Icon: Tailwind },
    { name: "MySQL", Icon: Mysql },
  ];

  return (
    <div className="group bg-[#19191A] p-5 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-full after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10 w-full">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Skills
        </h1>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-6">
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

export default Skills;