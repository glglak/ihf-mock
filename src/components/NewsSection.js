import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ApiService from '../services/api.service';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const data = await ApiService.getNews();
        setNewsItems(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <section className="latest-news">
        <Container>
          <h2 className="section-title">LATEST NEWS</h2>
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
      <section className="latest-news">
        <Container>
          <h2 className="section-title">LATEST NEWS</h2>
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </Container>
      </section>
    );
  }

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
                <Card.Img 
                  variant="top" 
                  src={item.image} 
                  className="news-image" 
                  crossOrigin="anonymous"
                />
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