'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, Calendar, Users, Loader, Info } from 'lucide-react';


const destinations = [
  {
    name: "Taj Mahal, Agra",
    description: "Marvel at the iconic symbol of love, a UNESCO World Heritage site and one of the New Seven Wonders of the World.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "1-2 days",
      bestTime: "October to March",
      groupSize: "Any"
    }
  },
  {
    name: "Varanasi Ghats",
    description: "Experience the spiritual heart of India with ancient rituals and mesmerizing Ganga Aarti on the banks of the holy Ganges.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "2-3 days",
      bestTime: "November to February",
      groupSize: "Small groups"
    }
  },
  {
    name: "Jaipur Pink City",
    description: "Explore the majestic forts and palaces of Rajasthan's capital, known for its distinctive pink architecture.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "3-4 days",
      bestTime: "November to February",
      groupSize: "Any"
    }
  },
  {
    name: "Kerala Backwaters",
    description: "Cruise through serene waterways, lush paddy fields, and experience the unique culture of God's Own Country.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "2-3 days",
      bestTime: "September to March",
      groupSize: "Couples or small groups"
    }
  },
  {
    name: "Ladakh Himalayan Retreat",
    description: "Discover breathtaking landscapes, ancient monasteries, and the unique Tibetan-influenced culture of this high-altitude desert.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "7-10 days",
      bestTime: "June to September",
      groupSize: "Small groups"
    }
  },
  {
    name: "Goa Beaches",
    description: "Relax on golden beaches, indulge in water sports, and experience the vibrant nightlife of India's favorite coastal destination.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "4-5 days",
      bestTime: "November to February",
      groupSize: "Any"
    }
  },
  {
    name: "Ranthambore National Park",
    description: "Embark on thrilling safari adventures to spot Bengal tigers in their natural habitat amidst historic ruins.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "2-3 days",
      bestTime: "October to June",
      groupSize: "Small groups"
    }
  },
  {
    name: "Hampi Ruins",
    description: "Step back in time as you explore the ancient ruins of the Vijayanagara Empire, set amidst a surreal boulder-strewn landscape.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "2-3 days",
      bestTime: "October to February",
      groupSize: "Any"
    }
  },
  {
    name: "Andaman Islands",
    description: "Discover pristine beaches, crystal-clear waters, and vibrant marine life in this tropical paradise in the Bay of Bengal.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "5-7 days",
      bestTime: "November to May",
      groupSize: "Couples or small groups"
    }
  },
  {
    name: "Darjeeling Tea Estates",
    description: "Ride the famous toy train, visit aromatic tea gardens, and enjoy breathtaking views of the Himalayas in this charming hill station.",
    image: "/placeholder.svg?height=400&width=600",
    details: {
      duration: "3-4 days",
      bestTime: "March to May, September to November",
      groupSize: "Any"
    }
  }
];

interface DestinationCardProps {
  destination: {
    name: string;
    description: string;
    image: string;
    details: {
      duration: string;
      bestTime: string;
      groupSize: string;
    };
  };
  index: number;
  isMobile: boolean;
  isDarkMode: boolean;
}

function DestinationCard({ destination, index, isMobile, isDarkMode }: DestinationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const descriptionColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (isMobile) {
    return (
      <motion.div
        className={`${cardBg} rounded-xl overflow-hidden shadow-lg mb-6 relative`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="relative h-64">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{destination.name}</h3>
        </div>
        <div className="p-4">
          <p className={`${descriptionColor} mb-4 text-lg`}>{destination.description}</p>
          <motion.button
            className={`absolute top-2 right-2 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full p-2 shadow-lg`}
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            <Info className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'} transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </motion.button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="flex items-center mb-2">
                  <Calendar className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <span className={`text-base ${textColor}`}>Duration: {destination.details.duration}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Users className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                  <span className={`text-base ${textColor}`}>Best for: {destination.details.groupSize}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                  <span className={`text-base ${textColor}`}>Best time: {destination.details.bestTime}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className={`${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="relative">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
          <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{destination.name}</h3>
        </div>
        <div className="p-6">
          <p className={`${descriptionColor} mb-4 text-lg`}>{destination.description}</p>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <div className={`pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center mb-2">
                <Calendar className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                <span className={`text-base ${textColor}`}>Duration: {destination.details.duration}</span>
              </div>
              <div className="flex items-center mb-2">
                <Users className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                <span className={`text-base ${textColor}`}>Best for: {destination.details.groupSize}</span>
              </div>
              <div className="flex items-center">
                <MapPin className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                <span className={`text-base ${textColor}`}>Best time: {destination.details.bestTime}</span>
              </div>
            </div>
          </motion.div>
          <motion.button
            className={`mt-4 flex items-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold focus:outline-none`}
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Less Info' : 'More Info'}
            <ChevronRight className={`ml-1 w-5 h-5 transition-transform ${
              isExpanded ? 'transform rotate-90' : ''
            }`} />
          </motion.button>
        </div>
      </motion.div>
    );
  }
}

export default function ExploreDestinations({ isDarkMode }: { isDarkMode: boolean }) {
  const [visibleCards, setVisibleCards] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setVisibleCards(mobile ? 3 : 6);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards(prevVisible => Math.min(prevVisible + (isMobile ? 3 : 6), destinations.length));
      setIsLoading(false);
    }, 1000);
  };

  const sectionBg = isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-white';
  const headingColor = isDarkMode ? 'text-gray-100' : 'text-gray-900';

  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl font-bold text-center mb-12 ${headingColor}`}>Explore Incredible India</h2>
        <div className={`${isMobile ? '' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          <AnimatePresence>
            {destinations.slice(0, visibleCards).map((dest, index) => (
              <DestinationCard key={index} destination={dest} index={index} isMobile={isMobile} isDarkMode={isDarkMode} />
            ))}
          </AnimatePresence>
        </div>
        {visibleCards < destinations.length && (
          <div className="text-center mt-12">
            <motion.button
              className={`relative overflow-hidden ${
                isMobile
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 px-8 rounded-full font-bold text-xl shadow-lg'
                  : `${isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 px-8 rounded-lg font-semibold text-xl`
              } transition-all duration-300`}
              onClick={loadMore}
              disabled={isLoading}
              whileHover={isMobile ? { scale: 1.05 } : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader className="animate-spin mr-2" />
                  Loading...
                </span>
              ) : (
                <>
                  {isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500"
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    />
                  )}
                  <span className="relative z-10">Load More Destinations</span>
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

