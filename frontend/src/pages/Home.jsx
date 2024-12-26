import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

function Button({ variant, className, children, ...props }) {
  const baseStyle = "px-4 py-2 rounded text-lg font-semibold focus:outline-none";
  const variants = {
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    solid: "bg-blue-600 text-white hover:bg-blue-700",
  };

  return (
    <button
      {...props}
      className={`${baseStyle} ${variants[variant] || variants.outline} ${className}`}
    >
      {children}
    </button>
  );
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null); // Reference to the carousel container

  const slides = [
    "/kun.jpg",
    '/dha.png',
    "/kun.jpg",
    '/dha.png',
  ];

  const slideTexts = [
    { 
      title: "Thrilling River Rafting",
      subtitle: "Rishikesh Adventure",
      description: "Experience the adrenaline rush of navigating through Rishikesh's wild rapids. Our expert guides ensure a safe and unforgettable journey through the sacred Ganges."
    },
    { 
      title: "Scenic Mountain Trekking",
      subtitle: "Himalayan Expedition",
      description: "Embark on a breathtaking trek through the majestic Himalayas. Discover hidden trails, stunning vistas, and the rich culture of mountain communities."
    },
    { 
      title: "Exhilarating Paragliding",
      subtitle: "Soar Above the Peaks",
      description: "Take to the skies and witness the beauty of the mountains from a bird's eye view. Our certified instructors provide a safe and thrilling paragliding experience."
    },
    { 
      title: "Serene Yoga Retreats",
      subtitle: "Find Inner Peace",
      description: "Rejuvenate your mind, body, and soul in the spiritual heart of India. Join our expert-led yoga sessions amidst the tranquil Himalayan landscape."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Scroll to next slide
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth, // Scroll by the width of one slide
        behavior: 'smooth',
      });
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Scroll to previous slide
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth, // Scroll by the width of one slide
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);  // Auto-slide every 5 seconds
    return () => clearInterval(interval);  // Clear interval on component unmount
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Navbar />

      {/* Background Image for Desktop */}
      <div className="absolute inset-0 mt-[70px] hidden lg:block">
        <img
          src={slides[currentSlide]}
          alt="Adventure background"
          className="object-cover w-full h-full transition-opacity duration-500"
          style={{ filter: "brightness(0.95)" }} // Adds a darkening filter to enhance text readability
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" /> {/* Adds a gradient overlay */}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Mobile and Tablet View */}
        <div className="lg:hidden w-full mt-[90px] pb-8 relative">
          <div 
            ref={carouselRef} // Reference the carousel container here
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {slides.map((slide, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full snap-center px-4"
              >
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={slide}
                    alt={slideTexts[index].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 w-full p-6">
                    <h2 className="text-white text-2xl font-bold mt-4 mb-2 font-serif">
                      {slideTexts[index].title}
                    </h2>
                    <h3 className="text-yellow-400 text-xl font-semibold mt-2 mb-2">
                      {slideTexts[index].subtitle}
                    </h3>
                    <div className="relative">
                      <p className="text-white/90 text-sm mb-2 mt-2 line-clamp-4 pr-14">
                        {slideTexts[index].description}
                      </p>
                      <button
                        onClick={nextSlide}
                        className="absolute right-1 bottom-6 top-12 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-all duration-300"> 
                        <ChevronRight className="h-5 w-5 text-black"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows for Mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 flex items-center justify-center"
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex relative z-10 flex-col md:flex-row">
          {/* Left Content */}
          <div className="w-full md:w-[45%] px-6 md:px-20 flex flex-col justify-center mt-[10vh] z-20 mt-48">
            <h2 className="text-yellow-400 text-2xl font-semibold mb-2">
              {slideTexts[currentSlide].subtitle}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif">
              {slideTexts[currentSlide].title}
            </h1>
            <p className="text-gray-200 mb-8 text-lg md:text-xl opacity-90">
              {slideTexts[currentSlide].description}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-black">→</span>
              </div>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors text-lg px-8"
              >
                START YOUR ADVENTURE
              </Button>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="w-full md:w-[55%] flex items-center mt-48">
            <div className="w-full">
              <div className="relative">
                <div className="flex gap-4 mt-64">
                  <div className="overflow-hidden flex gap-4 relative w-[840px] h-[250px]">
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-500 ease-in-out absolute ${
                          index === currentSlide
                            ? 'z-20 left-0 scale-105'
                            : index === (currentSlide + 1) % slides.length
                            ? 'z-10 left-[210px]'
                            : index === (currentSlide + 2) % slides.length
                            ? 'z-0 left-[420px]'
                            : 'z-30 left-[630px] scale-95 opacity-50'
                        }`}
                      >
                        <img
                          src={slide}
                          alt={`Adventure slide ${index + 1}`}
                          className="rounded-xl object-cover h-[250px] w-[200px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-8 mt-6">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  <div className="border-t-2 border-white/30 w-96" />
                  <div className="text-6xl font-bold text-white"> 
                    0{currentSlide + 1}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
