import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './NewsSection.css';
import ApiService from '../services/api.service';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const itemsPerPage = 4;
  
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

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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

  const displayedNews = newsItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
        
        <div className="news-items">
          {totalPages > 1 && (
            <button 
              className="news-nav prev" 
              onClick={prevPage}
            >
              <FaChevronLeft />
            </button>
          )}
          
          <Row>
            {displayedNews.map((item) => (
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
          
          {totalPages > 1 && (
            <button 
              className="news-nav next" 
              onClick={nextPage}
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;