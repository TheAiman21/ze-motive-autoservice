import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="badge">Car Repair Shop</span>
        <h1>ZE<span>Motive</span> Auto Services</h1>
        <p className="tagline">"You broke it, We fix it"</p>
      </div>
    </section>
  );
};

export default Hero;