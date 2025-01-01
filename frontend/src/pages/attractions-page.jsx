'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Clock, MapPin, DollarSign, Accessibility, Search } from 'lucide-react'
import AttractionsSkeleton from '../Skelton/attractions-skeleton'
// Simulated API call
async function getAttractions(category) {
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API delay
  return [
    {
      id: 1,
      name: "Historical Museum",
      description: "Explore the rich history of our region.",
      image: "/placeholder.svg?height=300&width=400",
      category: "historical",
      entryFee: 10,
      hours: "9:00 AM - 5:00 PM",
      location: "123 History St, Old Town",
      accessibility: ["Wheelchair Accessible", "Audio Guide"]
    },
    {
      id: 2,
      name: "Nature Reserve",
      description: "Experience the beauty of local flora and fauna.",
      image: "/placeholder.svg?height=300&width=400",
      category: "natural",
      entryFee: 5,
      hours: "Sunrise to Sunset",
      location: "456 Forest Rd, Green Valley",
      accessibility: ["Guided Tours", "Accessible Trails"]
    },
    {
      id: 3,
      name: "Adventure Park",
      description: "Thrilling rides and family fun for all ages.",
      image: "/placeholder.svg?height=300&width=400",
      category: "family",
      entryFee: 25,
      hours: "10:00 AM - 8:00 PM",
      location: "789 Fun Ave, Excitement City",
      accessibility: ["Wheelchair Accessible", "Sensory-Friendly Hours"]
    },
    // Add more attractions as needed
  ].filter(attraction => category === 'all' || attraction.category === category)
}

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <form onSubmit={handleSearch} className="relative mb-6">
      <input
        type="text"
        placeholder="Search attractions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </form>
  )
}

function AttractionCard({ attraction, isFavorite, onToggleFavorite }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      >
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">{attraction.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{attraction.description}</p>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{attraction.hours}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{attraction.location}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>${attraction.entryFee}</span>
            </div>
            <div className="flex items-center">
              <Accessibility className="w-4 h-4 mr-2" />
              <span>{attraction.accessibility.join(', ')}</span>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center border-t dark:border-gray-700">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Learn More
          </button>
          <button
            onClick={() => onToggleFavorite(attraction.id)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
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
    // Implement search logic here. For now, we'll just filter by name
    getAttractions('all').then((data) => {
      const filtered = data.filter(attraction => 
        attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setAttractions(filtered)
      setIsLoading(false)
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">Explore Attractions</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {['all', 'historical', 'natural', 'family', 'cultural'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              category === cat
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      {isLoading ? (
        <AttractionsSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              isFavorite={favorites.includes(attraction.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default AttractionsPage

