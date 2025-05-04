import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok, FaSearch, FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="top-header">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="logo-container">
            <Link to="/">
              <img 
                src="https://www.ihf.info/themes/ihf_theme/assets/img/logo.png?739"
                alt="International Handball Federation"
                className="header-logo"
              />
            </Link>
          </div>
          
          <div className="social-header-links">
            <a href="https://facebook.com/ihf" className="social-icon"><FaFacebook /></a>
            <a href="https://twitter.com/ihf" className="social-icon"><FaTwitter /></a>
            <a href="https://youtube.com/ihf" className="social-icon"><FaYoutube /></a>
            <a href="https://instagram.com/ihf" className="social-icon"><FaInstagram /></a>
            <a href="https://tiktok.com/@ihf" className="social-icon"><FaTiktok /></a>
            <div className="login-container">
              <Link to="/login" className="login-link">
                <FaUser className="login-icon" />
                <span>Login</span>
              </Link>
            </div>
            <Link to="/search" className="search-icon-link">
              <FaSearch />
            </Link>
          </div>
        </Container>
      </div>
      
      <Navbar expand="lg" className="main-navbar" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mx-auto navigation-links">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              
              <NavDropdown title="ABOUT" id="about-dropdown">
                <NavDropdown.Item as={Link} to="/about/history">History</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/mission">Mission</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/federations">FEDERATIONS</Nav.Link>
              <Nav.Link as={Link} to="/competitions">COMPETITIONS</Nav.Link>
              
              <NavDropdown title="ANTI DOPING" id="anti-doping-dropdown">
                <NavDropdown.Item as={Link} to="/anti-doping/policy">Policy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/anti-doping/education">Education</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/statutes">STATUTES & REGULATIONS</Nav.Link>
              <Nav.Link as={Link} to="/marketing">MARKETING</Nav.Link>
              
              <NavDropdown title="MEDIA CENTRE" id="media-centre-dropdown">
                <NavDropdown.Item as={Link} to="/media/gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/media/videos">Videos</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="AWARDS" id="awards-dropdown">
                <NavDropdown.Item as={Link} to="/awards/world-players">World Players</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/awards/hall-of-fame">Hall of Fame</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="GAMES" id="games-dropdown">
                <NavDropdown.Item as={Link} to="/games/world-games">World Games</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/games/olympic-games">Olympic Games</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;