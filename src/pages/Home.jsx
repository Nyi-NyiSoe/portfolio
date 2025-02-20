import React from "react";
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
    <div className="bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-80">
      {/* Profile Image */}
      <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-600 flex justify-center items-center">
        <img
          src="https://avatars.githubusercontent.com/u/60168596?v=4"
          className="w-full h-full object-cover"
          alt="profile image"
        />
      </div>

      {/* Name with Styling */}
      <a
        href="https://github.com/Nyi-NyiSoe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="font-semibold text-xl text-blue-400 mt-3">
          Nyi Nyi Soe
        </h1>
      </a>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-80">
      <h1 className="font-semibold text-xl text-blue-400 mt-3">About Me</h1>
      <p className="text-gray-300 mt-3 text-center">
        I'm Nyi Nyi Soe, a full-stack developer from Myanmar. I love to build
        web/mobile applications and solve problems. I'm currently learning new
        technologies and building projects. If you have projects or ideas, feel
        free to contact me.
      </p>
    </div>
  );
};
const Skills = () => {
  return (
    <div className="bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-96">
      <h1 className="font-semibold text-xl text-blue-400 mt-3">Skills</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Css className="w-12 h-12" />
          <Html className="w-12 h-12" />
          <Python className="w-12 h-12" />
          <Git className="w-12 h-12" />
          <ReactLogo className="w-12 h-12" />
          <Django className="w-12 h-12" />
          <Firebase className="w-12 h-12" />
          <Flutter className="w-12 h-12" />
        </div>
    </div>
  );
}
const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Profile />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
