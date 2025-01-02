import React from 'react'

const ShimmerEffect = () => (
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-gray-800/20"></div>
)

export function TourismSkeleton() {
  return (
    <div className="space-y-10 w-full">
      <div className="space-y-2 text-center">
        <div className="h-10 w-3/4 max-w-sm mx-auto bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg relative overflow-hidden">
          <ShimmerEffect />
        </div>
        <div className="h-4 w-1/2 max-w-xs mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg relative overflow-hidden">
          <ShimmerEffect />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-center space-x-2">
          <div className="h-10 w-40 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full relative overflow-hidden">
            <ShimmerEffect />
          </div>
          <div className="h-10 w-40 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full relative overflow-hidden">
            <ShimmerEffect />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow relative overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 rounded-lg relative overflow-hidden">
                <ShimmerEffect />
              </div>
              <div className="h-6 w-3/4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg relative overflow-hidden">
                <ShimmerEffect />
              </div>
              <div className="h-4 w-1/2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg relative overflow-hidden">
                <ShimmerEffect />
              </div>
              <div className="h-4 w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg relative overflow-hidden">
                <ShimmerEffect />
              </div>
              <div className="flex justify-between items-center">
                <div className="h-6 w-20 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-full relative overflow-hidden">
                  <ShimmerEffect />
                </div>
                <div className="h-6 w-24 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 rounded-full relative overflow-hidden">
                  <ShimmerEffect />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

