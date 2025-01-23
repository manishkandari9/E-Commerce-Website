"use client";

import React, { useState } from "react";

export default function SmartItineraryGenerator() {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [preferences, setPreferences] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      const generatedItinerary = `
        <h3 class="text-xl font-semibold mb-2">Your ${duration}-day trip to ${destination}</h3>
        <p class="mb-4">Based on your preferences: ${preferences}</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Day 1: Arrival and city tour</li>
          <li>Day 2: Visit to local attractions</li>
          <li>Day 3: Day trip to nearby landmarks</li>
          ${
            Number(duration) > 3
              ? `<li>Day 4: Free day for ${preferences || "relaxation and exploration"}</li>`
              : ""
          }
          ${
            Number(duration) > 4
              ? `<li>Day 5: Departure and souvenir shopping</li>`
              : ""
          }
        </ul>
      `;
      setItinerary(generatedItinerary);
      setIsLoading(false);
    }, 2000); // Simulate 2-second delay
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
        Smart Travel Itinerary Generator
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Travel Preferences Form */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600">
            <h2 className="text-2xl font-semibold text-white">Your Travel Preferences</h2>
            <p className="text-indigo-100 mt-2">Tell us about your dream vacation</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Destination Field */}
              <div>
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
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
              {/* Duration Field */}
              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
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
              {/* Preferences Field */}
              <div>
                <label
                  htmlFor="preferences"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
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
              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </span>
                ) : (
                  "Generate Itinerary"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Generated Itinerary Display */}
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
