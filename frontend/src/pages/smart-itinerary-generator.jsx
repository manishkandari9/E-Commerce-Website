import React from "react";

import { useState } from "react";

export default function SmartItineraryGenerator() {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [preferences, setPreferences] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const generatedItinerary = await generateItinerary(destination, parseInt(duration), preferences);
      setItinerary(generatedItinerary);
    } catch (error) {
      console.error("Failed to generate itinerary:", error);
      setItinerary("Sorry, we couldn't generate an itinerary at this time. Please try again later.");
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
        Smart Travel Itinerary Generator
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600">
            <h2 className="text-2xl font-semibold text-white">Your Travel Preferences</h2>
            <p className="text-indigo-100 mt-2">Tell us about your dream vacation</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <input
                  id="destination"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g., Paris, Tokyo, New York"
                  required
                />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (days)
                </label>
                <input
                  id="duration"
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g., 5"
                  required
                  min="1"
                />
              </div>
              <div>
                <label htmlFor="preferences" className="block text-sm font-medium text-gray-700 mb-1">
                  Travel Preferences
                </label>
                <textarea
                  id="preferences"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  placeholder="e.g., love art museums, enjoy local cuisine, prefer outdoor activities"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Generating..." : "Generate Itinerary"}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-green-500 to-teal-600">
            <h2 className="text-2xl font-semibold text-white">Your Personalized Itinerary</h2>
            <p className="text-green-100 mt-2">AI-generated travel plan based on your preferences</p>
          </div>
          <div className="p-6">
            {itinerary ? (
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: itinerary }} />
            ) : (
              <p className="text-gray-500 italic">Your itinerary will appear here once generated.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
