import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TourismSkeleton } from '../Skelton/TourismSkeleton'

// Define icons as SVG components with vibrant colors
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
)

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

const Button = ({ children, variant = 'default', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary"
  }
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} px-4 py-2`} {...props}>
      {children}
    </button>
  )
}

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
    {children}
  </span>
)

const Tabs = ({ children }) => (
  <div className="space-y-4">{children}</div>
)

const TabsList = ({ children }) => (
  <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
    {children}
  </div>
)

const TabsTrigger = ({ children, isActive, onClick }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
      isActive
        ? "bg-background text-foreground shadow-sm"
        : "hover:bg-muted hover:text-foreground"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
)

const TabsContent = ({ children, value, activeValue }) => (
  <div className={value === activeValue ? "mt-2" : "hidden mt-2"}>{children}</div>
)

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <Button
        variant="outline"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white"
        onClick={goToPrevious}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        variant="outline"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white"
        onClick={goToNext}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  )
}

export function TourismSection() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('events')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  if (loading) {
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto">
          <TourismSkeleton />
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Discover Our Vibrant City</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Experience the best of local culture and attractions</p>
        </div>

        <Tabs>
          <TabsList className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-lg">
            <TabsTrigger
              isActive={activeTab === 'events'}
              onClick={() => setActiveTab('events')}
              className={`${activeTab === 'events' ? 'bg-indigo-500 text-white' : 'text-gray-600 dark:text-gray-300'} px-6 py-2 rounded-full transition-colors duration-200`}
            >
              Events & Festivals
            </TabsTrigger>
            <TabsTrigger
              isActive={activeTab === 'blog'}
              onClick={() => setActiveTab('blog')}
              className={`${activeTab === 'blog' ? 'bg-indigo-500 text-white' : 'text-gray-600 dark:text-gray-300'} px-6 py-2 rounded-full transition-colors duration-200`}
            >
              Blog & Travel Guides
            </TabsTrigger>
          </TabsList>
          <TabsContent value="events" activeValue={activeTab}>
            <AnimatePresence mode="wait">
              <motion.div
                key="events"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Upcoming Events and Festivals</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {events.map((event, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-200 hover:scale-105">
                        <div className="p-6">
                          <h4 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{event.title}</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <MapPinIcon className="h-4 w-4 mr-2" />
                              <span>{event.location}</span>
                            </div>
                            <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">{event.category}</Badge>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </TabsContent>
          <TabsContent value="blog" activeValue={activeTab}>
            <AnimatePresence mode="wait">
              <motion.div
                key="blog"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Latest Blog Posts and Travel Guides</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {blogPosts.map((post, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-200 hover:scale-105">
                        <ImageCarousel images={post.images} />
                        <div className="p-6">
                          <h4 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{post.title}</h4>
                          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <div className="flex items-center">
                              <UserIcon className="h-4 w-4 mr-2" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <ClockIcon className="h-4 w-4 mr-2" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">{post.category}</Badge>
                            <Button variant="link" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">Read More</Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

const events = [
  {
    title: "Summer Music Festival",
    date: "July 15-17, 2023",
    description: "Annual music festival featuring local and international artists across multiple genres.",
    location: "City Park",
    category: "Music"
  },
  {
    title: "Food and Wine Expo",
    date: "August 5-7, 2023",
    description: "Explore local cuisines and world-class wines in this gastronomic adventure.",
    location: "Convention Center",
    category: "Food & Drink"
  },
  {
    title: "Cultural Heritage Day",
    date: "September 22, 2023",
    description: "Celebrate the rich cultural heritage of our region with traditional performances and exhibitions.",
    location: "Old Town Square",
    category: "Culture"
  },
  {
    title: "Tech Innovation Summit",
    date: "October 10-12, 2023",
    description: "Join industry leaders and innovators to explore the latest in technology and digital trends.",
    location: "Tech Hub",
    category: "Technology"
  },
  {
    title: "Autumn Arts Fair",
    date: "November 4-5, 2023",
    description: "Showcase of local and regional artists featuring paintings, sculptures, and interactive installations.",
    location: "City Gallery",
    category: "Art"
  },
  {
    title: "Winter Wonderland Festival",
    date: "December 15-31, 2023",
    description: "Magical winter festival with ice skating, holiday markets, and festive performances.",
    location: "Central Plaza",
    category: "Seasonal"
  }
]

const blogPosts = [
  {
    title: "10 Hidden Gems in Our City",
    author: "Emma Thompson",
    date: "June 1, 2023",
    category: "Travel Tips",
    excerpt: "Discover the lesser-known attractions that make our city unique and unforgettable.",
    images: ["/dha.png?height=300&width=400", "/dev.jpg?height=300&width=400", "/dha.png?height=300&width=400"]
  },
  {
    title: "Best Seasons to Visit",
    author: "Michael Chen",
    date: "May 15, 2023",
    category: "Seasonal Advice",
    excerpt: "Plan your trip with our guide to the best times to visit for different activities and experiences.",
    images: ["/camping.jpg?height=300&width=400", "/camping.jpg?height=300&width=400", "/camping.jpg?height=300&width=400"]
  },
  {
    title: "Local Cuisine: A Foodie's Guide",
    author: "Sophie Martin",
    date: "April 28, 2023",
    category: "Food & Drink",
    excerpt: "Explore the flavors of our region with this comprehensive guide to local dishes and restaurants.",
    images: ["/camping.jpg?height=300&width=400", "/camping.jpg?height=300&width=400", "/camping.jpg?height=300&width=400"]
  },
  {
    title: "Outdoor Adventures: Hiking Trails",
    author: "Alex Johnson",
    date: "April 10, 2023",
    category: "Nature",
    excerpt: "Discover the most scenic hiking trails in and around our city for all skill levels.",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"]
  },
  {
    title: "Art Walk: Exploring Street Murals",
    author: "Olivia Lee",
    date: "March 22, 2023",
    category: "Art & Culture",
    excerpt: "Take a visual journey through our city's vibrant street art scene and the stories behind the murals.",
    images: ["/aarti .jpg?height=300&width=400", "/aarti .jpg?height=300&width=400", "/aarti .jpg?height=300&width=400"]
  },
  {
    title: "Family-Friendly Attractions",
    author: "David Wilson",
    date: "March 5, 2023",
    category: "Family Travel",
    excerpt: "Plan the perfect family vacation with our guide to kid-friendly attractions and activities.",
    images: ["/bungeer.jpg?height=300&width=400", "/bungeer.jpg?height=300&width=400", "/bungeer.jpg?height=300&width=400"]
  }
]

