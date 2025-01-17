import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MapPin, Calendar, Users, DollarSign, Star } from 'lucide-react';
import RatingPage from "./RatingPage";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    name: "Taj Mahal, Agra",
    description: "Marvel at the iconic symbol of love, a UNESCO World Heritage site and one of the New Seven Wonders of the World.",
    image: "/kun.jpg",
    details: {
      duration: "1-2 days",
      bestTime: "October to March",
      groupSize: "Any",
    },
    price: "₹1,500",
    rating: 4.9,
  },
  {
    name: "Varanasi Ghats",
    description: "Experience the spiritual heart of India with ancient rituals and mesmerizing Ganga Aarti on the banks of the holy Ganges.",
    image: "/dha.png",
    details: {
      duration: "2-3 days",
      bestTime: "November to February",
      groupSize: "Small groups",
    },
    price: "₹2,000",
    rating: 4.7,
  },
  {
    name: "Jaipur Pink City",
    description: "Explore the majestic forts and palaces of Rajasthan's capital, known for its distinctive pink architecture.",
    image: "/dev.jpg",
    details: {
      duration: "3-4 days",
      bestTime: "November to February",
      groupSize: "Any",
    },
    price: "₹2,500",
    rating: 4.8,
  },
  {
    name: "Kerala Backwaters",
    description: "Cruise through serene waterways, lush paddy fields, and experience the unique culture of God's Own Country.",
    image: "/kun.jpg",
    details: {
      duration: "2-3 days",
      bestTime: "September to March",
      groupSize: "Couples or small groups",
    },
    price: "₹3,000",
    rating: 4.9,
  },
  {
    name: "Ladakh Himalayan Retreat",
    description: "Discover breathtaking landscapes, ancient monasteries, and the unique Tibetan-influenced culture of this high-altitude desert.",
    image: "/dha.png",
    details: {
      duration: "7-10 days",
      bestTime: "June to September",
      groupSize: "Small groups",
    },
    price: "₹5,000",
    rating: 4.8,
  },
  {
    name: "Goa Beaches",
    description: "Relax on golden beaches, indulge in water sports, and experience the vibrant nightlife of India's favorite coastal destination.",
    image: "/dha.png",
    details: {
      duration: "4-5 days",
      bestTime: "November to February",
      groupSize: "Any",
    },
    price: "₹2,800",
    rating: 4.6,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  hover: { scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 10 } },
};

function DestinationCard({ destination }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRatingPageOpen, setIsRatingPageOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Image Section */}
      <div className="relative aspect-video">
        <img src={destination.image || "/placeholder.svg"} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-xl md:text-2xl">{destination.name}</h3>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{destination.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <DollarSign className="w-5 h-5 text-green-500 mr-1" />
            <span className="font-semibold text-gray-800 dark:text-gray-200">{destination.price}</span>
          </div>
          <button
            onClick={() => setIsRatingPageOpen(true)}
            className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-200"
          >
            <Star className="w-5 h-5 mr-1" />
            <span>{destination.rating}</span>
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Duration: {destination.details.duration}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <Users className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Best for: {destination.details.groupSize}
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-red-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Best time: {destination.details.bestTime}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            <span>{isExpanded ? "Less Info" : "More Info"}</span>
            <ChevronRight
              className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          </button>
          <button
            onClick={() => {
              const params = new URLSearchParams({
                destination: destination.name,
                image: destination.image,
                description: destination.description
              });
              navigate(`/booking?${params.toString()}`);
            }}
            className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            <span>Book Now</span>
          </button>
        </div>
      </div>

      {/* Rating Page */}
      <AnimatePresence>
        {isRatingPageOpen && (
          <RatingPage destination={destination} onClose={() => setIsRatingPageOpen(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse">
      <div className="aspect-video bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
          <div className="h-8 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function ExploreDestinations() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Explore Incredible India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {isLoading
              ? Array(6)
                  .fill(0)
                  .map((_, index) => <SkeletonCard key={index} />)
              : destinations.map((destination) => (
                  <DestinationCard key={destination.name} destination={destination} />
                ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

