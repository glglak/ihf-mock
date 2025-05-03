import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './WorldMapSection.css';

const WorldMapSection = () => {
  return (
    <section className="world-map-section">
      <Container fluid>
        <Row>
          <Col md={6} className="president-message">
            {/* Add background image as an actual img element with crossOrigin */}
            <img 
              src="https://www.ihf.info/sites/default/files/presidents/mapBg-1.jpg" 
              alt="President background" 
              className="background-image"
              crossOrigin="anonymous"
            />
            <div className="message-content">
              <div className="message-text">
                <p className="quote-text">
                  Dear handball friends, over the last years our sport has changed fundamentally – you might even call it a revolution.
                </p>
                <div className="quote-author">
                  <h4>Dr Hassan Moustafa</h4>
                  <p>IHF President</p>
                </div>
                <Button variant="link" className="read-more-link">Read more</Button>
              </div>
            </div>
          </Col>
          
          <Col md={6} className="world-map">
            {/* Add background image as an actual img element with crossOrigin */}
            <img 
              src="https://www.ihf.info/sites/default/files/presidents/mapBg-2.jpg" 
              alt="World map background" 
              className="background-image"
              crossOrigin="anonymous"
            />
            <div className="map-content">
              <h3 className="map-title">IHF WORLD MAP</h3>
              <p className="map-description">
                Go to view all countries to filter federation by country name or navigate the map.
              </p>
              <Button variant="light" className="find-now-btn">FIND NOW</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorldMapSection;