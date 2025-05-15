import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InfluencerDashboard from './pages/InfluencerDashboard';
import BrandDashboard from './pages/BrandDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/influencer" element={<InfluencerDashboard />} />
        <Route path="/brand" element={<BrandDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
