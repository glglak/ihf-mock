import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const NewsSection = () => {
  // Dummy news data
  const newsItems = [
    {
      id: 1,
      date: 'April 28, 2025',
      title: 'Brazil triumph at home and celebrate 20th South and Central American Women's Championship title',
      image: 'https://www.ihf.info/sites/default/files/styles/card_teaser/public/2022-11/Brazil%20trophy%20article.png'
    },
    {
      id: 2,
      date: 'April 27, 2025',
      title: 'Colombia earn Pan American Games qualification by reaching the final of the South and Central American Championship',
      image: 'https://www.ihf.info/sites/default/files/styles/card_teaser/public/2022-11/Colombia%20celebrate.jpg'
    },
    {
      id: 3,
      date: 'April 25, 2025',
      title: 'Thailand men's team start preparation ahead of Asian Championship in January',
      image: 'https://www.ihf.info/sites/default/files/styles/card_teaser/public/2022-11/Thailand%20MNT%20train%20ahead%20of%20Asian%20Championship.jpg'
    },
    {
      id: 4,
      date: 'April 23, 2025',
      title: 'Switzerland's Nikola Portner honoured for saving life of German handball star',
      image: 'https://www.ihf.info/sites/default/files/styles/card_teaser/public/2023-02/Nikola%20Portner%20honored%20for%20saving%20life.jpg'
    }
  ];

  return (
    <section className="latest-news">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">LATEST NEWS</h2>
          <div className="go-to-news">
            <Link to="/news">GO TO NEWS <FaArrowRight /></Link>
          </div>
        </div>
        
        <Row>
          {newsItems.map(item => (
            <Col lg={3} md={6} sm={12} key={item.id} className="mb-4">
              <Card className="news-card h-100">
                <Card.Img variant="top" src={item.image} className="news-image" />
                <Card.Body>
                  <div className="news-date">{item.date}</div>
                  <Card.Title className="news-title">{item.title}</Card.Title>
                  <Link to={`/news/${item.id}`} className="btn btn-link p-0">Read more</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsSection;
