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
import { TourismSection } from './pages/TourismSection';
import { TourismSkeleton } from './Skelton/TourismSkeleton';
import ContactPage from './pages/contact-page';
import { ContactSkeleton } from './Skelton/contact-skeleton';
import InteractiveGlobeSection from './pages/interactive-globe-section';
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
          <Route path="/tourism" element={<TourismSection />} />
          <Route path="/tourism-skeleton" element={<TourismSkeleton />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-skeleton" element={<ContactSkeleton />} />
          <Route path="/globe" element={<InteractiveGlobeSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;