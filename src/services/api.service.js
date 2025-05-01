/**
 * Mock API Service
 * This service simulates API calls to a backend server.
 * In a real application, these functions would make actual HTTP requests.
 */

// Mock data for the slider
const sliderData = [
  {
    id: 1,
    title: "THE RECIPE FOR A HISTORIC FEATURE: MITTÚN'S EXPERIENCE AS THE FAROE ISLANDS QUALIFY FOR THE FIRST SENIOR WORLD CHAMPIONSHIP",
    description: "During the IHF Youth Coaches Handball Education Week which took place as part of the 2023 IHF Education Weeks, coach Mark Lausen-Marcher presented a lecture about how the Faroe Islands are slowly emerging as a country to watch.",
    image: "https://www.ihf.info/sites/default/files/styles/news_details/public/2025-04/Mittun1440.png?itok=jiEfG33t"
  },
  {
    id: 2,
    title: "WOMEN'S WORLD CHAMPIONSHIP 2023 DRAW RESULTS",
    description: "The IHF Women's World Championship 2023 draw has taken place in Copenhagen, Denmark. 32 teams will compete from November 29 to December 17 across Denmark, Norway, and Sweden.",
    image: "https://www.ihf.info/sites/default/files/styles/news_details/public/2025-04/Simon1440.jpg?itok=uQc4UjCB"
  },
  {
    id: 3,
    title: "EGYPT CROWNED CHAMPIONS AT THE 2023 MEN'S U21 WORLD CHAMPIONSHIP",
    description: "Egypt secured their first-ever IHF Men's U21 World Championship title after defeating Germany in a thrilling final match, marking a historic achievement for African handball.",
    image: "https://www.ihf.info/sites/default/files/styles/large_desktop_header_image/public/2023-07/egypt%20u21%20champions%20banner.jpg"
  }
];

// Mock data for upcoming events
const eventsData = [
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
  }
];

// Mock data for news items
const newsData = [
  {
    id: 1,
    date: 'April 28, 2025',
    title: "Brazil triumph at home and celebrate 20th South and Central American Women's Championship title",
    image: 'https://www.ihf.info/sites/default/files/styles/news_listing_265_150/public/2025-04/Lieder330.jpg?itok=pEC-LJfE',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  },
  {
    id: 2,
    date: 'April 27, 2025',
    title: "Colombia earn Pan American Games qualification by reaching the final of the South and Central American Championship",
    image: 'https://www.ihf.info/sites/default/files/styles/news_listing_265_150/public/2025-04/FARSTS330.png?itok=uyOF0P3D',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  },
  {
    id: 3,
    date: 'April 25, 2025',
    title: "Thailand men's team start preparation ahead of Asian Championship in January",
    image: 'https://www.ihf.info/sites/default/files/styles/news_listing_265_150/public/2025-04/Romero330.png?itok=xz8z1EpM',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  },
  {
    id: 4,
    date: 'April 23, 2025',
    title: "Switzerland's Nikola Portner honoured for saving life of German handball star",
    image: 'https://www.ihf.info/sites/default/files/styles/news_listing_265_150/public/2025-04/Romero330.png?itok=xz8z1EpM',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  }
];

// Mock data for media items
const mediaData = [
  {
    id: 1,
    image: 'https://www.ihf.info/sites/default/files/styles/gallery_big_image/public/2025-03/medalceremonycover.png?itok=8-_0vZfi',
    date: '16 Mar. 2025',
    title: 'Medal Ceremony | 5th IHF Men\'s Emerging Nations Championship | © IHF',
    type: 'gallery'
  },
  {
    id: 2,
    image: 'https://www.ihf.info/sites/default/files/styles/gallery_small_image/public/2025-03/BULvsGBRcover.png?itok=rjzLfRwC',
    date: '16 Mar. 2025',
    title: 'Bulgaria vs Great Britain | 5th IHF Men\'s Emerging Nations Championship | © IHF',
    type: 'gallery'
  },
  {
    id: 3,
    image: 'https://www.ihf.info/sites/default/files/styles/gallery_small_image/public/2025-03/NGRvsUSAcover.png?itok=lH2e2B0v',
    date: '16 Mar. 2025',
    title: 'Nigeria vs USA | 5th IHF Men\'s Emerging Nations Championship | © IHF',
    type: 'gallery'
  },
  {
    id: 4,
    image: 'https://www.ihf.info/sites/default/files/styles/gallery_medium_image/public/2025-03/PARvsCYPcover.png?itok=vkWergoW',
    date: '16 Mar. 2025',
    title: 'Paraguay vs Cyprus | 5th IHF Men\'s Emerging Nations Championship | © IHF',
    type: 'gallery'
  }
];

