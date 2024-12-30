import React from "react";
import SkeletonLoader from "./HeroSkeleton";

const HeroSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
      {/* Wrapper */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
          {/* Skeleton Image */}
          <div className="w-64 h-64 bg-gray-300 dark:bg-gray-700 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-gray-500/50 animate-[shimmer_1.5s_infinite]"></div>
          </div>

          {/* Skeleton Text */}
          <div className="flex-1 space-y-4">
            <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="w-full h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="w-5/6 h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="w-1/2 h-8 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
