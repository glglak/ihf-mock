import React from 'react';
import { Container } from 'react-bootstrap';
import { CompetitionsList } from '../../components/features/competitions';
import { MediaGrid } from '../../components/features/media';
import { EventsList } from '../../components/features/events';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section - would be a separate component in a real app */}
      <section className="hero-section">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">INTERNATIONAL HANDBALL FEDERATION</h1>
            <p className="hero-subtitle">The global governing body for handball</p>
          </div>
        </Container>
      </section>
      
      {/* Feature components */}
      <CompetitionsList />
      <MediaGrid />
      <EventsList />
    </div>
  );
};

export default Home;