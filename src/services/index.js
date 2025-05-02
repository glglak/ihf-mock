/**
 * Services module
 * Main export point for all services
 */

// Export API-related services
export * from './api';

// Export data-related services
export * from './data';

// Import specific services for direct export
import { http, endpoints } from './api';
import { competitionsService, mediaService, eventsService } from './data';

// Export specific services
export {
  http,
  endpoints,
  competitionsService,
  mediaService,
  eventsService
};