/**
 * Events Service
 * Handles all events-related data operations
 */

import { http, EVENTS } from '../api';

// Mock data for development
const mockEvents = [
  {
    id: 1,
    type: 'EVENT',
    startDate: { day: '03', month: 'MAY' },
    endDate: { day: '04', month: 'MAY' },
    title: 'EHF FINALS WOMEN 2025',
    location: 'Austria'
  },
  {
    id: 2,
    type: 'EVENT',
    startDate: { day: '05', month: 'MAY' },
    endDate: { day: '11', month: 'MAY' },
    title: 'MEN\'S NATIONAL TEAMS WEEK',
    location: 'Worldwide'
  },
  {
    id: 3,
    type: 'COMPETITION',
    startDate: { day: '06', month: 'MAY' },
    endDate: { day: '10', month: 'MAY' },
    title: '2025/2026 WOMEN\'S IHF TROPHY AFRICA ZONE 5',
    location: 'Uganda'
  },
  {
    id: 4,
    type: 'EVENT',
    startDate: { day: '12', month: 'MAY' },
    endDate: { day: '15', month: 'MAY' },
    title: 'HANDBALL INNOVATION SUMMIT',
    location: 'Switzerland'
  },
  {
    id: 5,
    type: 'COMPETITION',
    startDate: { day: '18', month: 'MAY' },
    endDate: { day: '25', month: 'MAY' },
    title: 'HANDBALL CHAMPIONS LEAGUE FINAL FOUR',
    location: 'Germany'
  }
];

/**
 * Get all events
 * 
 * @returns {Promise<Array>} List of events
 */
export const getEvents = async () => {
  // For development/testing, return mock data
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockEvents), 500);
    });
  }
  
  // Real API call
  return http.get(EVENTS.LIST);
};

/**
 * Get upcoming events
 * 
 * @param {number} limit - Number of events to return
 * @returns {Promise<Array>} List of upcoming events
 */
export const getUpcomingEvents = async (limit = 3) => {
  // For development/testing, return mock data
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockEvents.slice(0, limit)), 500);
    });
  }
  
  // Real API call
  return http.get(`${EVENTS.UPCOMING}?limit=${limit}`);
};

/**
 * Get past events
 * 
 * @param {number} limit - Number of events to return
 * @returns {Promise<Array>} List of past events
 */
export const getPastEvents = async (limit = 5) => {
  // For development/testing, return mock data
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    return new Promise(resolve => {
      // Just return reversed mock events for demo purposes
      setTimeout(() => resolve([...mockEvents].reverse().slice(0, limit)), 500);
    });
  }
  
  // Real API call
  return http.get(`${EVENTS.PAST}?limit=${limit}`);
};

/**
 * Get event details by ID
 * 
 * @param {number|string} id - Event ID
 * @returns {Promise<Object>} Event details
 */
export const getEventById = async (id) => {
  // For development/testing, return mock data
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const event = mockEvents.find(e => e.id === parseInt(id));
        if (event) {
          resolve({
            ...event,
            description: 'Detailed description of this event.',
            venueDetails: {
              name: 'Main Venue',
              address: '123 Venue Street, City',
              capacity: 15000
            },
            registrationUrl: 'https://example.com/register',
            ticketsUrl: 'https://example.com/tickets',
            organizer: 'International Handball Federation',
            contactEmail: 'events@example.com'
          });
        } else {
          reject(new Error('Event not found'));
        }
      }, 500);
    });
  }
  
  // Real API call
  return http.get(EVENTS.DETAILS(id));
};

/**
 * Get calendar events for a specific month
 * 
 * @param {number} year - Calendar year
 * @param {number} month - Calendar month (0-11)
 * @returns {Promise<Array>} List of events for the calendar
 */
export const getCalendarEvents = async (year, month) => {
  // For development/testing, return mock data
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    return new Promise(resolve => {
      // Filter events for the specified month (for demo)
      const monthName = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
      ][month];
      
      const filteredEvents = mockEvents.filter(event => 
        event.startDate.month === monthName
      );
      
      setTimeout(() => resolve(filteredEvents), 500);
    });
  }
  
  // Real API call
  return http.get(`${EVENTS.CALENDAR}?year=${year}&month=${month + 1}`);
};