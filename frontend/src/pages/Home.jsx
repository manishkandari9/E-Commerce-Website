import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const Home = () => {
  const [images, setImages] = useState([
    "RaftinginRishikesh.jpg", // Example images, replace with actual URLs
    "",
    "",
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const textArray = [
    "Explore Your Travel Moments in 3D",
    "Discover Hidden Gems Across the World",
    "Experience the Beauty of Travel",
    "River Rafting",
    "Your Adventure Starts Here"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Simulating dynamic image and text change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 5000); // Change image and text every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images, textArray]);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with gap between Navbar and the content */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden mt-16"> {/* Added mt-16 here */}
        {/* Left side - Text content */}
        <div className="flex items-center justify-center p-8 lg:pl-16 text-white z-10">
          <div>
            {/* Animated Title */}
            <motion.h1
              key={currentTextIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {textArray[currentTextIndex]}
            </motion.h1>

            {/* Animated Description */}
            <motion.p
              key={`description-${currentTextIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="text-xl md:text-2xl mb-8"
            >
              Immerse yourself in your travel memories in stunning 3D
            </motion.p>

            {/* Explore More Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 text-lg"
            >
              Explore More
            </motion.button>
          </div>
        </div>

        {/* Right side - Dynamic Background Image */}
        <div className="relative">
          <motion.img
            src={images[currentImageIndex]}
            alt="Dynamic Background"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
          />
        </div>
      </div>

      {/* Main Content Section */}
      {/* <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your 3D Travel Experience</h1>
        <p className="text-xl mb-4">
          Immerse yourself in your travel memories with our 3D gallery. Each cube represents a cherished moment from your adventures.
        </p>
      </main> */}
    </div>
  );
}

export default Home;
