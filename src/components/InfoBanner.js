import React from 'react';
import { Container } from 'react-bootstrap';
import './InfoBanner.css';

const InfoBanner = ({ imageUrl, link }) => {
  return (
    <section className="info-banner">
      <Container>
        <a href={link} className="banner-link">
          <img 
            src={imageUrl || "https://www.ihf.info/themes/ihf_theme/assets/img/Competition-manipulation-banner.jpg"} 
            alt="Athlete 365 Banner" 
            className="banner-image"
          />
        </a>
      </Container>
    </section>
  );
};

export default InfoBanner;