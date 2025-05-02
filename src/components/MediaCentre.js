import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowRight, FaEye } from 'react-icons/fa';
import './MediaCentre.css';
import ApiService from '../services/api.service';

const MediaCentre = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setIsLoading(true);
        const data = await ApiService.getMedia();
        setMediaItems(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching media:', err);
        setError('Failed to load media. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const mediaItemWidth = {
    0: 50, // First item takes 50% width (large)
    1: 25, // Second item takes 25% width
    2: 25, // Third item takes 25% width
    3: 50  // Fourth item takes 50% width (if there are 4 items)
  };

  if (isLoading) {
    return (
      <section className="media-centre-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">MEDIA CENTRE</h2>
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
      <section className="media-centre-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">MEDIA CENTRE</h2>
          </div>
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="media-centre-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">MEDIA CENTRE</h2>
          <a href="/media-centre" className="view-all">
            SHOW ALL MEDIA CENTRE <FaArrowRight />
          </a>
        </div>

        <div className="media-grid">
          {mediaItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`media-item media-item-${index}`}
              style={{ width: `${mediaItemWidth[index]}%` }}
            >
              <div className="media-overlay"></div>
              <img src={item.image} alt={item.title} className="media-image" />
              <div className="media-content">
                <span className="media-date">{item.date}</span>
                <h3 className="media-title">{item.title}</h3>
                <a href={`/media/${item.id}`} className="view-gallery">
                  <FaEye /> View Gallery
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MediaCentre;
