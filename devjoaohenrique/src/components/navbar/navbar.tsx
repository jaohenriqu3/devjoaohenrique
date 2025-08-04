import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>João Henrique - DEV</h1>
        </div>
        <div className="navbar-links">
          <a href="#portfolio" className="nav-link">Projetos</a>
          <a href="#about" className="nav-link">SOBRE MIM</a>
          <a href="#contact" className="nav-link">Contatos</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
