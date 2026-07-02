import React from 'react';
import logo from '../assets/logo5.png'; // Adjust path
import background from '../assets/background.jpg'; // Adjust path
import './HeroSection.css';

const HeroSection = () => (
  <div id="home" className="hero-section">
    <div className="hero-background" style={{ backgroundImage: `url(${background})` }}></div>
    <div className="hero-content">
      
      <h1>Healthify+</h1>
      <p>Your one-stop platform for medical assistance, tracking, and healthcare services.</p>
    </div>
  </div>
);

export default HeroSection;
