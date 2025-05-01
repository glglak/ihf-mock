import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaEye } from 'react-icons/fa';
import './MediaCentre.css';

const MediaCentre = () => {
  const mediaItems = [
    {
      id: 1,
      image: 'https://www.ihf.info/sites/default/files/styles/card_teaser/public/2025-03/medal_ceremony_5thmens_emerging.jpg',
      date: '16 Mar. 2025',
      title: 'Medal Ceremony | 5th IHF Men\'s Emerging Nations Championship | © IHF',
      type: 'gallery'
    },
    {
      id: 2,
      image: 'https://www.ihf.info/sites/default/files/styles/card_teaser/public/2025-03/bulgaria_gbr_5mens_emerging.jpg',
      date: '16 Mar. 2025',
      title: 'Bulgaria vs Great Britain | 5th IHF Men\'s Emerging Nations Championship | © IHF',
      type: 'gallery'
    },
    {
      id: 3,
      image: 'https://www.ihf.info/sites/default/files/styles/card_teaser/public/2025-03/nigeria_usa_5mens_emerging.jpg',
      date: '16 Mar. 2025',
      title: 'Nigeria vs USA | 5th IHF Men\'s Emerging Nations Championship | © IHF',
      type: 'gallery'
    },
    {
      id: 4,
      image: 'https://www.ihf.info/sites/default/files/styles/card_teaser/public/2025-03/paraguay_cyprus_5mens_emerging.jpg',
      date: '16 Mar. 2025',
      title: 'Paraguay vs Cyprus | 5th IHF Men\'s Emerging Nations Championship | © IHF',
      type: 'gallery'
    }
  ];

  const mediaItemWidth = {
    0: 50, // First item takes 50% width (large)
    1: 25, // Second item takes 25% width
    2: 25, // Third item takes 25% width
    3: 50  // Fourth item takes 50% width (if there are 4 items)
  };

  return (
    <section className="media-centre-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">MEDIA CENTRE</h2>
          <a href="/media-centre" className="view-all">
            SHOW ALL MEDIA CENTRE <FaArrowRight />
          </a>
        </div>

        <div className="media-grid">
          {mediaItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`media-item media-item-${index}`}
              style={{ width: `${mediaItemWidth[index]}%` }}
            >
              <div className="media-overlay"></div>
              <img src={item.image} alt={item.title} className="media-image" />
              <div className="media-content">
                <span className="media-date">{item.date}</span>
                <h3 className="media-title">{item.title}</h3>
                <a href={`/media/${item.id}`} className="view-gallery">
                  <FaEye /> View Gallery
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MediaCentre;
