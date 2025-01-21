import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion"
import { Heart, Clock, MapPin, DollarSign, Accessibility, Search, Tag, Users, ChevronUp } from "lucide-react"
import AttractionsSkeleton from "../Skelton/attractions-skeleton"
import { useNavigate } from "react-router-dom"

// Simulated API call
async function getAttractions(category) {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating API delay
  return [
    {
      id: 1,
      name: "Historical Museum Tour",
      description:
        "Explore the rich history of our region with a guided tour. Discover ancient artifacts, interactive exhibits, and fascinating stories from the past.",
      image: "/dev.jpg?height=300&width=400",
      category: "historical",
      entryFee: 15,
      hours: "9:00 AM - 5:00 PM",
      location: "123 History St, Old Town",
      accessibility: ["Wheelchair Accessible", "Audio Guide"],
      type: "Guided Tour",
      duration: "2 hours",
      maxParticipants: 20,
    },
    {
      id: 2,
      name: "Nature Reserve Hike",
      description:
        "Experience the beauty of local flora and fauna on a guided hike. Traverse scenic trails and learn about the ecosystem from expert naturalists.",
      image: "/aarti.jpg?height=400&width=300",
      category: "adventure",
      entryFee: 10,
      hours: "Sunrise to Sunset",
      location: "456 Forest Rd, Green Valley",
      accessibility: ["Guided Tours", "Accessible Trails"],
      type: "Outdoor Activity",
      duration: "3 hours",
      maxParticipants: 15,
    },
    {
      id: 3,
      name: "Culinary Workshop",
      description:
        "Learn to cook local specialties with expert chefs. Discover unique flavors and techniques in this hands-on culinary experience.",
      image: "/kunjapuri.jpg?height=350&width=400",
      category: "culinary",
      entryFee: 50,
      hours: "2:00 PM - 5:00 PM",
      location: "789 Gourmet Ave, Flavor Town",
      accessibility: ["Wheelchair Accessible"],
      type: "Workshop",
      duration: "3 hours",
      maxParticipants: 12,
    },
  ].filter((attraction) => category === "all" || attraction.category === category)
}

function ParallaxHero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -100])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="relative h-[50vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          y: y1,
        }}
      />
      <motion.div className="absolute inset-0 flex items-center justify-center" style={{ y: y2, opacity }}>
        <h1 className="text-6xl font-bold text-white text-center drop-shadow-lg">Explore the World</h1>
      </motion.div>
    </div>
  )
}

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("")
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
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <div className="relative">
        <img src={attraction.image || "/placeholder.svg"} alt={attraction.name} className="w-full h-56 object-cover" />
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
          <Heart className={`w-6 h-6 ${isFavorite ? "text-red-500 fill-current" : "text-white"}`} />
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
            <span>Max {attraction.maxParticipants || "Unlimited"}</span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="flex items-center mb-4">
          <Accessibility className="w-5 h-5 text-blue-500 mr-2" />
          <span className="text-sm text-gray-600 dark:text-gray-300">{attraction.accessibility.join(", ")}</span>
        </div>
        <button
          onClick={() => {
            const params = new URLSearchParams({
              name: attraction.name,
              image: attraction.image,
              description: attraction.description,
              location: attraction.location,
              entryFee: attraction.entryFee,
              duration: attraction.duration,
              maxParticipants: attraction.maxParticipants,
              accessibility: attraction.accessibility.join(", "),
            })
            navigate(`/booking?${params.toString()}`)
          }}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          <span>Book Now</span>
        </button>
      </div>
    </motion.div>
  )
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }} />
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function CombinedAttractionsPage() {
  const [attractions, setAttractions] = useState([])
  const [favorites, setFavorites] = useState([])
  const [category, setCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const attractionsRef = useRef(null)

  useEffect(() => {
    setIsLoading(true)
    getAttractions(category).then((data) => {
      setAttractions(data)
      setIsLoading(false)
    })
  }, [category])

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleSearch = (searchTerm) => {
    setIsLoading(true)
    getAttractions("all").then((data) => {
      const filtered = data.filter(
        (attraction) =>
          attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          attraction.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setAttractions(filtered)
      setIsLoading(false)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <ScrollProgressBar />
      <ScrollToTopButton />
      <ParallaxHero />
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center text-blue-800 dark:text-blue-200"
        >
          Discover Amazing Activities
        </motion.h1>
        <SearchBar onSearch={handleSearch} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {["all", "adventure", "leisure", "culinary", "historical", "cultural"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                category === cat
                  ? "bg-blue-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-blue-800 hover:bg-blue-100 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>
        {isLoading ? (
          <AttractionsSkeleton />
        ) : (
          <motion.div
            ref={attractionsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence>
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {attractions.map((attraction, index) => (
                  <motion.div
                    key={attraction.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AttractionCard
                      attraction={attraction}
                      isFavorite={favorites.includes(attraction.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  )
}

