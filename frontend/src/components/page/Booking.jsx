'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, DollarSign } from 'lucide-react'

const Booking = ({ destination }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    paymentMethod: 'credit-card'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', bookingDetails)
    alert('Booking submitted successfully!')
  }

  // Inline Button component
  const Button = ({ children, ...props }) => (
    <button
      {...props}
      className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
    >
      {children}
    </button>
  )

  // Inline Input component
  const Input = ({ ...props }) => (
    <input
      {...props}
      className="w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring focus:ring-blue-500"
    />
  )

  // Inline Label component
  const Label = ({ children, htmlFor }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
      {children}
    </label>
  )

  // Inline RadioGroup components
  const RadioGroup = ({ children, name, onValueChange }) => {
    const handleChange = (e) => {
      onValueChange(e.target.value)
    }
    return <div onChange={handleChange}>{children}</div>
  }
  const RadioGroupItem = ({ id, value, ...props }) => (
    <input type="radio" id={id} value={value} {...props} />
  )

  // Inline Select components
  const Select = ({ children, name, onValueChange }) => {
    const handleChange = (e) => {
      onValueChange(e.target.value)
    }
    return (
      <select
        name={name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
      >
        {children}
      </select>
    )
  }
  const SelectItem = ({ value, children }) => (
    <option value={value}>{children}</option>
  )

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={destination.image} alt={destination.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{destination.name}</div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{destination.description}</p>
            <div className="mt-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Duration: {destination.details.duration}</p>
              </div>
              <div className="flex items-center mt-2">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Best for: {destination.details.groupSize}</p>
              </div>
              <div className="flex items-center mt-2">
                <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Price: {destination.price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-6 bg-gray-50 dark:bg-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Book Your Trip</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" type="text" required onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" required onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="date">Travel Date</Label>
              <Input id="date" name="date" type="date" required onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="guests">Number of Guests</Label>
              <Select name="guests" onValueChange={(value) => handleInputChange({ target: { name: 'guests', value }})}>
                {[1, 2, 3, 4, 5].map(num => (
                  <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <Label>Payment Method</Label>
              <RadioGroup name="paymentMethod" onValueChange={(value) => handleInputChange({ target: { name: 'paymentMethod', value }})}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full">
              Confirm Booking
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Booking
