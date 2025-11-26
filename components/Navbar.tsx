import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Projects', path: '/#projects' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (path === '/') {
      if (location.pathname !== '/') navigate('/');
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      return;
    }

    navigate(path);
  };

  const isActive = (linkPath: string) => {
    if (linkPath === '/' && location.pathname === '/') return true;
    if (linkPath === '/contact' && location.pathname === '/contact') return true;
    if (linkPath.startsWith('/#') && location.hash === linkPath.replace('/','')) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Nyi Nyi Soe
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive(link.path) ? 'text-gray-200' : 'text-gray-400 hover:text-gray-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 absolute w-full top-full left-0 border-t border-slate-700 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`block w-full text-left px-3 py-4 text-base font-medium rounded-md transition-colors ${
                  isActive(link.path) ? 'text-gray-200 bg-slate-700' : 'text-gray-400 hover:text-gray-100 hover:bg-slate-700'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
