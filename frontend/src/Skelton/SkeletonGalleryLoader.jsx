import React from 'react';

const SkeletonItem = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden ${className}`}>
    <div className="h-full w-full"></div>
  </div>
);

export default function SkeletonGalleryLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 h-[800px]">
      {/* First column */}
      <div className="md:row-span-2">
        <SkeletonItem className="h-full" />
      </div>
      <div className="md:row-span-2">
        <SkeletonItem className="h-full" />
      </div>
      
      {/* Top right small items */}
      <div className="md:col-span-2 grid grid-cols-3 gap-4">
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </div>
      
      {/* Center large item */}
      <div className="md:col-span-2 md:row-span-2">
        <SkeletonItem className="h-full" />
      </div>
      
      {/* Bottom items */}
      <div className="md:row-span-2">
        <SkeletonItem className="h-full" />
      </div>
      <div className="md:row-span-2">
        <SkeletonItem className="h-full" />
      </div>

      {/* Bottom small items */}
      <div className="md:col-span-2 grid grid-cols-3 gap-4">
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </div>
  );
}
