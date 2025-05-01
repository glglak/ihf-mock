# IHF Mock Website

This is a complete mockup of the International Handball Federation (IHF) website using React and Bootstrap. The design closely follows the official IHF website layout and styling.

## Live Demo

Visit the live website at: [https://glglak.github.io/ihf-mock](https://glglak.github.io/ihf-mock)

## Features

- Responsive design that works on desktop and mobile devices
- Interactive slider/carousel for featured news articles
- Navigation menu with dropdowns
- Latest news section with card layout
- Upcoming events section with calendar
- Media center with image galleries
- Competitions carousel
- World map and president message section
- Partners showcase
- Newsletter subscription form with validation
- Cookie consent banner
- Mock API services for data management

## Technology Stack

- **React.js** - A JavaScript library for building user interfaces
- **React Router** - For navigation between pages
- **React Bootstrap** - UI components library
- **React Icons** - For social media and UI icons
- **CSS3** - For styling and animations

## Project Structure

```
ihf-mock/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── CookieConsent.js
│   │   ├── CookieConsent.css
│   │   ├── Competitions.js
│   │   ├── Competitions.css
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── InfoBanner.js
│   │   ├── InfoBanner.css
│   │   ├── MediaCentre.js
│   │   ├── MediaCentre.css
│   │   ├── Newsletter.js
│   │   ├── Newsletter.css
│   │   ├── NewsSection.js
│   │   ├── Partners.js
│   │   ├── Partners.css
│   │   ├── Slider.js
│   │   ├── Slider.css
│   │   ├── UpcomingEvents.js
│   │   ├── UpcomingEvents.css
│   │   ├── WorldMapSection.js
│   │   └── WorldMapSection.css
│   ├── pages/
│   │   └── HomePage.js
│   ├── services/
│   │   └── api.service.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── package.json
└── README.md
```

## Installation and Setup

1. Clone the repository
```bash
git clone https://github.com/glglak/ihf-mock.git
cd ihf-mock
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment

The website is automatically deployed to GitHub Pages whenever changes are pushed to the main branch. The deployment is handled by GitHub Actions.

To manually deploy the website:

```bash
npm run deploy
```

## API Service

The project includes a mock API service that simulates backend functionality. In a real application, these services would interact with a real API. The following mock endpoints are available:

- `getSliderData()` - Fetches slider/hero section data
- `getEvents()` - Fetches upcoming events data
- `getNews()` - Fetches latest news items
- `getNewsById(id)` - Fetches a specific news item by ID
- `getMedia()` - Fetches media gallery items
- `getCompetitions()` - Fetches competition items for the carousel
- `getPartners()` - Fetches partner logos and information
- `subscribeNewsletter(email)` - Simulates newsletter subscription

## Future Enhancements

- Add more pages (About, Competitions, Media Center, etc.)
- Implement responsive navigation for mobile devices
- Add authentication functionality (login/register)
- Integrate with a real backend API
- Add language selector for multilingual support
- Implement advanced search functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is for educational purposes only. All trademarks, logos, and brand names are the property of their respective owners.
