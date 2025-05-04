import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <Container>
        <Row className="footer-top">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <div className="footer-logos">
              <img 
                src="https://www.ihf.info/themes/ihf_theme/assets/img/small-logo.png?193" 
                alt="IHF Small Logo" 
                className="footer-logo-small"
                crossOrigin="anonymous"
              />
              <img 
                src="https://www.ihf.info/themes/ihf_theme/assets/img/footer-logo.png" 
                alt="IHF Footer Logo" 
                className="footer-logo-main"
                crossOrigin="anonymous"
              />
            </div>
            <p className="footer-text">
              The International Handball Federation (IHF) is the administrative and controlling body for handball and beach handball worldwide.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/competitions">Competitions</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/media-centre">Media Centre</Link></li>
              <li><Link to="/news">News</Link></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-links">
              <li><Link to="/resources/rules-regulations">Rules & Regulations</Link></li>
              <li><Link to="/resources/anti-doping">Anti-Doping</Link></li>
              <li><Link to="/resources/development">Development</Link></li>
              <li><Link to="/resources/education">Education</Link></li>
              <li><Link to="/resources/downloads">Downloads</Link></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h5 className="footer-heading">Contact Us</h5>
            <address className="footer-contact">
              <p>International Handball Federation</p>
              <p>Peter Merian-Strasse 23</p>
              <p>P.O. Box 4040 Basel, Switzerland</p>
              <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
              <p>Phone: +41 61 228 90 40</p>
            </address>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row className="footer-bottom">
          <Col md={6} className="copyright">
            &copy; {currentYear} International Handball Federation. All rights reserved.
          </Col>
          <Col md={6} className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookies">Cookies</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;