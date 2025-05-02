/**
 * Components module
 * Main export point for all components
 */

// Export component categories
import common from './common';
import layout from './layout';
import features from './features';

export {
  common,
  layout,
  features
};

// Import specific components for direct export
import { Button, Card } from './common';
import { Header, Footer } from './layout';
import { 
  competitions,
  media,
  events
} from './features';

// Export specific components
export {
  Button,
  Card,
  Header,
  Footer,
  competitions,
  media,
  events
};

export default {
  common,
  layout,
  features
};