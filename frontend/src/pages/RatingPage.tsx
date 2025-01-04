import React, { useState } from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RatingPageProps {
  destination: {
    name: string;
    rating: number;
    image: string;
    description: string;
  };
  onClose: () => void;
}

const RatingPage: React.FC<RatingPageProps> = ({ destination, onClose }) => {
  const [userRating, setUserRating] = useState(0);
  const [recommendation, setRecommendation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the rating and recommendation to your backend
    console.log('User rating:', userRating);
    console.log('User recommendation:', recommendation);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
      >
        <button onClick={onClose} className="mb-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Destinations
        </button>
        <div className="aspect-video mb-6 rounded-lg overflow-hidden">
          <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{destination.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{destination.description}</p>
        <div className="flex items-center justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-10 h-10 ${
                star <= destination.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
          <span className="ml-4 text-2xl font-semibold text-gray-800 dark:text-white">
            {destination.rating.toFixed(1)}
          </span>
        </div>
        <AnimatePresence>
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Your Rating</label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-8 h-8 cursor-pointer ${
                        star <= userRating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                      onClick={() => setUserRating(star)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="recommendation" className="block text-gray-700 dark:text-gray-300 mb-2">Your Recommendation</label>
                <textarea
                  id="recommendation"
                  rows={4}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  value={recommendation}
                  onChange={(e) => setRecommendation(e.target.value)}
                  placeholder="Share your experience..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Submit Your Review
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600 dark:text-green-400"
            >
              Thank you for your review!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default RatingPage;

