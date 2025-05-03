/**
 * API Service
 * Handles communication with the API
 */

class ApiService {
  /**
   * Get competitions data
   * 
   * @returns {Promise<Array>} List of competitions
   */
  static async getCompetitions() {
    // Mock data for development
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'Men\'s World Championship',
            image: 'https://via.placeholder.com/400x225?text=Men%27s+World+Championship',
            link: '/competitions/1'
          },
          {
            id: 2,
            title: 'Women\'s World Championship',
            image: 'https://via.placeholder.com/400x225?text=Women%27s+World+Championship',
            link: '/competitions/2'
          },
          {
            id: 3,
            title: 'IHF Men\'s Junior World Championship',
            image: 'https://via.placeholder.com/400x225?text=Men%27s+Junior',
            link: '/competitions/3'
          },
          {
            id: 4,
            title: 'IHF Women\'s Junior World Championship',
            image: 'https://via.placeholder.com/400x225?text=Women%27s+Junior',
            link: '/competitions/4'
          },
          {
            id: 5,
            title: 'IHF Men\'s Youth World Championship',
            image: 'https://via.placeholder.com/400x225?text=Men%27s+Youth',
            link: '/competitions/5'
          }
        ]);
      }, 1000);
    });
  }
  
  /**
   * Get media data
   * 
   * @returns {Promise<Array>} List of media items
   */
  static async getMedia() {
    // Mock data for development
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'World Championship Highlights 2025',
            image: 'https://via.placeholder.com/800x450?text=World+Championship',
            date: '28 Apr 2025',
            type: 'gallery'
          },
          {
            id: 2,
            title: 'Junior Championship Finals',
            image: 'https://via.placeholder.com/800x450?text=Junior+Championship',
            date: '25 Apr 2025',
            type: 'gallery'
          },
          {
            id: 3,
            title: 'Best Goals Compilation',
            image: 'https://via.placeholder.com/800x450?text=Best+Goals',
            date: '20 Apr 2025',
            type: 'video'
          },
          {
            id: 4,
            title: 'Training Session with National Team',
            image: 'https://via.placeholder.com/800x450?text=Training+Session',
            date: '15 Apr 2025',
            type: 'gallery'
          }
        ]);
      }, 1000);
    });
  }
}

export default ApiService;