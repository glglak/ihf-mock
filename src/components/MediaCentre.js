import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

  // Create a layout similar to the screenshot with specific sizes
  const layoutConfig = [
    { cols: 8, span: "big-image" },    // First item - big image
    { cols: 4, span: "small-image" },  // Second item - small image (top right)
    { cols: 4, span: "small-image" },  // Third item - small image (bottom right)
    { cols: 8, span: "medium-image" }  // Fourth item - medium image (bottom left, if it exists)
  ];

  return (
    <section className="media-centre-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">MEDIA CENTRE</h2>
          <a href="/media-centre" className="view-all">
            SHOW ALL MEDIA CENTRE <FaArrowRight />
          </a>
        </div>

        <Row className="media-grid">
          {mediaItems.slice(0, 4).map((item, index) => (
            <Col 
              key={item.id} 
              md={layoutConfig[index]?.cols || 6}
              className={`media-item-col ${layoutConfig[index]?.span || ''}`}
            >
              <div className="media-item">
                <div className="media-image-container">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="media-image" 
                    crossOrigin="anonymous"
                  />
                  <div className="media-overlay"></div>
                  <div className="media-content">
                    <div className="media-date">
                      {item.date}
                    </div>
                    <h3 className="media-title">{item.title}</h3>
                    <a href={`/media/${item.id}`} className="view-gallery">
                      <FaEye /> View Gallery
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MediaCentre;