import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Calendar, Users, MapPin, Star } from 'lucide-react'
import { Destination } from './destinations-data'
import { DynamicPricing } from './DynamicPricing'

interface DestinationCardProps {
  destination: Destination;
  openFeatureDialog: (destination: Destination) => void;
}

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
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, openFeatureDialog }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const handlePriceClick = () => {
    // Redirect to payment page
    alert("Redirecting to payment page...")
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layout
      style={{ y }}
    >
      <div className="relative overflow-hidden group">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-white font-bold text-xl">{destination.name}</h3>
        </motion.div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{destination.description}</p>
        <div className="flex justify-between items-center mb-4">
          <DynamicPricing basePrice={destination.price} onPriceClick={handlePriceClick} />
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="text-gray-800 dark:text-gray-200 font-semibold">{destination.rating}</span>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-2">
              <Calendar className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Duration: {destination.details.duration}</span>
            </div>
            <div className="flex items-center mb-2">
              <Users className="w-4 h-4 mr-2 text-green-500 dark:text-green-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Best for: {destination.details.groupSize}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-red-500 dark:text-red-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Best time: {destination.details.bestTime}</span>
            </div>
          </div>
        </motion.div>
        <div className="mt-4 flex justify-between">
          <button
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? 'Less Info' : 'More Info'}</span>
            <ChevronRight className={`ml-1 w-4 h-4 transition-transform duration-300 ${
              isExpanded ? 'transform rotate-90' : ''
            }`} />
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            onClick={() => openFeatureDialog(destination)}
          >
            Virtual Tour
          </button>
        </div>
      </div>
    </motion.div>
  )
}

