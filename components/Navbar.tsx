import { Menu, X } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Projects', path: '/#projects' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/contact' },
];

const SECTIONS = ['home', 'experience', 'projects', 'about'];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy using IntersectionObserver
  useEffect(() => {
    if (location.pathname !== '/') return setActiveSection('');

    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-80px 0px -50% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [location.pathname]);

  const handleClick = useCallback(
    (e: React.MouseEvent, path: string) => {
      e.preventDefault();
      setIsOpen(false);

      if (path === '/') {
        location.pathname !== '/' ? navigate('/') : window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (path.startsWith('/#')) {
        const id = path.slice(2);
        if (location.pathname === '/') {
          const el = document.getElementById(id);
          if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        } else {
          navigate('/');
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
          }, 150);
        }
        return;
      }

      navigate(path);
    },
    [location.pathname, navigate]
  );

  const isActive = (path: string) => {
    if (path === '/contact') return location.pathname === '/contact';
    if (path === '/') return activeSection === 'home';
    if (path.startsWith('/#')) return activeSection === path.replace('/#', '');
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 shadow-md py-4 border-b border-gray-800'
          : 'bg-black py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            onClick={(e) => handleClick(e, '/')}
            className="text-2xl font-bold text-gray-100 tracking-tight"
          >
            Nyi Nyi Soe
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleClick(e, link.path)}
                className={`text-sm font-medium relative group transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-100'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
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
        <div className="md:hidden bg-black absolute w-full top-full left-0 border-t border-gray-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleClick(e, link.path)}
                className={`block w-full text-left px-3 py-4 text-base font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? 'text-white bg-gray-900/50'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-gray-900'
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
