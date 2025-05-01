import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

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

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Generate calendar days for the current month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    
    const daysArray = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      // Check if this day has an event
      const hasEvent = events.some(event => {
        const startDay = parseInt(event.startDate.day);
        return startDay === i && months[currentMonth].toUpperCase().slice(0, 3) === event.startDate.month;
      });
      
      daysArray.push(
        <div 
          key={`day-${i}`} 
          className={`calendar-day ${hasEvent ? 'has-event' : ''} ${new Date().getDate() === i && new Date().getMonth() === currentMonth && new Date().getFullYear() === currentYear ? 'today' : ''}`}
        >
          {i}
        </div>
      );
    }
    
    return daysArray;
  };

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
            <div className="calendar">
              <div className="calendar-header">
                <button className="calendar-nav-btn" onClick={prevMonth}>
                  <FaChevronLeft />
                </button>
                <div className="calendar-title">
                  {months[currentMonth]} {currentYear}
                </div>
                <button className="calendar-nav-btn" onClick={nextMonth}>
                  <FaChevronRight />
                </button>
              </div>
              
              <div className="calendar-weekdays">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>
              
              <div className="calendar-days">
                {renderCalendar()}
              </div>
              
              <div className="full-events-link">
                <a href="/events">FULL EVENTS</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UpcomingEvents;
