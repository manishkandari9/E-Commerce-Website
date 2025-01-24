"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Plane, Hotel, Utensils, Camera, MapPin, Calendar, DollarSign, List } from "lucide-react";

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md text-white font-bold ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className, ...props }) => (
  <input
    className={`border border-gray-300 rounded-md px-4 py-2 w-full ${className}`}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`border border-gray-300 rounded-md px-4 py-2 w-full ${className}`}
    {...props}
  />
);

const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md ${className}`}>{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`p-4 rounded-t-lg ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);

const CardDescription = ({ children, className }) => (
  <p className={`text-sm ${className}`}>{children}</p>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Tabs = ({ children, className, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.type === TabsContent) {
          return React.cloneElement(child, { activeTab });
        }
        return child;
      })}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab }) => (
  <div className="flex">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

const TabsTrigger = ({ children, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-4 py-2 border-b-2 ${
      activeTab === value ? "border-indigo-500" : "border-transparent"
    }`}
  >
    {children}
  </button>
);

const TabsContent = ({ children, value, activeTab }) =>
  activeTab === value ? <div>{children}</div> : null;

export default function SmartItineraryGenerator() {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [preferences, setPreferences] = useState("");
  const [budget, setBudget] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const generatedItinerary = await generateItinerary(destination, duration, preferences, budget);
      setItinerary(generatedItinerary);
    } catch (err) {
      setError("Failed to generate itinerary. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <motion.h1
        className="text-5xl font-bold text-center mb-8 text-indigo-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Smart Travel Itinerary Generator
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardTitle>Your Travel Preferences</CardTitle>
              <CardDescription>Design your dream vacation</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-indigo-500" />
                  <Input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Destination"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-indigo-500" />
                  <Input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration (days)"
                    required
                    min="1"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <List className="text-indigo-500" />
                  <Textarea
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                    placeholder="Travel Preferences"
                    rows={4}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="text-indigo-500" />
                  <Input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Budget (USD)"
                    min="0"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Crafting your journey...
                    </>
                  ) : (
                    "Generate Itinerary"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:row-span-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl h-full">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
              <CardTitle>Your Personalized Itinerary</CardTitle>
              <CardDescription>AI-crafted travel plan</CardDescription>
            </CardHeader>
            <CardContent className="p-6 overflow-auto max-h-[calc(100vh-20rem)]">
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {itinerary ? (
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: itinerary }}
                />
              ) : (
                <p className="text-gray-500 italic text-center">
                  Your adventure awaits! Generate an itinerary to see it here.
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Tabs defaultValue="tips" className="w-full">
            <TabsList>
              <TabsTrigger value="tips">Travel Tips</TabsTrigger>
              <TabsTrigger value="weather">Weather</TabsTrigger>
            </TabsList>
            <TabsContent value="tips">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Travel Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Plane className="mr-2 h-4 w-4 text-indigo-500" /> Book
                      flights in advance for better deals
                    </li>
                    <li className="flex items-center text-sm">
                      <Hotel className="mr-2 h-4 w-4 text-indigo-500" /> Compare
                      hotel prices across multiple platforms
                    </li>
                    <li className="flex items-center text-sm">
                      <Utensils className="mr-2 h-4 w-4 text-indigo-500" />{" "}
                      Research local cuisines and must-try dishes
                    </li>
                    <li className="flex items-center text-sm">
                      <Camera className="mr-2 h-4 w-4 text-indigo-500" /> Pack a
                      portable charger for your devices
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="weather">
              <Card>
                <CardHeader>
                  <CardTitle>Weather Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-gray-500">
                    Enter a destination to see the weather forecast.
                  </p>
                  {/* Weather component would go here */}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
