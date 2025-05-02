/**
 * Application Configuration
 * Centralizes all environment variables and configuration settings
 */

const config = {
  // API Configuration
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'https://api.example.com/v1',
    timeout: 30000, // 30 seconds
    useMockData: process.env.REACT_APP_USE_MOCK_DATA === 'true'
  },
  
  // Asset Configuration
  assets: {
    baseUrl: process.env.REACT_APP_ASSET_URL || 'https://assets.example.com'
  },
  
  // App Configuration
  app: {
    name: 'IHF Website',
    version: process.env.REACT_APP_VERSION || '1.0.0',
    debug: process.env.REACT_APP_DEBUG === 'true',
    basePath: process.env.PUBLIC_URL || '/'
  },
  
  // Analytics Configuration
  analytics: {
    googleAnalyticsId: process.env.REACT_APP_GA_ID
  },
  
  // Feature Flags
  features: {
    enableLiveScores: true,
    enableUserAccounts: false,
    enableNotifications: false
  }
};

export default config;