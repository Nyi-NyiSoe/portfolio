import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex justify-center p-2">
      <ul className="flex space-x-4 bg-gray-900 p-4 rounded-xl">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === link.path
                  ? 'bg-gray-700 text-white font-semibold'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
