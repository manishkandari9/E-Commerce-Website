import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components directly
import Home from './pages/Home';
import Auth from './components/Auth/auth';
import ExploreDestinations from './pages/ExploreDestinations';
import SkeletonCard from './Skelton/SkeletonCard';
import AttractionsPage from './pages/attractions-page';
import AttractionsSkeleton from './Skelton/attractions-skeleton';
import TourismGallery from './pages/TourismGallery';
import SkeletonGalleryLoader from './Skelton/SkeletonGalleryLoader';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/explore" element={<ExploreDestinations />} />
          <Route path="/skeleton" element={<SkeletonCard />} />
          <Route path="/attractions" element={<AttractionsPage />} />          
          <Route path="/attractions-skeleton" element={<AttractionsSkeleton />} />  
          <Route path="/gallery" element={<TourismGallery />} />
          <Route path="/skeleton-gallery-loader" element={<SkeletonGalleryLoader />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;