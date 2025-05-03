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

  // Rather than using background-image style, we'll use an actual img tag with crossOrigin
  return (
    <div className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-item ${index === currentSlide ? 'active' : ''}`}
          style={{ 
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            crossOrigin="anonymous"
            className="slide-background"
          />
          <div className="slide-content">
            <Container className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.description}</p>
              <Button variant="primary" className="read-more-btn">Read More</Button>
            </Container>
          </div>
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

      {/* Custom dots navigation */}
      <div className="slide-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;