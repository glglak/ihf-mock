import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <Navbar expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img 
              src="https://via.placeholder.com/150x60?text=IHF+Logo"
              alt="IHF Logo"
              className="header-logo"
            />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="main-navbar" />
          
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              
              <NavDropdown title="Competitions" id="competitions-dropdown">
                <NavDropdown.Item as={Link} to="/competitions/mens-world-championship">
                  Men's World Championship
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/competitions/womens-world-championship">
                  Women's World Championship
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/competitions/junior-championships">
                  Junior Championships
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/competitions/youth-championships">
                  Youth Championships
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/competitions/all">
                  All Competitions
                </NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} to="/media-centre">Media Centre</Nav.Link>
              <Nav.Link as={Link} to="/news">News</Nav.Link>
              <Nav.Link as={Link} to="/about">About IHF</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;