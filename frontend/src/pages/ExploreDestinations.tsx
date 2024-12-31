import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Loader } from 'lucide-react'
import { destinations } from '../components/page/destinations-data'
import { DestinationCard } from '../components/page/DestinationCard'
import { FeatureDialog } from '../components/page/FeatureDialog'
import SkeletonCard from '../Skelton/SkeletonCard'

const ExploreDestinations: React.FC = () => {
  const [visibleDestinations, setVisibleDestinations] = useState<Destination[]>(destinations.slice(0, 6))
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [isFeatureDialogOpen, setIsFeatureDialogOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleDestinations(prevDestinations => {
        const newDestinations = [...prevDestinations]
        const randomIndex = Math.floor(Math.random() * newDestinations.length)
        const replacementIndex = Math.floor(Math.random() * destinations.length)
        newDestinations[randomIndex] = destinations[replacementIndex]
        return newDestinations
      })
    }, 1000) // Change a random destination every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const openFeatureDialog = (destination: Destination) => {
    setSelectedDestination(destination)
    setIsFeatureDialogOpen(true)
  }

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 relative overflow-hidden" ref={containerRef}>
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY
        }}
      />
      <div className="absolute inset-0 bg-white/90 dark:bg-black/90 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Explore Incredible India
        </h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={`skeleton-${index}`} />
            ))
          ) : (
            visibleDestinations.map((destination) => (
              <DestinationCard 
                key={destination.id} 
                destination={destination}
                openFeatureDialog={openFeatureDialog}
              />
            ))
          )}
        </motion.div>
      </div>
      <FeatureDialog 
        isOpen={isFeatureDialogOpen}
        onClose={() => setIsFeatureDialogOpen(false)}
        destination={selectedDestination}
      />
    </section>
  )
}

export default ExploreDestinations

