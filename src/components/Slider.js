import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Slider.css';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Go to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const slideStyle = {
    backgroundImage: `url(${slides[currentSlide].image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="hero-section" style={slideStyle}>
      <Container className="hero-content">
        <h1 className="hero-title">{slides[currentSlide].title}</h1>
        <p className="hero-subtitle">{slides[currentSlide].description}</p>
        <Button variant="primary" className="read-more-btn">Read More</Button>
      </Container>

      {/* Navigation arrows */}
      <button className="carousel-control-prev" type="button" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === currentSlide ? 'active' : ''}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
