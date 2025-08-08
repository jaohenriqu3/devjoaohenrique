import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>João Henrique </h1>
        </div>
        

        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        
        <div className="navbar-links desktop-links">
          <a href="#portfolio" className="nav-link">Projetos</a>
          <a href="#about" className="nav-link">SOBRE MIM</a>
          <a href="#contact" className="nav-link">Contatos</a>
        </div>

        
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <a href="#portfolio" className="mobile-nav-link" onClick={closeMenu}>Projetos</a>
            <a href="#about" className="mobile-nav-link" onClick={closeMenu}>SOBRE MIM</a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contatos</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
