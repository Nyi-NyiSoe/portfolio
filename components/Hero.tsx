import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Function to handle the actual scrolling
    const scrollToTarget = () => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      // If not on home page, navigate to home then scroll
      navigate('/');
      setTimeout(scrollToTarget, 100);
    } else {
      // If already on home page, just scroll
      scrollToTarget();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[url('https://picsum.photos/1920/1080?blur=10&grayscale')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-slate-900/90" /> {/* Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
            Available for hire
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-100 tracking-tight mb-6">
            Building simple, reliable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              apps people enjoy using.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            I’m a Frontend Engineer working with React, React Native, and
            Flutter. I build mobile apps and websites with clear UI, smooth
            interactions, and clean, organized code.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group w-full sm:w-auto justify-center cursor-pointer"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a
                href="https://github.com/Nyi-NyiSoe"
                target="_blank"
                rel="noreferrer"
                className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nyi-nyi-soe-960a95341"
                target="_blank"
                rel="noreferrer"
                className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:nyinyisoe.dev@gmail.com"
                className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
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
        <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-500 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-slate-500 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;