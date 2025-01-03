'use client'
import React from 'react';

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe2, Cloud, Sun, Sunrise, Moon } from 'lucide-react'

export default function InteractiveGlobeSection() {
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'day' | 'evening' | 'night'>('day')
  const [weather, setWeather] = useState<'sunny' | 'cloudy' | 'rainy'>('sunny')
  const [activeStory, setActiveStory] = useState(0)

  // Simulate time of day changes
  useEffect(() => {
    const times = ['morning', 'day', 'evening', 'night']
    const interval = setInterval(() => {
      setTimeOfDay(times[Math.floor(Math.random() * times.length)] as any)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Simulate weather changes
  useEffect(() => {
    const weathers = ['sunny', 'cloudy', 'rainy']
    const interval = setInterval(() => {
      setWeather(weathers[Math.floor(Math.random() * weathers.length)] as any)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const stories = [
    {
      title: "Sarah's Adventure in Bali",
      description: "Discovered hidden waterfalls and ancient temples",
      mood: "Peaceful",
      rating: 4.8
    },
    {
      title: "Mountain Trek in Nepal",
      description: "Reached Everest Base Camp after 12 days",
      mood: "Challenging",
      rating: 4.9
    },
    {
      title: "Desert Safari in Dubai",
      description: "Stargazing and traditional dinner in the dunes",
      mood: "Exciting",
      rating: 4.7
    }
  ]

  const getBgColor = () => {
    switch (timeOfDay) {
      case 'morning':
        return 'from-orange-100 to-blue-200'
      case 'day':
        return 'from-blue-200 to-blue-400'
      case 'evening':
        return 'from-orange-300 to-purple-500'
      case 'night':
        return 'from-blue-900 to-purple-900'
      default:
        return 'from-blue-200 to-blue-400'
    }
  }

  const getWeatherIcon = () => {
    switch (weather) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-400" />
      case 'cloudy':
        return <Cloud className="h-8 w-8 text-gray-400" />
      case 'rainy':
        return <Cloud className="h-8 w-8 text-blue-400" />
    }
  }

  const getTimeIcon = () => {
    switch (timeOfDay) {
      case 'morning':
        return <Sunrise className="h-8 w-8 text-orange-400" />
      case 'day':
        return <Sun className="h-8 w-8 text-yellow-400" />
      case 'evening':
        return <Sunrise className="h-8 w-8 text-orange-500" />
      case 'night':
        return <Moon className="h-8 w-8 text-blue-200" />
    }
  }

  return (
    <section className={`min-h-screen relative overflow-hidden bg-gradient-to-b ${getBgColor()} transition-colors duration-1000`}>
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Travel Like Never Before
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Immerse yourself in a unique journey where time, weather, and stories create your perfect adventure
          </p>
        </motion.div>

        {/* Interactive Globe */}
        <motion.div
          className="relative w-64 h-64 mx-auto mb-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Globe2 className="w-full h-full text-white/80" />
          <div className="absolute top-0 right-0">
            {getWeatherIcon()}
          </div>
          <div className="absolute top-0 left-0">
            {getTimeIcon()}
          </div>
        </motion.div>

        {/* Travel Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence>
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: activeStory === index ? [0, 5, -5, 0] : 0
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-6 backdrop-blur-md bg-white/10 border-none text-white rounded-lg shadow-lg hover:bg-white/20 transition-colors cursor-pointer"
                onClick={() => setActiveStory(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-white/80 mb-4">{story.description}</p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-white/20">
                    {story.mood}
                  </span>
                  <span className="flex items-center gap-1">
                    ⭐ {story.rating}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Elements */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/90 text-lg mb-6">
            Current Mood: {timeOfDay} • {weather}
          </p>
          <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-colors">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}
