import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, Calendar, Users, DollarSign, Star } from 'lucide-react';
import RatingPage from '../../pages/RatingPage';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
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
    scale: 1.05, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 10 
    } 
  },
};

const sizeClasses = {
  small: "col-span-1",
  medium: "col-span-2",
  large: "col-span-2 row-span-2",
};

export default function BentoCard({ destination, size = "small", isLoading = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRatingPageOpen, setIsRatingPageOpen] = useState(false);

  if (isLoading) {
    return (
      <motion.div
        className={`bg-white dark:bg-gray-800 overflow-hidden ${sizeClasses[size]}`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="aspect-square bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
        <div className="p-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4 animate-pulse"></div>
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
            <div className="h-8 w-16 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 overflow-hidden ${sizeClasses[size]} border border-gray-200 dark:border-gray-700`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="relative aspect-square">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h3 className="text-white font-bold text-lg md:text-xl">{destination.name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{destination.description}</p>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 text-green-500 mr-1" />
            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{destination.price}</span>
          </div>
          <button 
            onClick={() => setIsRatingPageOpen(true)}
            className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-1 px-2 rounded-full transition duration-200 text-xs"
          >
            <Star className="w-3 h-3 mr-1" />
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
              className="mb-2"
            >
              <div className="flex items-center mb-1">
                <Calendar className="w-3 h-3 mr-1 text-blue-500" />
                <span className="text-xs text-gray-600 dark:text-gray-300">Duration: {destination.details.duration}</span>
              </div>
              <div className="flex items-center mb-1">
                <Users className="w-3 h-3 mr-1 text-green-500" />
                <span className="text-xs text-gray-600 dark:text-gray-300">Best for: {destination.details.groupSize}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-red-500" />
                <span className="text-xs text-gray-600 dark:text-gray-300">Best time: {destination.details.bestTime}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 flex items-center justify-center text-xs"
          >
            <span>{isExpanded ? 'Less' : 'More'}</span>
            <ChevronRight className={`ml-1 h-3 w-3 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
          <button
            onClick={() => alert(`Booking for ${destination.name}`)}
            className="flex-1 px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-200 flex items-center justify-center text-xs"
          >
            <span>Book Now</span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isRatingPageOpen && (
          <RatingPage
            destination={destination}
            onClose={() => setIsRatingPageOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

