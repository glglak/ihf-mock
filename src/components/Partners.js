import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Partners.css';
import ApiService from '../services/api.service';

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setIsLoading(true);
        const data = await ApiService.getPartners();
        setPartners(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching partners:', err);
        setError('Failed to load partners. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (isLoading) {
    return (
      <section className="partners-section">
        <Container>
          <div className="partners-header">
            <h3 className="partners-title">IHF Partners</h3>
            <p className="partners-subtitle">Thanks to our great supporters</p>
          </div>
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="partners-section">
        <Container>
          <div className="partners-header">
            <h3 className="partners-title">IHF Partners</h3>
            <p className="partners-subtitle">Thanks to our great supporters</p>
          </div>
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="partners-section">
      <Container>
        <div className="partners-header">
          <h3 className="partners-title">IHF Partners</h3>
          <p className="partners-subtitle">Thanks to our great supporters</p>
        </div>
        
        <div className="partners-logos">
          <Row className="justify-content-center">
            {partners.map((partner) => (
              <Col key={partner.id} xs={6} sm={3} className="partner-col">
                <a href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-link">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="partner-logo" 
                  />
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
