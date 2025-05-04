import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Slider.css';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Preload images with crossOrigin attribute
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = slide.image;
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [index]: true
        }));
      };
    });
  }, [slides]);

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

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-item ${index === currentSlide ? 'active' : ''}`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            crossOrigin="anonymous"
            className="slide-background"
          />
          <div className="slide-overlay"></div>
          <Container className="slide-content">
            <div className="slide-text">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-description">{slide.description}</p>
              <Button variant="primary" className="read-more-btn">Read More</Button>
            </div>
          </Container>
        </div>
      ))}

      {/* Navigation arrows */}
      <button className="carousel-control-prev" type="button" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Slide indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;