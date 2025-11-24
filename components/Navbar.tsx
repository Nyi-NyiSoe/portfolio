import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
    }

    if (path.startsWith('/#')) {
        const id = path.substring(2);
        
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            // Small timeout to allow navigation to complete before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    } else {
        navigate(path);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          >
            Nyi Nyi Soe
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path.startsWith('/#') ? link.path.substring(1) : link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    (location.pathname === link.path) || (location.pathname === '/' && link.path === '/') 
                    ? 'text-blue-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
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
               <a
                key={link.name}
                href={link.path.startsWith('/#') ? link.path.substring(1) : link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md cursor-pointer"
               >
                 {link.name}
               </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;