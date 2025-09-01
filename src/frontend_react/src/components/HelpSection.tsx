import React from 'react';
import './HelpSection.css';

interface HelpItem {
  title: string;
  href: string;
  description: string;
  icon: string;
}

const HelpSection: React.FC = () => {
  const helpItems: HelpItem[] = [
    {
      title: 'Health Guide',
      href: 'https://www.helpguide.org/mental-health',
      description: 'Comprehensive mental health resources and guidance',
      icon: '📚',
    },
    {
      title: 'Therapy Sessions',
      href: 'https://www.amahahealth.com/therapy-psychiatry/lpexpt/2b3/',
      description: 'Professional therapy and counseling services',
      icon: '🧠',
    },
    {
      title: 'Self-Care Tips',
      href: 'https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health',
      description: 'Daily practices for mental wellness',
      icon: '💆‍♀️',
    },
    {
      title: 'Emergency Contacts',
      href: 'https://indianhelpline.com/karnataka',
      description: '24/7 crisis support and emergency assistance',
      icon: '🚨',
    },
  ];

  return (
    <section className="help-section">
      <div className="help-container">
        <h2 className="help-title">How Can We Help?</h2>
        <p className="help-subtitle">
          Discover our comprehensive mental health resources designed to support your wellbeing journey
        </p>
        
        <div className="help-grid">
          {helpItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="help-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="help-icon">{item.icon}</div>
              <h3 className="help-card-title">{item.title}</h3>
              <p className="help-card-description">{item.description}</p>
              <div className="help-card-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
