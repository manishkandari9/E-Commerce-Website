import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Clock, MapPin, DollarSign, Accessibility, Search, Tag, Users, Coffee, ChevronDown, X } from 'lucide-react'
import AttractionsSkeleton from '../Skelton/attractions-skeleton'

// Simulated API call
async function getAttractions(category) {
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API delay
  return [
    {
      id: 1,
      name: "Historical Museum Tour",
      description: "Explore the rich history of our region with a guided tour. Discover ancient artifacts, interactive exhibits, and fascinating stories from the past.",
      image: "/placeholder.svg?height=300&width=400",
      category: "historical",
      entryFee: 15,
      hours: "9:00 AM - 5:00 PM",
      location: "123 History St, Old Town",
      accessibility: ["Wheelchair Accessible", "Audio Guide"],
      type: "Guided Tour",
      duration: "2 hours",
      maxParticipants: 20
    },
    {
      id: 2,
      name: "Nature Reserve Hike",
      description: "Experience the beauty of local flora and fauna on a guided hike. Traverse scenic trails and learn about the ecosystem from expert naturalists.",
      image: "/placeholder.svg?height=400&width=300",
      category: "adventure",
      entryFee: 10,
      hours: "Sunrise to Sunset",
      location: "456 Forest Rd, Green Valley",
      accessibility: ["Guided Tours", "Accessible Trails"],
      type: "Outdoor Activity",
      duration: "3 hours",
      maxParticipants: 15
    },
    {
      id: 3,
      name: "Culinary Workshop",
      description: "Learn to cook local specialties with expert chefs. Discover unique flavors and techniques in this hands-on culinary experience.",
      image: "/placeholder.svg?height=350&width=400",
      category: "culinary",
      entryFee: 50,
      hours: "2:00 PM - 5:00 PM",
      location: "789 Gourmet Ave, Flavor Town",
      accessibility: ["Wheelchair Accessible"],
      type: "Workshop",
      duration: "3 hours",
      maxParticipants: 12
    },
    {
      id: 4,
      name: "Adventure Park",
      description: "Thrilling rides and family fun for all ages. Experience adrenaline-pumping attractions and create lasting memories with your loved ones.",
      image: "/placeholder.svg?height=300&width=400",
      category: "adventure",
      entryFee: 25,
      hours: "10:00 AM - 8:00 PM",
      location: "101 Fun Ave, Excitement City",
      accessibility: ["Wheelchair Accessible", "Sensory-Friendly Hours"],
      type: "Family Activity",
      duration: "All day",
      maxParticipants: null
    },
    {
      id: 5,
      name: "Sunset Yoga Retreat",
      description: "Relax and rejuvenate with a beachside yoga session. Find inner peace as you practice yoga against the backdrop of a stunning sunset.",
      image: "/dha.png?height=450&width=300",
      category: "leisure",
      entryFee: 20,
      hours: "6:00 PM - 7:30 PM",
      location: "Serenity Beach",
      accessibility: ["Beginner Friendly"],
      type: "Wellness Activity",
      duration: "1.5 hours",
      maxParticipants: 30
    },
    {
      id: 6,
      name: "Local Artisan Workshop",
      description: "Create unique souvenirs with local craftsmen. Learn traditional techniques and take home your own handmade creation.",
      image: "/placeholder.svg?height=350&width=400",
      category: "cultural",
      entryFee: 35,
      hours: "11:00 AM - 2:00 PM",
      location: "Artisan Alley, Craft District",
      accessibility: ["Wheelchair Accessible"],
      type: "Workshop",
      duration: "3 hours",
      maxParticipants: 10
    },
  ].filter(attraction => category === 'all' || attraction.category === category)
}

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <form onSubmit={handleSearch} className="relative mb-8">
      <input
        type="text"
        placeholder="Discover your next adventure..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-6 py-3 text-lg rounded-full border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white dark:border-blue-400"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
      >
        <Search className="w-6 h-6" />
      </button>
    </form>
  )
}

function AttractionCard({ attraction, isFavorite, onToggleFavorite }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <div className="relative">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{attraction.name}</h3>
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-400 font-medium">{attraction.type}</span>
          </div>
        </div>
        <button
          onClick={() => onToggleFavorite(attraction.id)}
          className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors duration-300 hover:bg-white/50"
        >
          <Heart className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-white'}`} />
        </button>
      </div>
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{attraction.description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-blue-500" />
            <span>{attraction.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-green-500" />
            <span className="truncate">{attraction.location}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-2 text-yellow-500" />
            <span>${attraction.entryFee}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-purple-500" />
            <span>Max {attraction.maxParticipants || 'Unlimited'}</span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="flex items-center mb-4">
          <Accessibility className="w-5 h-5 text-blue-500 mr-2" />
          <span className="text-sm text-gray-600 dark:text-gray-300">{attraction.accessibility.join(', ')}</span>
        </div>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          Book Now
        </button>
      </div>
    </motion.div>
  )
}
function AttractionsPage() {
  const [attractions, setAttractions] = useState([])
  const [favorites, setFavorites] = useState([])
  const [category, setCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    getAttractions(category).then((data) => {
      setAttractions(data)
      setIsLoading(false)
    })
  }, [category])

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
  }

  const handleSearch = (searchTerm) => {
    setIsLoading(true)
    getAttractions('all').then((data) => {
      const filtered = data.filter(attraction => 
        attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attraction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setAttractions(filtered)
      setIsLoading(false)
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Discover Amazing Activities</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {['all', 'adventure', 'leisure', 'culinary', 'historical', 'cultural text-green'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              category === cat
                ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      {isLoading ? (
        <AttractionsSkeleton />
      ) : (
        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {attractions.map((attraction) => (
              <AttractionCard
                key={attraction.id}
                attraction={attraction}
                isFavorite={favorites.includes(attraction.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
export default AttractionsPage

