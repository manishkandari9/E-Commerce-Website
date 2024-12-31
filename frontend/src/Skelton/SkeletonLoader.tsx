import React from 'react';

interface SkeletonProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 ${className}`}
      style={{
        backgroundSize: '200% 100%',
        animation: 'pulse 1.5s ease-in-out infinite, shimmer 2s infinite linear',
      }}
    />
  );
};

export default SkeletonLoader;

export const SkeletonText: React.FC<SkeletonProps> = ({ className = '' }) => (
  <SkeletonLoader className={`h-3 rounded-xl ${className}`} />
);

export const SkeletonTitle: React.FC<SkeletonProps> = ({ className = '' }) => (
  <SkeletonLoader className={`h-8 rounded-xl ${className}`} />
);

export const SkeletonButton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <SkeletonLoader className={`h-10 rounded-xl ${className}`} />
);

export const SkeletonImage: React.FC<SkeletonProps & { aspectRatio?: string }> = ({ className = '', aspectRatio = '16/9' }) => (
  <div className={`relative ${className}`} style={{ aspectRatio }}>
    <SkeletonLoader className="absolute inset-0 rounded-3xl" />
  </div>
);

