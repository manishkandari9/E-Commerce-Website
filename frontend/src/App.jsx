import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components directly
import Home from './pages/Home';
import Auth from './components/Auth/auth';
import ExploreDestinations from './pages/ExploreDestinations';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/explore" element={<ExploreDestinations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;