import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const scrollToTarget = () => {
      const element = document.getElementById('projects');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToTarget, 100);
    } else {
      scrollToTarget();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[url('https://picsum.photos/1920/1080?blur=10&grayscale')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/80" /> {/* Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gray-800 text-gray-400 text-sm font-semibold mb-6 border border-gray-700/50">
            Available for hire
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-100 tracking-tight mb-6">
            Building simple, reliable <br />
            <span className="text-gray-200">
              apps people enjoy using.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            I’m a Frontend Engineer working with React, React Native, and
            Flutter. I build mobile apps and websites with clear UI, smooth
            interactions, and clean, organized code.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-8 py-4 bg-gray-700 text-gray-100 rounded-full font-medium transition-all shadow-lg flex items-center gap-2 group w-full sm:w-auto justify-center cursor-pointer"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a
                href="https://github.com/Nyi-NyiSoe"
                target="_blank"
                rel="noreferrer"
                className="p-3 text-gray-400 hover:text-gray-100 hover:bg-gray-800 rounded-full transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nyi-nyi-soe-960a95341"
                target="_blank"
                rel="noreferrer"
                className="p-3 text-gray-400 hover:text-gray-100 hover:bg-gray-800 rounded-full transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:nyinyisoe.dev@gmail.com"
                className="p-3 text-gray-400 hover:text-gray-100 hover:bg-gray-800 rounded-full transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-600 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gray-600 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
