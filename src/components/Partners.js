import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Gerflor',
      logo: 'https://www.ihf.info/sites/default/files/styles/sponsor_logo_large/public/2022-03/Gerflor%20white%20background.png',
      link: 'https://www.gerflor.com/'
    },
    {
      id: 2,
      name: 'Hummel',
      logo: 'https://www.ihf.info/sites/default/files/styles/sponsor_logo_large/public/2022-03/hummel%20white%20background.png',
      link: 'https://www.hummel.net/'
    },
    {
      id: 3,
      name: 'Sportfive',
      logo: 'https://www.ihf.info/sites/default/files/styles/sponsor_logo_large/public/2022-03/SPORTFIVE_RGB_BLACK.png',
      link: 'https://sportfive.com/'
    },
    {
      id: 4,
      name: 'Molten',
      logo: 'https://www.ihf.info/sites/default/files/styles/sponsor_logo_large/public/2022-03/Molten%20Logo%20%28jpg%29.png',
      link: 'https://www.molten.co.jp/en/'
    }
  ];

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
