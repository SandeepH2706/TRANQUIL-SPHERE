import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Mental Health Assessments',
      description: 'Comprehensive psychological evaluations to understand your mental health status',
      icon: '🧠',
      features: ['Mood Assessment', 'Anxiety Screening', 'Stress Level Analysis', 'Personalized Reports']
    },
    {
      title: 'Therapy Sessions',
      description: 'Professional one-on-one therapy sessions with licensed mental health professionals',
      icon: '💬',
      features: ['Individual Therapy', 'Group Sessions', 'Family Counseling', 'Crisis Intervention']
    },
    {
      title: 'Wellness Programs',
      description: 'Structured programs designed to improve overall mental wellbeing',
      icon: '🌱',
      features: ['Meditation Programs', 'Stress Management', 'Life Coaching', 'Mindfulness Training']
    },
    {
      title: 'Support Groups',
      description: 'Connect with others who share similar experiences and challenges',
      icon: '👥',
      features: ['Peer Support', 'Group Activities', 'Community Events', 'Online Forums']
    },
    {
      title: 'Emergency Support',
      description: '24/7 crisis support and emergency mental health assistance',
      icon: '🚨',
      features: ['Crisis Hotline', 'Emergency Counseling', 'Immediate Support', 'Safety Planning']
    },
    {
      title: 'Educational Resources',
      description: 'Access to mental health education and self-help materials',
      icon: '📚',
      features: ['Online Courses', 'Webinars', 'Self-Help Guides', 'Mental Health Library']
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive mental health support tailored to your needs</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            <ul className="service-features">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            
            <button className="service-button">Learn More</button>
          </div>
        ))}
      </div>
      
      <div className="cta-section">
        <h2>Ready to Begin Your Journey?</h2>
        <p>Take the first step towards better mental health today</p>
        <div className="cta-buttons">
          <button className="cta-primary">Schedule Consultation</button>
          <button className="cta-secondary">Take Assessment</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
