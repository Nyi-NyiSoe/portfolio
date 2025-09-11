import { useEffect } from "react";
import About from "../common/About";
import Education from "../common/Education";
import Experience from "../common/Experience";
import Profile from "../common/Profile";
import Skills from "../common/Skill";

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
    <div className="min-h-screen bg-black/80 pt-24 p-8 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-in transition-all duration-500">
          <div className="md:col-span-4 animate-in transition-all duration-500 ">
            <Profile />
          </div>

          <div className="md:col-span-8 animate-in transition-all duration-500">
            <About />
          </div>
          <div className="md:col-span-full animate-in transition-all duration-500">
            <Skills />
          </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-center md:col-span-12 animate-in transition-all duration-500 gap-8">
            <Education />
            <Experience />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
