import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './NewsSection.css';
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
          <div className="section-header">
            <h2 className="section-title">LATEST NEWS</h2>
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
      <section className="latest-news">
        <Container>
          <div className="section-header">
            <h2 className="section-title">LATEST NEWS</h2>
          </div>
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
        <div className="section-header">
          <h2 className="section-title">LATEST NEWS</h2>
          <div className="go-to-news">
            <Link to="/news" className="view-all">
              GO TO NEWS <FaArrowRight />
            </Link>
          </div>
        </div>
        
        <Row className="news-items">
          {newsItems.map((item) => (
            <Col key={item.id} lg={3} md={6} className="news-item-col">
              <Card className="news-card">
                <div className="news-image-container">
                  <Link to={`/news/${item.id}`}>
                    <Card.Img 
                      variant="top" 
                      src={item.image} 
                      className="news-image" 
                    />
                  </Link>
                </div>
                <Card.Body>
                  <div className="news-date">{item.date}</div>
                  <Card.Title className="news-title">
                    <Link to={`/news/${item.id}`} className="news-title-link">
                      {item.title}
                    </Link>
                  </Card.Title>
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