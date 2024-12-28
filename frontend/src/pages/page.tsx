import Navbar from '../components/navbar'
import HeroSection from '../pages/Home'
import ExploreDestinations from '../pages/ExploreDestinations'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <ExploreDestinations />
    </main>
  )
}

