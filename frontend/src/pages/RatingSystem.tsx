import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface RatingSystemProps {
  rating: number;
  maxRating: number;
}

const RatingSystem: React.FC<RatingSystemProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxRating)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: rating > index ? 360 : 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          <Star
            className={`w-6 h-6 ${
              index < rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300 dark:text-gray-600'
            } transition-colors duration-200`}
          />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: rating > index ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
          </motion.div>
        </motion.div>
      ))}
      <span className="ml-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default RatingSystem;

