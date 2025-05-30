import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CalendarIcon, UsersIcon, BedDoubleIcon, CreditCardIcon, MapPinIcon, StarIcon } from 'lucide-react';
// import BookingSkeletonLoader from '../../Skelton/bookingSkeletonLoader';

const BookingPage = () => {
  const location = useLocation();
  const [destinations, setDestinations] = useState([]);  // New destinations for loading
  const [selectedDestination, setSelectedDestination] = useState(''); // From the URL params
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    
    // Fetching the query parameters (destination, image, description)
    const destination = searchParams.get('destination');
    const image = searchParams.get('image');
    const description = searchParams.get('description');

    if (destination) {
      setSelectedDestination(destination);
    }

    // Simulating an API call to get new destinations
    const fetchDestinations = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve([
          { name: 'Paris', rating: 4.8, price: '$200' },
          { name: 'Tokyo', rating: 4.9, price: '$250' },
          { name: 'New York', rating: 4.7, price: '$180' },
          { name: 'London', rating: 4.6, price: '$190' },
          { name: 'Bali', rating: 4.5, price: '$150' },
          { name: 'Rome', rating: 4.7, price: '$170' }
        ]), 2000)
      );
      setDestinations(response); // Updating destinations
      setLoading(false); // Stop loading
    };

    fetchDestinations(); // Call to fetch new destinations
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { selectedDestination, checkInDate, checkOutDate, guests, roomType });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Book Your Dream Vacation</h1>
          <BookingSkeletonLoader />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Book Your Dreams Vacations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="destination">
                    Destination
                  </label>
                  <select
                    id="destination"
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select Destination</option>
                    {destinations.map((dest) => (
                      <option key={dest.name} value={dest.name}>
                        {dest.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="checkIn">
                      Check-in
                    </label>
                    <input
                      id="checkIn"
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="checkOut">
                      Check-out
                    </label>
                    <input
                      id="checkOut"
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="guests">
                    Number of Guests
                  </label>
                  <input
                    id="guests"
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="roomType">
                    Room Type
                  </label>
                  <select
                    id="roomType"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select Room Type</option>
                    <option value="Standard">Standard</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Suite">Suites</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar with additional information */}
          <div className="col-span-1 space-y-8">
            {/* Destination Image */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={new URLSearchParams(location.search).get('image') || '/placeholder.svg'}
                alt={selectedDestination || 'Vacation destination'}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{selectedDestination || 'Select a Destination'}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {new URLSearchParams(location.search).get('description') || 'Discover your perfect getaway'}
                </p>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Bookings Summary</h3>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    {checkInDate ? `Check-in: ${checkInDate}` : 'Select check-in date'}
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    {checkOutDate ? `Check-out: ${checkOutDate}` : 'Select check-out date'}
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <UsersIcon className="h-5 w-5 mr-2" />
                    {`Guests: ${guests}`}
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <BedDoubleIcon className="h-5 w-5 mr-2" />
                    {roomType ? `Room: ${roomType}` : 'Select room type'}
                  </p>
                </div>
              </div>
            </div>

            {/* Top Destinations */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Top Destinations</h3>
                <ul className="space-y-2">
                  {destinations.slice(0, 3).map((dest) => (
                    <li key={dest.name} className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">{dest.name}</span>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{dest.rating}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
