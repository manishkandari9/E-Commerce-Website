import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, Calendar, Users, Loader, Info } from 'lucide-react';

const gradientTextStyle = `
  @keyframes gradientText {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .gradient-text {
    background-size: 200% auto;
    animation: gradientText 5s ease infinite;
  }
`;

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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.5 
    } 
  },
  hover: { 
    scale: 1.03, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 10 
    } 
  },
};

function DestinationCard({ destination, index, isMobile }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardBg = 'bg-white dark:bg-gray-800';
  const textColor = 'text-gray-800 dark:text-gray-200';
  const descriptionColor = 'text-gray-600 dark:text-gray-300';

  const cardContent = (
    <>
      <div className="relative overflow-hidden group">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-white font-bold leading-tight">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl block mb-1">{destination.name.split(',')[0]}</span>
            {destination.name.includes(',') && (
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 block">
                {destination.name.split(',')[1].trim()}
              </span>
            )}
          </h3>
        </motion.div>
      </div>
      <div className="p-4 sm:p-6">
        <p className={`${descriptionColor} mb-4 text-sm sm:text-base line-clamp-3`}>{destination.description}</p>
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className={`pt-4 border-t border-gray-200 dark:border-gray-700`}>
            <div className="flex items-center mb-2">
              <Calendar className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500 dark:text-blue-400`} />
              <span className={`text-sm sm:text-base ${textColor}`}>Duration: {destination.details.duration}</span>
            </div>
            <div className="flex items-center mb-2">
              <Users className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500 dark:text-green-400`} />
              <span className={`text-sm sm:text-base ${textColor}`}>Best for: {destination.details.groupSize}</span>
            </div>
            <div className="flex items-center">
              <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-500 dark:text-red-400`} />
              <span className={`text-sm sm:text-base ${textColor}`}>Best time: {destination.details.bestTime}</span>
            </div>
          </div>
        </motion.div>
        <button
          className={`mt-4 flex items-center justify-between w-full text-blue-600 dark:text-blue-400 font-semibold focus:outline-none text-sm sm:text-base bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-800/40`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{isExpanded ? 'Less Info' : 'More Info'}</span>
          <ChevronRight className={`ml-1 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
            isExpanded ? 'transform rotate-90' : ''
          }`} />
        </button>
      </div>
    </>
  );

  return (
    <motion.div
      className={`${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layout
    >
      {cardContent}
    </motion.div>
  );
}

export default function ExploreDestinations() {
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

  const sectionBg = 'bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800';
  const headingColor = 'text-gray-900 dark:text-gray-100';

  return (
    <section className={`py-4 sm:py-20 ${sectionBg}`}>
      <style>{gradientTextStyle}</style>
      <div className="container mx-auto px-8 sm:px-8 lg:px-8">
        <motion.h2 
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 ${headingColor} relative overflow-hidden`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block transform -skew-x-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Explore
          </span>{" "}
          <span className="inline-block relative">
            Incredible
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </span>{" "}
          <span className="inline-block transform skew-x-12 bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
            India
          </span>
        </motion.h2>
        <motion.div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`}
          layout
        >
          <AnimatePresence>
            {destinations.slice(0, visibleCards).map((dest, index) => (
              <DestinationCard key={dest.name} destination={dest} index={index} isMobile={isMobile} />
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleCards < destinations.length && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              className={`relative overflow-hidden ${
                isMobile
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-full font-bold text-lg shadow-lg'
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-semibold text-xl'
              } transition-all duration-300`}
              onClick={loadMore}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
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
          </motion.div>
        )}
      </div>
    </section>
  );
}

