import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface DynamicPricingProps {
  basePrice: number;
  onPriceClick: () => void;
}

export const DynamicPricing: React.FC<DynamicPricingProps> = ({ basePrice, onPriceClick }) => {
  const [price, setPrice] = useState(basePrice)

  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = Math.random() * 200 - 100 // Random number between -100 and 100
      setPrice(Math.max(basePrice + fluctuation, basePrice * 0.9)) // Ensure price doesn't go below 90% of base price
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [basePrice])

  return (
    <motion.div
      className="text-2xl font-bold text-green-600 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onPriceClick}
    >
      ₹{Math.round(price).toLocaleString('en-IN')}
    </motion.div>
  )
}