// Mock data for competitions
const competitionsData = [
  {
    id: 1,
    title: 'IHF Trophy (U17) Youth Women 2025',
    image: 'https://www.ihf.info/sites/default/files/2025-02/IHF%20trophy%20Youth_logo_380x310.png',
    link: '/competitions/ihf-trophy-u17-women-2025'
  },
  {
    id: 2,
    title: 'IHF Trophy (U19) Junior Women 2025',
    image: 'https://www.ihf.info/sites/default/files/2025-02/IHF%20trophy%20Junior_logo_380x310.png',
    link: '/competitions/ihf-trophy-u19-women-2025'
  },
  {
    id: 3,
    title: '11th IHF Men\'s Youth (U19) World Championship 2025 Egypt',
    image: 'https://www.ihf.info/sites/default/files/2022-06/TWG%202022%20Birmingham_logo_3.png',
    link: '/competitions/mens-youth-world-championship-2025'
  },
  {
    id: 4,
    title: '25th IHF Men\'s Junior World Championship 2025 Poland',
    image: 'https://www.ihf.info/sites/default/files/2019-10/awbg_qatar_generic_0.png',
    link: '/competitions/mens-junior-world-championship-2025'
  },
  {
    id: 5,
    title: 'Women\'s World Championship 2025',
    image: 'https://www.ihf.info/sites/default/files/2025-02/IHF%20trophy%20Youth_logo_380x310.png',
    link: '/competitions/womens-world-championship-2025'
  }
];

// Mock data for partners
const partnersData = [
  {
    id: 1,
    name: 'Gerflor',
    logo: 'https://www.ihf.info/themes/ihf_theme/assets/img/partners/3-new.jpg',
    link: 'https://www.gerflor.com/'
  },
  {
    id: 2,
    name: 'Hummel',
    logo: 'https://www.ihf.info/themes/ihf_theme/assets/img/partners/5-new.jpg',
    link: 'https://www.hummel.net/'
  },
  {
    id: 3,
    name: 'Sportfive',
    logo: 'https://www.ihf.info/themes/ihf_theme/assets/img/partners/2-new.jpg?792',
    link: 'https://sportfive.com/'
  },
  {
    id: 4,
    name: 'Molten',
    logo: 'https://www.ihf.info/themes/ihf_theme/assets/img/partners/2-new.jpg?792',
    link: 'https://www.molten.co.jp/en/'
  }
];

// Anti-doping banner URLs
const bannerData = {
  antiDoping: "https://www.ihf.info/sites/default/files/styles/news_details/public/2021-07/Competition%20manipulation_1440x600.jpg?itok=qvCV97Bp"
};

// Mock API methods
const ApiService = {
  // Get slider data
  getSliderData: () => {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        resolve(sliderData);
      }, 300);
    });
  },

  // Get upcoming events
  getEvents: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(eventsData);
      }, 300);
    });
  },

  // Get news items
  getNews: (limit = 4) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newsData.slice(0, limit));
      }, 300);
    });
  },

  // Get news item by ID
  getNewsById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newsItem = newsData.find(item => item.id === parseInt(id));
        if (newsItem) {
          resolve(newsItem);
        } else {
          reject(new Error('News item not found'));
        }
      }, 300);
    });
  },

  // Get media items
  getMedia: (limit = 4) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mediaData.slice(0, limit));
      }, 300);
    });
  },

  // Get competitions
  getCompetitions: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(competitionsData);
      }, 300);
    });
  },

  // Get partners
  getPartners: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(partnersData);
      }, 300);
    });
  },

  // Get banner URLs
  getBannerUrls: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(bannerData);
      }, 300);
    });
  },

  // Subscribe to newsletter
  subscribeNewsletter: (email) => {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        resolve({ success: true, message: 'Successfully subscribed to newsletter' });
      }, 500);
    });
  }
};

export default ApiService;
