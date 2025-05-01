import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Show cookie banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h4 className="cookie-title">WE USE COOKIES</h4>
            <p className="cookie-text">
              By continuing to browse ihf.info, you agree to our <a href="/terms-of-use">terms of use</a>, <a href="/privacy-policy">privacy policy</a> and the use of cookies. For more information, please review our <a href="/cookie-policy">cookie policy</a>.
            </p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <Button 
              variant="primary" 
              className="accept-btn me-2"
              onClick={acceptCookies}
            >
              <i className="fa fa-check me-2"></i> I Accept
            </Button>
            <Button 
              variant="outline-light" 
              className="close-btn"
              onClick={closeBanner}
            >
              Close
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CookieConsent;
