import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./components/Auth/auth'));
const ExploreDestinations = lazy(() => import('./pages/ExploreDestinations'));

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
