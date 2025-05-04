/**
 * API Service
 * Handles communication with the API
 */

class ApiService {
  /**
   * Get slider data
   * 
   * @returns {Promise<Array>} List of slider items
   */
  static async getSliderData() {
    // Mock data for development with full URLs
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'GOODBYE, PLAYER BELLA! WELCOME, COACH GULLDEN: "HANDBALL HAS GIVEN ME EVERYTHING"',
            description: 'Once in a while, a changing of the guard comes in any sport.',
            image: 'https://www.ihf.info/sites/default/files/styles/news_details/public/2025-04/Bella1440.jpg?itok=WMLGeDSy'
          },
          {
            id: 2,
            title: 'MEN\'S 2025 WORLD CHAMPIONSHIP PREPARATION UNDERWAY',
            description: 'The organizing committee has announced venue details for the upcoming championship.',
            image: 'https://www.ihf.info/sites/default/files/styles/news_details/public/2025-04/Kuzma1440.png?itok=JBW2Xw4h'
          },
          {
            id: 3, 
            title: 'IHF WOMEN\'S YOUTH CHAMPIONSHIP QUALIFIERS BEGIN',
            description: 'The next generation of handball stars take to the court in regional qualifiers.',
            image: 'https://www.ihf.info/sites/default/files/styles/news_details/public/2025-04/Mittun1440.png?itok=jiEfG33t'
          },
          {
            id: 4,
            title: 'BEACH HANDBALL WORLD CHAMPIONSHIPS SET FOR SUMMER 2025',
            description: 'Preparations are underway for the biggest beach handball event of the year.',
            image: 'https://www.ihf.info/sites/default/files/styles/news_details/public/2025-04/Simon1440.jpg?itok=uQc4UjCB'
          }
        ]);
      }, 800);
    });
  }

  /**
   * Get news data
   * 
   * @returns {Promise<Array>} List of news items
   */
  static async getNews() {
    // Mock data for development with full URLs
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'The World Games: 100 Days to Go until Chengdu 2025',
            date: 'April 29, 2025',
            image: 'https://www.ihf.info/sites/default/files/styles/news_listing_265_150/public/2025-04/FARSTS330.png?itok=uyOF0P3D',
            summary: 'With 100 days to go until the World Games in Chengdu, preparations continue at an impressive pace.'
          },
          {
            id: 2,
            title: 'Twists and turns deliver four fantastic semi-finalists in the EHF Champions League',
            date: 'May 02, 2025',
            image: 'https://www.ihf.info/sites/default/files/styles/news_listing_265_150/public/2025-04/Romero330.png?itok=xz8z1EpM',
            summary: 'The EHF Champions League semifinals are set after thrilling quarterfinal matches.'
          },
          {
            id: 3,
            title: 'Lieder announces retirement: "Those memories are worth more than any medal"',
            date: 'May 01, 2025',
            image: 'https://www.ihf.info/sites/default/files/styles/news_listing_265_150/public/2025-04/Flensb330.png?itok=3yWsY2Fg',
            summary: 'Legendary handball player Janna Lieder has announced her retirement from professional handball.'
          },
          {
            id: 4,
            title: 'Surprise, respect and achievement – Faroese handball celebrated by stamp set',
            date: 'May 01, 2025',
            image: 'https://www.ihf.info/sites/default/files/styles/news_listing_265_150/public/2025-04/TWC330.png?itok=hRU2wupr',
            summary: 'The Faroe Islands have honored their handball heritage with a special commemorative stamp collection.'
          }
        ]);
      }, 1000);
    });
  }

  /**
   * Get competitions data
   * 
   * @returns {Promise<Array>} List of competitions
   */
  static async getCompetitions() {
    // Mock data for development with full URLs
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'IHF Trophy (U17) Youth Women 2025',
            image: 'https://www.ihf.info/sites/default/files/2025-02/IHF%20trophy%20Youth_logo_380x310.png',
            link: '/competitions/1'
          },
          {
            id: 2,
            title: 'IHF Trophy (U19) Junior Women 2025',
            image: 'https://www.ihf.info/sites/default/files/2025-02/IHF%20trophy%20Junior_logo_380x310.png',
            link: '/competitions/2'
          },
          {
            id: 3,
            title: '11th IHF Men\'s Youth (U19) World Championship 2025 Egypt',
            image: 'https://www.ihf.info/sites/default/files/2025-04/U19.png',
            link: '/competitions/3'
          },
          {
            id: 4,
            title: '25th IHF Men\'s Junior World Championship 2025 Poland',
            image: 'https://www.ihf.info/sites/default/files/2025-01/Poland2025.png',
            link: '/competitions/4'
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
    // Mock data for development with full URLs
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'World Championship Highlights 2025',
            image: 'https://www.ihf.info/sites/default/files/styles/gallery_big_image/public/2025-03/medalceremonycover.png?itok=8-_0vZfi',
            date: '28 Apr 2025',
            type: 'gallery'
          },
          {
            id: 2,
            title: 'Junior Championship Finals',
            image: 'https://www.ihf.info/sites/default/files/styles/gallery_small_image/public/2025-03/BULvsGBRcover.png?itok=rjzLfRwC',
            date: '25 Apr 2025',
            type: 'gallery'
          },
          {
            id: 3,
            title: 'Best Goals Compilation',
            image: 'https://www.ihf.info/sites/default/files/styles/gallery_small_image/public/2025-03/NGRvsUSAcover.png?itok=lH2e2B0v',
            date: '20 Apr 2025',
            type: 'video'
          },
          {
            id: 4,
            title: 'Training Session with National Team',
            image: 'https://www.ihf.info/sites/default/files/styles/gallery_medium_image/public/2025-03/PARvsCYPcover.png?itok=vkWergoW',
            date: '15 Apr 2025',
            type: 'gallery'
          }
        ]);
      }, 1000);
    });
  }

  /**
   * Get banner URLs
   * 
   * @returns {Promise<Object>} Object with banner URLs
   */
  static async getBannerUrls() {
    // Mock data for development with full URLs
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          antiDoping: 'https://www.ihf.info/themes/ihf_theme/assets/img/Competition-manipulation-banner.jpg',
          upcomingEvents: 'https://www.ihf.info/themes/ihf_theme/assets/img/upcoming-events.jpg'
        });
      }, 500);
    });
  }

  /**
   * Get partner logos
   * 
   * @returns {Promise<Array>} List of partner logos
   */
  static async getPartnerLogos() {
    // Mock data for development with full URLs
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Gerflor',
            logo: 'https://www.ihf.info/themes/ihf_theme/assets/img/partners/3-new.jpg',
            url: 'https://www.gerflor.com'
          },
          {
            id: 2,
            name: 'Hummel',
            logo: 'https://www.ihf.info/themes/ihf_theme/assets/img/partners/5-new.jpg',
            url: 'https://www.hummel.net'
          },
          {
            id: 3,
            name: 'Sportfive',
            logo: 'https://www.ihf.info/themes/ihf_theme/assets/img/partners/2-new.jpg?193',
            url: 'https://www.sportfive.com'
          },
          {
            id: 4,
            name: 'Molten',
            logo: 'https://www.ihf.info/themes/ihf_theme/assets/img/partners/1m-new.jpg',
            url: 'https://www.molten.com'
          }
        ]);
      }, 800);
    });
  }

  /**
   * Get world map data
   * 
   * @returns {Promise<Object>} Object with world map data
   */
  static async getWorldMapData() {
    // Mock data for development with full URLs
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          backgroundImage1: 'https://www.ihf.info/sites/default/files/presidents/mapBg-1.jpg',
          backgroundImage2: 'https://www.ihf.info/sites/default/files/presidents/mapBg-2.jpg',
          regions: [
            // Regions data would go here
          ]
        });
      }, 600);
    });
  }
}

export default ApiService;