import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to subscribe
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  
  return (
    <section className="newsletter-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} className="d-flex align-items-center footer-logo">
            <img
              src="https://www.ihf.info/themes/ihf_theme/assets/img/logo-blue.svg"
              alt="IHF Logo"
              className="ihf-logo"
            />
            <img
              src="https://www.ihf.info/themes/ihf_theme/assets/img/ihf-75.svg"
              alt="IHF 75 Years"
              className="ihf-anniversary-logo"
            />
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
                  />
                  <Button type="submit" className="newsletter-button">Send</Button>
                </div>
                {isSubmitted && (
                  <div className="success-message">Thank you for subscribing!</div>
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
