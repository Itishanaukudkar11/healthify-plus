import React from 'react';
import './Service.css';

const services = [
  {
    icon: '🩺',
    title: 'Medical Assistant Bot',
    description: 'Get quick, friendly answers to common health questions any time you need them.',
  },
  {
    icon: '💊',
    title: 'Medication Reminders',
    description: 'Track medicines, dose times, and daily status with reminders saved to your account.',
  },
  {
    icon: '🏥',
    title: 'Hospital Finder',
    description: 'Search nearby emergency contacts and copy hospital phone numbers instantly.',
  },
  {
    icon: '🧘',
    title: 'Stress Relief Exercises',
    description: 'Follow guided breathing sessions with timers that match each technique.',
  },
  {
    icon: '📓',
    title: 'Health Journal',
    description: 'Record mood, symptoms, and notes to understand your wellness patterns over time.',
  },
  {
    icon: '📊',
    title: 'Progress Dashboard',
    description: 'See wellness scores, streaks, activity, and recent health data in one place.',
  },
];

const Service = () => (
  <section id="services" className="content-section services-section">
    <div className="section-intro">
      <span className="section-eyebrow">What we offer</span>
      <h2 className="section-title">Services built around your daily health.</h2>
      <p>Simple tools that make reminders, tracking, emergency details, and calm routines easy to use every day.</p>
    </div>

    <div className="services-grid">
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Service;