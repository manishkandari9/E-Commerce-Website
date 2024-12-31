import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader, X } from 'lucide-react';
import { Destination } from './destinations-data';

interface VirtualTourContentProps {
  destination: Destination;
}

export const VirtualTourContent: React.FC<VirtualTourContentProps> = ({ destination }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(true); // To control tour visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const views = [
    { name: 'Exterior', image: '/placeholder.svg?height=720&width=1280' },
    { name: 'Interior', image: '/placeholder.svg?height=720&width=1280' },
    { name: 'Surroundings', image: '/placeholder.svg?height=720&width=1280' },
  ];

  const handleCloseTour = () => {
    setIsTourOpen(false); // Close the virtual tour
  };

  return (
    <div className="relative mt-6">
      {isTourOpen && (
        <>
          <motion.div
            className="absolute top-4 right-4 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleCloseTour}
              className="text-white bg-red-600 hover:bg-red-700 p-2 rounded-full focus:outline-none shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <X size={20} />
            </button>
          </motion.div>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader className="w-12 h-12 animate-spin text-blue-500" />
            </div>
          ) : (
            <>
              <motion.img
                key={currentView}
                src={views[currentView].image}
                alt={`${destination.name} - ${views[currentView].name}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
                {views.map((view, index) => (
                  <button
                    key={view.name}
                    onClick={() => setCurrentView(index)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      currentView === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {view.name}
                  </button>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
