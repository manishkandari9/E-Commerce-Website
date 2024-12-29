import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./components/Auth/auth'));
const ExploreDestinations = lazy(() => import('./pages/ExploreDestinations'));
const Featured = lazy(() => import('./pages/Featured'))



function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/explore" element={<ExploreDestinations />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
