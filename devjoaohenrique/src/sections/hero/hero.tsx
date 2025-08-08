import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Tecnologia é o idioma com que escreve mudanças</h1>
          </div>
          <div className="hero-bottom-text">
            <span className="creative">CREATIVE</span>
            <span className="photographer">PHOTOGRAPHER</span>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/profile.jpg" 
            alt="João Henrique" 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 