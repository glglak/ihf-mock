import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { Home } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Additional routes would be defined here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;