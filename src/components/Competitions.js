import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Competitions.css';
import ApiService from '../services/api.service';

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const slideRef = useRef(null);

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

  const totalSlides = competitions.length;
  const slidesToShow = 4;
  const maxSlideIndex = Math.max(0, totalSlides - slidesToShow);

  const handlePrev = () => {
    setActiveSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => Math.min(maxSlideIndex, prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

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
          <button 
            className="slider-arrow prev" 
            onClick={handlePrev}
            disabled={activeSlide === 0}
          >
            <FaChevronLeft />
          </button>

          <div className="competitions-slider" ref={slideRef}>
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
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="competition-title">{competition.title}</h3>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="slider-arrow next" 
            onClick={handleNext}
            disabled={activeSlide >= maxSlideIndex}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Slider indicators */}
        <div className="slider-indicators">
          {competitions.length > slidesToShow && 
            Array.from({length: maxSlideIndex + 1}).map((_, index) => (
              <button
                key={index}
                className={`indicator ${activeSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))
          }
        </div>
      </Container>
    </section>
  );
};

export default Competitions;