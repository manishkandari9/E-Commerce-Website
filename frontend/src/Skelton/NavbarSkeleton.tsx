import React from 'react';

const NavbarSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full mr-2"></div>
            <div className="w-32 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="hidden md:flex space-x-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSkeleton;

