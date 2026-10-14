import React from 'react';
import background from '../assets/background.jpg';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="hero-overlay"></div>

      <div className="hero-shell">
        <div className="hero-content">
          <span className="hero-badge">Trusted wellness tracking for everyday life</span>
          <h1>Take control of your health with calm, guided care.</h1>
          <p>
            Healthify+ brings breathing sessions, medication reminders, health journaling,
            trusted hospital contacts, and a personalized dashboard into one beautiful experience.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-button" onClick={() => navigate("/register")} type="button">
              Start for Free
            </button>
            <button className="ghost-button" onClick={() => navigate("/login")} type="button">
              I already have an account
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>11</strong>
              <span>Guided breathing techniques</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Private dashboard access</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Personalized progress tracking</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#services" className="hero-scroll" aria-label="Scroll to services">
        <span></span>
      </a>
    </section>
  );
};

export default HeroSection;