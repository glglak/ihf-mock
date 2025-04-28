import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  const heroStyle = {
    backgroundImage: 'url(https://www.ihf.info/sites/default/files/styles/large_desktop_header_image/public/2022-07/faroe%20islands%20qual%20banner.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
  };

  return (
    <div className="hero-section" style={heroStyle}>
      <Container className="hero-content">
        <h1 className="hero-title">
          THE RECIPE FOR A HISTORIC FEATURE: MITTÚN'S EXPERIENCE AS THE FAROE ISLANDS QUALIFY FOR THE FIRST SENIOR WORLD CHAMPIONSHIP
        </h1>
        <p className="hero-subtitle">
          During the IHF Youth Coaches Handball Education Week which took place as part of the 2023 IHF Education Weeks, coach Mark Lausen-Marcher presented a lecture about how the Faroe Islands are slowly emerging as a country to watch.
        </p>
        <Button variant="primary" className="read-more-btn">Read More</Button>
      </Container>
    </div>
  );
};

export default Hero;
