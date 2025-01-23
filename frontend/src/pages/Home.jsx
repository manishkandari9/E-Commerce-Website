import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import ExploreDestinations from './ExploreDestinations';
import Featured from './Featured';
import AttractionsPage from './attractions-page';
import TourismGallery from './TourismGallery';
import { TourismSection } from './TourismSection';
import ContactPage from './contact-page';
import InteractiveGlobeSection from './interactive-globe-section';
import Footer from '../components/page/footer';
import SmartItineraryGenerator from './smart-itinerary-generator';
import SkeletonLoader, { SkeletonText, SkeletonTitle, SkeletonButton, SkeletonImage } from '../Skelton/SkeletonLoader';

function Button({ variant, className, children, ...props }) {
  const baseStyle = "px-4 py-2 rounded text-lg font-semibold focus:outline-none transition-all duration-300";
  const variants = {
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
    solid: "bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl",
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
const openSlide = (index) => {
  console.log(`Opening page for slide ${index + 1}`);
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);

  const slides = [
    "/raft.jpg",
    '/camping.jpg',
    "/bungeer.jpg",
    '/aarti .jpg',
  ];
  const slideTexts = [
    {
      title: "Thrilling River Rafting",
      subtitle: "Ride the Rapids",
      description: "Conquer the wild rapids of Rishikesh's Ganges River. Guided by experts, embrace the adrenaline and beauty of this exhilarating water adventure."
    },
    
    {
      title: "Serene Camping Escape",
      subtitle: "Under Rishikesh Skies",
      description: "Reconnect with nature as you camp by Rishikesh's scenic landscapes. Enjoy starry nights, bonfires, and tranquil riverside vibes for an unforgettable outdoor adventure."
    },
    {
      title: "Exhilarating Bungee Jumping",
      subtitle: "Rishikesh Heights",
      description: "Take the ultimate leap from Rishikesh’s iconic cliffs. Feel the rush of free fall as our safety-certified experts guide you through this once-in-a-lifetime adventure."
    },
    
    {
      title: "Sacred Ganga Aarti!",
      subtitle: "Spiritual Rishikesh",
      description: "Immerse yourself in the divine ambiance of Ganga Aarti. Witness the mesmerizing rituals, chanting, and glowing diyas that illuminate the sacred banks of the Ganges."
    }
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative h-[580px] sm:h-[580px] md:h-[600px] lg:h-[750px] w-full overflow-hidden bg-gradient-to-r from-white via-gray-300 to-gray-400 dark:from-black dark:via-gray-800 dark:to-black">
        <Navbar />
    
        {/* Background Image with Skeleton Loader */}
        <div className="absolute inset-0 mt-[70px]">
          <div className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
            <SkeletonImage className="w-full h-full" />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <img
              src={slides[currentSlide]}
              alt="Adventure background"
              className="object-cover w-full h-full"
              style={{ filter: "brightness(0.8) saturate(1.5) contrast(1.2)", }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900/50 to-black/20" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          {/* Mobile and Tablet View */}
          <div className="lg:hidden w-full mt-[12px] pb-4 relative">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            > 
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full snap-center px-4"
                >
                  <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
                    <div className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
                      <SkeletonImage className="w-full h-full rounded-xl" />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                      <img
                        src={slide}
                        alt={slideTexts[index].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-blue-900/50 to-transparent" />
                    <div className="absolute bottom-0 w-full p-6">
                      <h2 className="text-white text-2xl font-bold mt-4 mb-2 font-serif">
                        {isLoading ? (
                          <SkeletonTitle className="w-3/4" />
                        ) : (
                          <span className="animate-fade-in">{slideTexts[index].title}</span>
                        )}
                      </h2>
                      <h3 className="text-yellow-400 text-xl font-semibold mt-2 mb-2">
                        {isLoading ? (
                          <SkeletonTitle className="w-1/2" />
                        ) : (
                          <span className="animate-fade-in">{slideTexts[index].subtitle}</span>
                        )}
                      </h3>
                      <div className="relative">
                        {isLoading ? (
                          <div className="text-white/90 text-sm mb-2 mt-2 line-clamp-4 pr-14">
                            <SkeletonText className="w-full mb-1" />
                            <SkeletonText className="w-5/6 mb-1" />
                            <SkeletonText className="w-4/5" />
                          </div>
                        ) : (
                          <p className="text-white/90 text-sm mb-2 mt-2 line-clamp-4 pr-14">
                            <span className="animate-fade-in">{slideTexts[index].description}</span>
                          </p>
                        )}
                        <div className="absolute right-0 bottom-0">
                          {isLoading ? (
                            <SkeletonLoader className="w-10 h-10 rounded-full" />
                          ) : (
                            <button
                              onClick={() => openSlide(index)}
                              className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 animate-fade-in"
                            >
                              <ChevronRight className="h-5 w-5 text-black" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows for Mobile */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 flex items-center justify-center">
              {isLoading ? (
                <SkeletonLoader className="w-6 h-6 rounded-full" />
              ) : (
                <button onClick={prevSlide} className="w-full h-full flex items-center justify-center">
                  <ChevronLeft className="h-6 w-6 text-black animate-fade-in" />
                </button>
              )}
            </div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 flex items-center justify-center">
              {isLoading ? (
                <SkeletonLoader className="w-6 h-6 rounded-full" />
              ) : (
                <button onClick={nextSlide} className="w-full h-full flex items-center justify-center">
                  <ChevronRight className="h-6 w-6 text-black animate-fade-in" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:flex relative z-10 h-full items-center pl-20">
            <div className="w-1/2 pr-12 mt-20">
              {isLoading ? (
                <>
                  <SkeletonTitle className="w-1/2 mb-2" />
                  <SkeletonTitle className="w-3/4 mb-4" />
                  <SkeletonText className="w-2/3 mb-2" />
                  <SkeletonText className="w-3/5 mb-2" />
                  <SkeletonText className="w-4/5 mb-6" />
                  <div className="flex items-center gap-4">
                    <SkeletonButton className="w-48" />
                    <SkeletonButton className="w-40" />
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-orange-400 text-2xl font-semibold mb-2 animate-fade-in">
                    {slideTexts[currentSlide].subtitle}
                  </h2>
                  <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
                    {slideTexts[currentSlide].title}
                  </h1>
                  <p className="text-gray-200 mb-6 text-lg md:text-xl opacity-95 animate-fade-in">
                    {slideTexts[currentSlide].description}
                  </p>
                  <div className="flex items-center gap-4 animate-fade-in">
                    <Button variant="solid">
                      START YOUR ADVENTURE
                    </Button>
                    <Button variant="outline">
                      LEARN MORE
                    </Button>
                  </div>
                </>
              )}
            </div>
            {/* Right Content - Carousel */}
            <div className="w-full md:w-[54%] flex items-center mt-44">
              <div className="w-full">
                <div className="relative">
                <div className="flex mt-32 relative">
                <div className="overflow-hidden flex gap-[8px] relative w-[840px] h-[220px] mb-4">
                      {slides.map((slide, index) => (
                        <div
                         key={index}
                         className={`transition-all duration-500 ease-in-out absolute ${
                          index === currentSlide
                          ? 'z-20 left-0 scale-100'
                          : index === (currentSlide + 1) % slides.length
                          ? 'z-10 left-[168px]'
                          : index === (currentSlide + 2) % slides.length
                          ? 'z-0 left-[336px]'
                          : 'z-30 left-[504px] scale-95 opacity-50'
                        }`}
                        > 
                        <div
                        className={`w-full h-full transition-opacity duration-500 ${
                    
                        isLoading ? 'opacity-100' : 'opacity-0'
                        }`}                    
                        >
                   <SkeletonImage className="rounded-3xl h-[180px] w-[160px]" />
                </div>
                
                 <div
                 className={`absolute inset-0 transition-opacity duration-500 ${                  
                  isLoading ? 'opacity-0' : 'opacity-100'                
                }`}                
                >
                  <img                  
                  src={slide}                  
                  alt={`Adventure slide ${index + 1}`}                    
                  className="rounded-xl object-cover h-[180px] w-[160px] shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out mt-8 border border-gray-200"
                  />
                  </div>
                </div>              
              ))}
              </div>
              </div>
                  {/* Navigation Arrows and Number */}
                  <div className="flex items-center gap-8">
                    <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                      {isLoading ? (
                        <SkeletonLoader className="w-6 h-6 rounded-full" />
                      ) : (
                        <button
                          onClick={prevSlide}
                          className="w-full h-full flex items-center justify-center text-white hover:bg-white/10 transition-colors animate-fade-in"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                      )}
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                      {isLoading ? (
                        <SkeletonLoader className="w-6 h-6 rounded-full" />
                      ) : (
                        <button
                          onClick={nextSlide}
                          className="w-full h-full flex items-center justify-center text-white hover:bg-white/10 transition-colors animate-fade-in"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      )}
                    </div>
                    <div className="border-t-2 border-white/30 w-96" />

                    {/* Navigation Number */}
                    <div className="h-16 w-20 flex items-center justify-center rounded-full">
                      {isLoading ? (
                        <SkeletonLoader className="h-16 w-20 rounded-full" />
                      ) : (
                        <div className="text-6xl font-bold text-white dark:text-gray-200 animate-fade-in">
                          0{currentSlide + 1}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <ExploreDestinations />
      <Featured />
      <AttractionsPage/>
      <TourismGallery/>
      <TourismSection/>
      <InteractiveGlobeSection/>
      <SmartItineraryGenerator/>
      <ContactPage/>
      <Footer />
    </>
  );
}
