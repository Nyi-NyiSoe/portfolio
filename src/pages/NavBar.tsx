import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/20 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex rounded-full bg-[#1A1B1E]/60 backdrop-blur-lg border border-white/5 shadow-lg p-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? 'bg-[#27282B] text-white shadow-sm'
                    : 'text-gray-400 hover:text-gray-200'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? 'bg-[#27282B] text-white shadow-sm'
                    : 'text-gray-400 hover:text-gray-200'
                }`
              }
            >
              Projects
            </NavLink>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;