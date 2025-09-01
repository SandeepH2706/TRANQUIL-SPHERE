import React, { useState, useEffect } from 'react';
import './Slider.css';

interface SlideData {
  id: number;
  image: string;
  link: string;
  alt: string;
}

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: SlideData[] = [
    {
      id: 1,
      image: '/assets/images/general/im1.jpg',
      link: 'https://en.wikipedia.org/wiki/Meditation',
      alt: 'Meditation',
    },
    {
      id: 2,
      image: '/assets/images/general/im2.jpg',
      link: 'https://en.wikipedia.org/wiki/Stress_management',
      alt: 'Stress Management',
    },
    {
      id: 3,
      image: '/assets/images/general/im3.jpg',
      link: 'https://en.wikipedia.org/wiki/Willpower',
      alt: 'Willpower',
    },
    {
      id: 4,
      image: '/assets/images/general/im4.jpg',
      link: 'https://en.wikipedia.org/wiki/Psychology',
      alt: 'Psychology',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="slider-container">
      <div className="slider">
        <div 
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <div className="content-box">
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <img src={slide.image} alt={slide.alt} />
                  <div className="slide-overlay">
                    <h3>{slide.alt}</h3>
                    <p>Learn more about {slide.alt.toLowerCase()}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button className="nav-arrow nav-arrow-left" onClick={goToPrevious}>
          ‹
        </button>
        <button className="nav-arrow nav-arrow-right" onClick={goToNext}>
          ›
        </button>
        
        {/* Slide indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
