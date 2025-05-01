import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Competitions.css';

const Competitions = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  const competitions = [
    {
      id: 1,
      title: 'IHF Trophy (U17) Youth Women 2025',
      image: 'https://www.ihf.info/sites/default/files/styles/medium/public/competition-logos/u17_women_youth.png',
      link: '/competitions/ihf-trophy-u17-women-2025'
    },
    {
      id: 2,
      title: 'IHF Trophy (U19) Junior Women 2025',
      image: 'https://www.ihf.info/sites/default/files/styles/medium/public/competition-logos/u19_women_junior.png',
      link: '/competitions/ihf-trophy-u19-women-2025'
    },
    {
      id: 3,
      title: '11th IHF Men\'s Youth (U19) World Championship 2025 Egypt',
      image: 'https://www.ihf.info/sites/default/files/styles/medium/public/competition-logos/u19_men_egypt_2025.png',
      link: '/competitions/mens-youth-world-championship-2025'
    },
    {
      id: 4,
      title: '25th IHF Men\'s Junior World Championship 2025 Poland',
      image: 'https://www.ihf.info/sites/default/files/styles/medium/public/competition-logos/u21_men_world_championship.png',
      link: '/competitions/mens-junior-world-championship-2025'
    },
    {
      id: 5,
      title: 'Women\'s World Championship 2025',
      image: 'https://www.ihf.info/sites/default/files/styles/medium/public/competition-logos/wwch_2025.png',
      link: '/competitions/womens-world-championship-2025'
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? competitions.length - 4 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === competitions.length - 4 ? 0 : prev + 1));
  };

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
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

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
          {competitions.slice(0, competitions.length - 3).map((_, index) => (
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
