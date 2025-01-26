import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: "Himalayan Peaks Expedition",
    description: "Scale the majestic heights of the Himalayas with our expert guides. Experience breathtaking views and the thrill of conquering some of the world's highest peaks.",
    image: "/aarti .jpg",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Sacred Ganges River Cruise",
    description: "Embark on a spiritual journey along the holy Ganges River. Witness ancient rituals, visit historic temples, and immerse yourself in India's rich cultural heritage.",
    image: "/Bungee.jpg",
    color: "from-orange-400 to-pink-500",
  },
  {
    title: "Wildlife Safari Adventure",
    description: "Explore India's diverse wildlife in their natural habitats. Spot tigers, elephants, and exotic birds in lush national parks guided by experienced naturalists.",
    image: "/wildlife-safari.jpg",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Rajasthan Desert Camel Treks",
    description: "Journey through the goldens sands of Rajasthan on a traditional camel trek. Experience the romance of desert nights and the hospitality of local communities.",
    image: "/dha.png",
    color: "from-yellow-400 to-amber-500",
  },
];

export default function Featured() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">Features Experiences</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="relative h-[600px] overflow-hidden rounded-xl shadow-2xl">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeExperience ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-75`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-4">{exp.title}</h3>
                    <p className="text-lg">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">Choose Your Adventures</h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer mb-4 transition-colors ${
                    index === activeExperience ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveExperience(index)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-medium text-black dark:text-white">{exp.title}</h4>
                    <ChevronRight className={`w-6 h-6 transition-transform ${
                      index === activeExperience ? 'transform rotate-90' : ''
                    }`} />
                  </div>
                  {index === activeExperience && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-600 dark:text-gray-300"
                    >
                      {exp.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}
              <motion.button
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Books Your Experiences
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
