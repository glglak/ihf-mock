import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header would go here */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Additional routes would be defined here */}
          </Routes>
        </main>
        {/* Footer would go here */}
      </div>
    </Router>
  );
}

export default App;