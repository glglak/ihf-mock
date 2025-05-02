import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Competitions.css';
import ApiService from '../services/api.service';

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        setIsLoading(true);
        const data = await ApiService.getCompetitions();
        setCompetitions(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching competitions:', err);
        setError('Failed to load competitions. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchCompetitions();
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? Math.max(0, competitions.length - 4) : prev - 1));
  };

  const handleNext = useCallback(() => {
    setActiveSlide((prev) => (prev === Math.max(0, competitions.length - 4) ? 0 : prev + 1));
  }, [competitions.length]);

  const handleIndicatorClick = (index) => {
    setActiveSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev();
    }
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (competitions.length === 0) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [competitions.length, handleNext]);

  if (isLoading) {
    return (
      <section className="competitions-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">IHF COMPETITIONS</h2>
          </div>
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="competitions-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">IHF COMPETITIONS</h2>
          </div>
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="competitions-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">IHF COMPETITIONS</h2>
          <a href="/competitions" className="view-all">
            SEE ALL COMPETITIONS <FaArrowRight />
          </a>
        </div>

        <div className="competitions-slider-container">
          <button className="slider-arrow prev" onClick={handlePrev}>
            <FaChevronLeft />
          </button>

          <div 
            className="competitions-slider"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${activeSlide * 25}%)` }}
            >
              {competitions.map((competition) => (
                <div key={competition.id} className="competition-card">
                  <a href={competition.link} className="competition-link">
                    <div className="competition-image-container">
                      <img 
                        src={competition.image} 
                        alt={competition.title} 
                        className="competition-image" 
                      />
                    </div>
                    <h3 className="competition-title">{competition.title}</h3>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow next" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className="slider-indicators">
          {competitions.slice(0, Math.max(1, competitions.length - 3)).map((_, index) => (
            <button
              key={index}
              className={`indicator ${activeSlide === index ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Competitions;