import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import SkeletonGalleryLoader from '../Skelton/SkeletonGalleryLoader'


const GalleryItem = ({ item, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isHovered])

  return (
    <motion.div
      className={`bg-gradient-to-br from-gray-900 to-black dark:from-gray-800 dark:to-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-full">
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            src={item.src}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function BentoGallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    // Simulating API call to fetch gallery items
    setTimeout(() => {
      setItems([
        { id: '1', type: 'video', src: '/videos/tropical-beach.mp4', alt: 'Tropical beach', title: 'Tropical Paradise', description: 'Experience the serenity of pristine beaches.' },
        { id: '2', type: 'video', src: '/videos/mountain-hiking.mp4', alt: 'Mountain hiking', title: 'Alpine Adventure', description: 'Breathtaking mountain landscapes.' },
        { id: '3', type: 'image', src: '/dha.png?height=400&width=300', alt: 'Cultural festival', title: 'Vibrant Traditions', description: 'Immerse in cultural experiences.' },
        { id: '4', type: 'image', src: '/badri.jpg?height=400&width=300', alt: 'Scuba diving', title: 'Underwater Wonders', description: 'Explore marine life.' },
        { id: '5', type: 'image', src: '/aarti .jpg?height=400&width=800', alt: 'Wildlife safari', title: 'Safari Adventure', description: 'Get up close with majestic wildlife.' },
        { id: '6', type: 'image', src: '/dev.jpg?height=400&width=300', alt: 'Local cuisine', title: 'Culinary Delights', description: 'Indulge in local cuisines.' },
        { id: '7', type: 'video', src: '/videos/city-skyline.mp4', alt: 'City skyline', title: 'Urban Exploration', description: 'Discover vibrant cities.' },
        { id: '8', type: 'video', src: '/videos/ancient-ruins.mp4', alt: 'Ancient ruins', title: 'Historical Wonders', description: 'Marvel at ancient civilizations.' },
        { id: '9', type: 'image', src: 'kunjapuri.jpg?height=200&width=200', alt: 'Street Food', title: 'Street Delicacies', description: 'Explore local street food.' },
        { id: '10', type: 'image', src: '/aarti .jpg?height=200&width=200', alt: 'Fine Dining', title: 'Gourmet Experience', description: 'Luxury dining moments.' },
        { id: '11', type: 'image', src: '/Bungee.jpg?height=200&width=200', alt: 'Cooking Class', title: 'Cooking Adventures', description: 'Learn authentic recipes.' },
      ])
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 ${theme === 'dark' ? 'dark' : ''}`}>
      <main className="container mx-auto px-4 py-8">
        <motion.header
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Discover Amazing Places
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Embark on unforgettable journeys and create lasting memories with our curated travel experiences.
          </motion.p>
        </motion.header>
        {loading ? (
          <SkeletonGalleryLoader />
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 h-[800px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* First column */}
            <div className="md:row-span-2">
              <GalleryItem item={items[0]} className="h-full" />
            </div>
            <div className="md:row-span-2">
              <GalleryItem item={items[1]} className="h-full" />
            </div>
            
            {/* Top right small items */}
            <div className="md:col-span-2 grid grid-cols-3 gap-4">
              <GalleryItem item={items[2]} />
              <GalleryItem item={items[3]} />
              <GalleryItem item={items[4]} />
            </div>
            
            {/* Center large item */}
            <div className="md:col-span-2 md:row-span-2">
              <GalleryItem item={items[5]} className="h-full" />
            </div>
            
            {/* Bottom items */}
            <div className="md:row-span-2">
              <GalleryItem item={items[6]} className="h-full" />
            </div>
            <div className="md:row-span-2">
              <GalleryItem item={items[7]} className="h-full" />
            </div>

            {/* Bottom small items */}
            <div className="md:col-span-2 grid grid-cols-3 gap-4">
              <GalleryItem item={items[8]} />
              <GalleryItem item={items[9]} />
              <GalleryItem item={items[10]} />
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
}

