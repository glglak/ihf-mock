# IHF Mock Website

A modern, well-structured React application for the International Handball Federation mock website. This project follows best practices for component organization, service architecture, and code maintainability.

## Live Demo

The project is deployed on GitHub Pages and can be accessed at:
https://glglak.github.io/ihf-mock/

**Note:** If you encounter 404 errors (with manifest.json, favicon.ico, etc.), this is likely due to the GitHub Pages configuration. These issues don't affect the main functionality of the application and are related to asset paths in the GitHub Pages environment.

## Project Structure

The project follows a feature-based organization with clear separation of concerns:

```
src/
├── assets/                # Static assets like images, fonts, etc.
├── components/            # All UI components
│   ├── common/            # Generic UI components (Button, Card, etc.)
│   ├── layout/            # Layout components (Header, Footer)
│   └── features/          # Feature-specific components
│       ├── competitions/  # Competitions components
│       ├── media/         # Media components
│       └── events/        # Events components
├── pages/                 # Page components representing routes
├── services/              # API and data services
│   ├── api/               # API configuration and client
│   └── data/              # Data services by feature
├── config/                # Application configuration
├── utils/                 # Utility functions
└── hooks/                 # Custom React hooks
```

## Component Architecture

Components are organized by feature and follow the principle of encapsulation. Each component:

1. Has its own directory
2. Contains its CSS in the same directory
3. Includes an index.js file for cleaner imports
4. Is properly documented

## Services

Services are divided into:

- **API Services**: Handle API requests and configuration
- **Data Services**: Manage data for specific features

The services use mock data for development but can easily switch to real API endpoints in production.

## Environment Configuration

The project uses environment-specific configuration files:

- `.env.development` for development settings
- `.env.production` for production settings

## Installation

```bash
# Clone the repository
git clone https://github.com/glglak/ihf-mock.git

# Navigate to the project directory
cd ihf-mock

# Install dependencies
npm install

# Start the development server
npm start
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technology Stack

- React.js
- React Router for navigation
- React Bootstrap for UI components
- CSS for styling (each component has its own CSS file)
- Environment-based configuration
- Mock data services for development

## Deployment

The project uses GitHub Actions for continuous integration and deployment to GitHub Pages. The workflow automatically:

1. Installs dependencies
2. Builds the project
3. Deploys to GitHub Pages

### Fixing 404 Errors

If you encounter 404 errors in the deployed GitHub Pages version, you can fix them by:

1. Adding `"homepage": "https://glglak.github.io/ihf-mock"` to your package.json
2. Ensuring all relative URLs use the `PUBLIC_URL` environment variable
3. Adding a `<base href="%PUBLIC_URL%/">` tag to your index.html
4. For React Router, use `<BrowserRouter basename={process.env.PUBLIC_URL}>` to ensure proper routing

## Best Practices

This project demonstrates several React best practices:

1. **Component Composition**: Breaking UI into small, reusable components
2. **Separation of Concerns**: Separating data fetching from presentation
3. **Clean Imports**: Using index.js files to simplify imports
4. **CSS Organization**: Co-locating CSS with components
5. **Service Architecture**: Centralizing API calls and data handling
6. **Environment Configuration**: Using environment variables for different environments
7. **Responsive Design**: Ensuring the UI works well on all device sizes

## Folder Naming and Component Organization

1. **PascalCase** for component folders and files (e.g., `Button`, `CompetitionsList`)
2. **camelCase** for utility files and other non-component files
3. Each component has its own folder with:
   - Main component file (e.g., `Button.js`)
   - CSS file (e.g., `Button.css`)
   - Index file for re-export (e.g., `index.js`)

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.