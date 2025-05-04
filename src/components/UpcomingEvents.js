import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
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
    },
    {
      type: 'EVENT',
      startDate: { day: '06', month: 'MAY' },
      endDate: { day: '15', month: 'MAY' },
      title: '10TH ASIAN MEN\'S AND WOMEN\'S BEACH HANDBALL CHAMPIONSHIP',
      location: 'Oman'
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
    const calendarDays = [];
    
    // Add days of previous month
    const daysInPrevMonth = getDaysInMonth(currentMonth === 0 ? 11 : currentMonth - 1, currentMonth === 0 ? currentYear - 1 : currentYear);
    for (let i = firstDay - 1; i >= 0; i--) {
      calendarDays.push(
        <div key={`prev-${daysInPrevMonth - i}`} className="calendar-day disabled">
          {daysInPrevMonth - i}
        </div>
      );
    }
    
    // Add days of current month
    const today = new Date();
    const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;
    
    for (let i = 1; i <= daysInMonth; i++) {
      // Check if this day has an event
      const hasEvent = events.some(event => {
        const startDay = parseInt(event.startDate.day);
        return startDay === i && months[currentMonth].toUpperCase().slice(0, 3) === event.startDate.month;
      });
      
      calendarDays.push(
        <div 
          key={`day-${i}`} 
          className={`calendar-day ${hasEvent ? 'has-event' : ''} ${isCurrentMonth && today.getDate() === i ? 'today' : ''}`}
        >
          {i}
        </div>
      );
    }
    
    // Add days of next month
    const daysNeeded = 42 - calendarDays.length; // Always show 6 weeks
    for (let i = 1; i <= daysNeeded; i++) {
      calendarDays.push(
        <div key={`next-${i}`} className="calendar-day disabled">
          {i}
        </div>
      );
    }
    
    return calendarDays;
  };

  return (
    <section className="upcoming-events-section">
      {/* Add background image with crossOrigin */}
      <img 
        src="https://www.ihf.info/themes/ihf_theme/assets/img/upcoming-events.jpg" 
        alt="Upcoming events background" 
        className="background-image"
        crossOrigin="anonymous"
      />
      <Container>
        <div className="section-header">
          <h2 className="section-title">UPCOMING EVENTS</h2>
          <a href="/events" className="full-events-link">
            FULL EVENTS <FaArrowRight />
          </a>
        </div>
        
        <Row>
          <Col lg={8} md={7}>
            <div className="events-container">
              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className={`event-badge ${event.type.toLowerCase()}`}>
                    {event.type}
                  </div>
                  <div className="event-date">
                    <div className="date-part">
                      <span className="big-number">{event.startDate.day}</span>
                      <span className="month">{event.startDate.month}.</span>
                    </div>
                    <span className="date-separator">/</span>
                    <div className="date-part">
                      <span className="big-number">{event.endDate.day}</span>
                      <span className="month">{event.endDate.month}.</span>
                    </div>
                  </div>
                  <div className="event-details">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-location">
                      <FaMapMarkerAlt /> {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          
          <Col lg={4} md={5}>
            <div className="calendar-widget">
              <div className="calendar-header">
                <button className="month-nav prev" onClick={prevMonth}>
                  <FaChevronLeft />
                </button>
                <div className="current-month">
                  {months[currentMonth]} {currentYear}
                </div>
                <button className="month-nav next" onClick={nextMonth}>
                  <FaChevronRight />
                </button>
              </div>
              
              <div className="weekdays">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>
              
              <div className="calendar-grid">
                {renderCalendar()}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UpcomingEvents;