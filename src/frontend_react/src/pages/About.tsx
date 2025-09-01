import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Tranquil Sphere</h1>
        <p>Your sanctuary for mental well-being and personal growth</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Tranquil Sphere, we believe that mental well-being is not just about managing stress 
            but about fostering a holistic lifestyle that promotes emotional strength, self-awareness, 
            and inner harmony. Our mission is to create a world where mental health is prioritized, 
            stigma-free, and accessible to everyone.
          </p>
        </section>
        
        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🧘‍♀️ Guided Mindfulness</h3>
              <p>Learn meditation techniques that promote relaxation, focus, and self-reflection.</p>
            </div>
            <div className="feature">
              <h3>💪 Stress Management</h3>
              <p>Discover effective strategies to manage stress and anxiety through practical exercises.</p>
            </div>
            <div className="feature">
              <h3>🌱 Emotional Resilience</h3>
              <p>Gain tools to develop emotional resilience and navigate life's challenges with strength.</p>
            </div>
            <div className="feature">
              <h3>👥 Community Support</h3>
              <p>Join a supportive community where individuals share experiences and receive guidance.</p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Why Choose Tranquil Sphere?</h2>
          <ul className="benefits-list">
            <li>✅ Science-backed approaches based on research and expert recommendations</li>
            <li>✅ User-friendly resources designed for easy navigation and accessibility</li>
            <li>✅ Holistic approach integrating mindfulness, psychology, and self-care</li>
            <li>✅ Safe and supportive community providing a judgment-free space</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
