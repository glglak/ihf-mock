import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok, FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/">
              <img src="https://www.ihf.info/sites/default/files/logo-espace-bleu-en.png" alt="IHF Logo" />
            </Link>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="/search" className="ms-3"><FaSearch /></a>
            <a href="/login" className="ms-3">
              <FaUser /> Login
            </a>
          </div>
        </Container>
      </div>

      <Navbar expand="lg" className="navigation">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              
              <NavDropdown title="ABOUT" id="about-dropdown">
                <NavDropdown.Item as={Link} to="/about/history">History</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/mission">Mission & Values</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/organisation">Organisation</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/federations">FEDERATIONS</Nav.Link>
              
              <Nav.Link as={Link} to="/competitions">COMPETITIONS</Nav.Link>
              
              <NavDropdown title="ANTI DOPING" id="anti-doping-dropdown">
                <NavDropdown.Item as={Link} to="/anti-doping/education">Education</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/anti-doping/testing">Testing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/anti-doping/prohibited-list">Prohibited List</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/statutes">STATUTES & REGULATIONS</Nav.Link>
              
              <Nav.Link as={Link} to="/marketing">MARKETING</Nav.Link>
              
              <NavDropdown title="MEDIA CENTRE" id="media-dropdown">
                <NavDropdown.Item as={Link} to="/media/news">News</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/media/photos">Photos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/media/videos">Videos</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="AWARDS" id="awards-dropdown">
                <NavDropdown.Item as={Link} to="/awards/player-of-the-year">Player of the Year</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/awards/team-of-the-year">Team of the Year</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="GAMES" id="games-dropdown">
                <NavDropdown.Item as={Link} to="/games/world-championship">World Championship</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/games/olympics">Olympics</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
