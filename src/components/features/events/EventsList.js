import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './EventsList.css';
import Calendar from './Calendar';

const EventsList = () => {
  const events = [
    {
      type: 'EVENT',
      startDate: { day: '03', month: 'MAY' },
      endDate: { day: '04', month: 'MAY' },
      title: 'EHF FINALS WOMEN 2025',
      location: 'Austria'
    },
    {
      type: 'EVENT',
      startDate: { day: '05', month: 'MAY' },
      endDate: { day: '11', month: 'MAY' },
      title: 'MEN\'S NATIONAL TEAMS WEEK',
      location: 'Worldwide'
    },
    {
      type: 'COMPETITION',
      startDate: { day: '06', month: 'MAY' },
      endDate: { day: '10', month: 'MAY' },
      title: '2025/2026 WOMEN\'S IHF TROPHY AFRICA ZONE 5',
      location: 'Uganda'
    }
  ];

  return (
    <section className="upcoming-events">
      <Container>
        <h2 className="section-heading">UPCOMING EVENTS</h2>
        
        <Row>
          <Col md={9}>
            <div className="events-container">
              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className={`event-type ${event.type.toLowerCase()}`}>{event.type}</div>
                  <div className="event-dates">
                    <div className="date-container">
                      <span className="event-day">{event.startDate.day}</span>
                      <span className="event-month">{event.startDate.month}</span>
                    </div>
                    <div className="date-separator">/</div>
                    <div className="date-container">
                      <span className="event-day">{event.endDate.day}</span>
                      <span className="event-month">{event.endDate.month}</span>
                    </div>
                  </div>
                  <div className="event-title">{event.title}</div>
                  <div className="event-location">
                    <FaMapMarkerAlt /> {event.location}
                  </div>
                </div>
              ))}
            </div>
          </Col>
          
          <Col md={3}>
            <Calendar events={events} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventsList;