import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard = () => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="animate-pulse">
        <div className="bg-gray-300 dark:bg-gray-700 h-56 sm:h-64"></div>
        <div className="p-4 sm:p-6">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="mt-4 flex items-center space-x-2">
            <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkeletonCard;

