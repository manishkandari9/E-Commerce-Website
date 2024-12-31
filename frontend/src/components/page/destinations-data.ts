export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  details: {
    duration: string;
    bestTime: string;
    groupSize: string;
  };
  price: number;
  rating: number;
}

// Generate 60 dynamic destinations with randomized data
export const destinations: Destination[] = [
  ...Array(60).fill(null).map((_, index) => ({
    id: `dest-${index + 1}`,
    name: `Destination ${index + 1}`,
    description: `Experience the beauty and culture of Destination ${index + 1}, one of India's hidden gems.`,
    image: `/placeholder.svg?height=400&width=600&text=Destination ${index + 1}`,
    details: {
      duration: `${Math.floor(Math.random() * 7) + 1}-${Math.floor(Math.random() * 7) + 1} days`,
      bestTime: ["Spring", "Summer", "Autumn", "Winter"][Math.floor(Math.random() * 4)],
      groupSize: ["Any", "Couples", "Small groups", "Large groups"][Math.floor(Math.random() * 4)],
    },
    price: Math.floor(Math.random() * 10000) + 1000,
    rating: Number((Math.random() * (5 - 3.5) + 3.5).toFixed(1)), // Random rating between 3.5 and 5
  })),
  // Add hardcoded destinations
  {
    id: "dest-61",
    name: "Destination A",
    description: "Experience the beauty of Destination A.",
    image: "/dha.jpg",
    details: {
      duration: "3-4 days",
      bestTime: "Summer",
      groupSize: "Small groups",
    },
    price: 5000,
    rating: 4.5,
  },
  {
    id: "dest-62",
    name: "Destination B",
    description: "Explore the wonders of Destination B.",
    image: "/kun.jpg",
    details: {
      duration: "2-5 days",
      bestTime: "Autumn",
      groupSize: "Couples",
    },
    price: 3000,
    rating: 4.2,
  },
  {
    id: "dest-63",
    name: "Destination C",
    description: "Discover the hidden gems of Destination C.",
    image: "/dev.jpg",
    details: {
      duration: "5-7 days",
      bestTime: "Winter",
      groupSize: "Any",
    },
    price: 8000,
    rating: 4.7,
  },
];
