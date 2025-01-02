// import React from 'react'

// export default function SkeletonGalleryLoader() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//       {[...Array(8)].map((_, index) => (
//         <div key={index} className="animate-pulse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//           <div className="bg-gray-300 dark:bg-gray-700 h-48 w-full"></div>
//           <div className="p-6">
//             <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
//             <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
//             <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
//             <div className="mt-4 h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

import React from 'react'

const SkeletonItem = () => (
  <div className="mb-4 animate-pulse">
    <div className="bg-gray-300 dark:bg-gray-700 h-48 md:h-64 w-full rounded-lg"></div>
    <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
    <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
  </div>
)

export default function SkeletonGalleryLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  )
}



