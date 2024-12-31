import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components directly
import Home from './pages/Home';
import Auth from './components/Auth/auth';
import ExploreDestinations from './pages/ExploreDestinations';
import { VirtualTourContent } from './components/page/VirtualTourContent';
import { DestinationCard } from './components/page/DestinationCard';
import { DynamicPricing } from './components/page/DynamicPricing';
import { FeatureDialog } from './components/page/FeatureDialog';
import SkeletonCard from './Skelton/SkeletonCard';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/explore" element={<ExploreDestinations />} />
          <Route path="/card" element={<DestinationCard />} />
          <Route path="/pricing" element={<DynamicPricing />} />
          <Route path="/dialog" element={<FeatureDialog />} />
          <Route path="/tour" element={<VirtualTourContent />} />
          <Route path="/destinations" element={<destinations />} />
          <Route path="/skeleton" element={<SkeletonCard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;