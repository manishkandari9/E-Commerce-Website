'use client'

import React, { useState, useEffect } from 'react'
import Masonry from 'react-masonry-css'
import { useTheme } from 'next-themes'
import SkeletonGalleryLoader from '../Skelton/SkeletonGalleryLoader'

const breakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
}
const GalleryItem = ({ item }) => (
  <div className="break-inside-avoid mb-8 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    {item.type === 'image' ? (
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-auto object-cover"
      />
    ) : (
      <video
        src={item.src}
        controls
        className="w-full h-auto"
      />
    )}
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
        Learn More
      </button>
    </div>
  </div>
)

export default function TourismGallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    // Simulating API call to fetch gallery items
    setTimeout(() => {
      setItems([
        { id: '1', type: 'image', src: '/kun.jpg', alt: 'Tropical beach', title: 'Tropical Paradise', description: 'Experience the serenity of pristine beaches and crystal-clear waters.' },
        { id: '2', type: 'video', src: 'https://example.com/video1.mp4', alt: 'Mountain hiking', title: 'Alpine Adventure', description: 'Embark on an exhilarating journey through breathtaking mountain landscapes.' },
        { id: '3', type: 'image', src: '/placeholder.svg?height=500&width=400', alt: 'City skyline', title: 'Urban Exploration', description: 'Discover the vibrant energy and hidden gems of world-class cities.' },
        { id: '4', type: 'image', src: '/placeholder.svg?height=300&width=500', alt: 'Ancient ruins', title: 'Historical Wonders', description: 'Step back in time and marvel at the architectural feats of ancient civilizations.' },
        { id: '5', type: 'video', src: 'https://example.com/video2.mp4', alt: 'Wildlife safari', title: 'Safari Adventure', description: 'Get up close with majestic wildlife in their natural habitats.' },
        { id: '6', type: 'image', src: '/placeholder.svg?height=450&width=600', alt: 'Local cuisine', title: 'Culinary Delights', description: 'Indulge in a gastronomic journey through diverse and delicious local cuisines.' },
        { id: '7', type: 'image', src: '/placeholder.svg?height=400&width=300', alt: 'Cultural festival', title: 'Vibrant Traditions', description: 'Immerse yourself in colorful festivals and rich cultural experiences.' },
        { id: '8', type: 'video', src: 'https://example.com/video3.mp4', alt: 'Scuba diving', title: 'Underwater Wonders', description: 'Explore the mesmerizing beauty of coral reefs and marine life.' },
      ])
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Discover Amazing Places
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Embark on unforgettable journeys and create lasting memories with our curated travel experiences.
          </p>
        </header>
        {loading ? (
          <SkeletonGalleryLoader />
        ) : (
          <Masonry
            breakpointColumns={breakpointColumns}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {items.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </Masonry>
        )}
      </main>
    </div>
  )
}

