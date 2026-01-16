import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">
            <span style={{ color: 'var(--accent-color)' }}>M</span>
            <span style={{ color: 'var(--text-muted)' }}>V</span>
          </span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
