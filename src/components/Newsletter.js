import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Newsletter.css';
import ApiService from '../services/api.service';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Call the API service
      await ApiService.subscribeNewsletter(email);
      
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Error subscribing to newsletter:', err);
      setError('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="newsletter-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} className="d-flex align-items-center footer-logos">
            <div className="logos-container">
              <img
                src="https://www.ihf.info/themes/ihf_theme/assets/img/small-logo.png?792"
                alt="IHF Logo"
                className="ihf-logo"
              />
              <img
                src="https://www.ihf.info/themes/ihf_theme/assets/img/footer-logo.png"
                alt="IHF 75 Years"
                className="ihf-anniversary-logo"
              />
            </div>
            <div className="copyright">
              <p>All rights reserved © 2025 IHF</p>
              <div className="footer-links">
                <a href="/sitemap">Sitemap</a> | <a href="/privacy">Privacy Statement</a> | <a href="/terms">Terms of Use</a> | <a href="/contact">Contact Us</a> | <a href="/mobile-apps">Mobile Apps</a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="newsletter-content">
              <h3 className="newsletter-title">SIGN UP FOR OUR NEWSLETTER</h3>
              <p className="newsletter-subtitle">Submit your email address below to get our latest news.</p>
              
              <Form onSubmit={handleSubmit} className="newsletter-form">
                <div className="form-group">
                  <Form.Control
                    type="email"
                    placeholder="Enter your mail here..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input"
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit" 
                    className="newsletter-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </Button>
                </div>
                
                {isSubmitted && (
                  <div className="success-message">Thank you for subscribing!</div>
                )}
                
                {error && (
                  <div className="error-message">{error}</div>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;