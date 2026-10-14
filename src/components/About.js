import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="content-section about-section">
    <div className="about-grid">
      <div className="about-copy">
        <span className="section-eyebrow">About Healthify+</span>
        <h2 className="section-title">Healthcare support made simpler, calmer, and more personal.</h2>
        <p>
          Healthify+ is dedicated to making everyday healthcare easier to manage by combining
          guided breathing, medication reminders, health journaling, emergency contacts,
          and wellness tracking in one focused app.
        </p>
        <p>
          Whether you want to build a calm breathing habit, remember important medicines,
          or keep track of how you feel, Healthify+ keeps your information organized and
          available when you need it.
        </p>
      </div>

      <div className="about-points">
        <div>
          <strong>Mission</strong>
          <p>Make preventive health habits practical for students, families, and busy professionals.</p>
        </div>
        <div>
          <strong>Privacy</strong>
          <p>Your journal, reminders, chat history, and exercise logs are tied to your private account.</p>
        </div>
        <div>
          <strong>Support</strong>
          <p>Use the app for daily wellness support and contact a medical professional for urgent concerns.</p>
        </div>
      </div>
    </div>

    <footer className="home-footer">
      <p>© 2026 Healthify+. Built to support healthier everyday routines.</p>
    </footer>
  </section>
);

export default About;