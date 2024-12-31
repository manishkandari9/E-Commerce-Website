import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Destination } from './destinations-data';
import { VirtualTourContent } from './VirtualTourContent';

interface FeatureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  destination: Destination | null;
}

export const FeatureDialog: React.FC<FeatureDialogProps> = ({ isOpen, onClose, destination }) => {
  return (
    <AnimatePresence>
      {isOpen && destination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full p-6 relative shadow-lg"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none transform transition duration-300 ease-in-out hover:scale-110"
              onClick={onClose}
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">{destination.name}</h2>
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
            />
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{destination.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Details</h3>
                <p className="text-gray-600 dark:text-gray-400">Duration: {destination.details.duration}</p>
                <p className="text-gray-600 dark:text-gray-400">Best Time: {destination.details.bestTime}</p>
                <p className="text-gray-600 dark:text-gray-400">Group Size: {destination.details.groupSize}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Highlights</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-600 dark:text-gray-400">Local cuisine tasting</li>
                  <li className="text-gray-600 dark:text-gray-400">Guided tours</li>
                  <li className="text-gray-600 dark:text-gray-400">Cultural experiences</li>
                  <li className="text-gray-600 dark:text-gray-400">Adventure activities</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <VirtualTourContent destination={destination} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
