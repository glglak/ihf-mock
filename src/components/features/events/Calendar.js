import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Calendar.css';

const Calendar = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
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
  );
};

export default Calendar;