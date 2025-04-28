import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} sm={6} className="footer-links mb-4">
            <h5>About IHF</h5>
            <ul>
              <li><Link to="/about/history">History</Link></li>
              <li><Link to="/about/mission">Mission & Values</Link></li>
              <li><Link to="/about/organisation">Organisation</Link></li>
              <li><Link to="/about/council">Council</Link></li>
              <li><Link to="/about/commissions">Commissions</Link></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6} className="footer-links mb-4">
            <h5>Competitions</h5>
            <ul>
              <li><Link to="/competitions/world-championships">World Championships</Link></li>
              <li><Link to="/competitions/olympics">Olympic Games</Link></li>
              <li><Link to="/competitions/beach-handball">Beach Handball</Link></li>
              <li><Link to="/competitions/world-cup">World Cup</Link></li>
              <li><Link to="/competitions/super-globe">Super Globe</Link></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6} className="footer-links mb-4">
            <h5>Media Centre</h5>
            <ul>
              <li><Link to="/media/news">News</Link></li>
              <li><Link to="/media/photos">Photos</Link></li>
              <li><Link to="/media/videos">Videos</Link></li>
              <li><Link to="/media/press-releases">Press Releases</Link></li>
              <li><Link to="/media/publications">Publications</Link></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6} className="footer-links mb-4">
            <h5>Connect with Us</h5>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
            </ul>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} International Handball Federation. All Rights Reserved.</p>
          <div className="mt-2">
            <Link to="/privacy-policy" className="me-3">Privacy Policy</Link>
            <Link to="/terms-of-use" className="me-3">Terms of Use</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
