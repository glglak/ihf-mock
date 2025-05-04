import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok, FaSearch, FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <Navbar expand="lg" className="navbar-light bg-white">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className="logo-container">
              <img 
                src="https://www.ihf.info/themes/ihf_theme/assets/img/logo.png?739"
                alt="IHF Logo"
                className="header-logo"
                crossOrigin="anonymous"
              />
            </div>
          </Navbar.Brand>
          
          <div className="social-header-links">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTiktok /></a>
            <div className="header-right-icons">
              <a href="#" className="login-icon"><FaUser /></a>
              <a href="#" className="search-icon"><FaSearch /></a>
            </div>
          </div>
          
          <Navbar.Toggle aria-controls="main-navbar" />
          
          <Navbar.Collapse id="main-navbar" className="main-navigation">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="nav-item">HOME</Nav.Link>
              
              <NavDropdown title="ABOUT" id="about-dropdown" className="nav-item">
                <NavDropdown.Item as={Link} to="/about/history">History</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/mission">Mission</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/federations" className="nav-item">FEDERATIONS</Nav.Link>
              <Nav.Link as={Link} to="/competitions" className="nav-item">COMPETITIONS</Nav.Link>
              
              <NavDropdown title="ANTI DOPING" id="anti-doping-dropdown" className="nav-item">
                <NavDropdown.Item as={Link} to="/anti-doping/policy">Policy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/anti-doping/education">Education</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/statutes" className="nav-item">STATUTES & REGULATIONS</Nav.Link>
              <Nav.Link as={Link} to="/marketing" className="nav-item">MARKETING</Nav.Link>
              
              <NavDropdown title="MEDIA CENTRE" id="media-centre-dropdown" className="nav-item">
                <NavDropdown.Item as={Link} to="/media/gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/media/videos">Videos</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="AWARDS" id="awards-dropdown" className="nav-item">
                <NavDropdown.Item as={Link} to="/awards/world-players">World Players</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/awards/hall-of-fame">Hall of Fame</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="GAMES" id="games-dropdown" className="nav-item">
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