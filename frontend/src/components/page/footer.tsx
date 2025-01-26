import React from 'react'
import { useState, useEffect } from 'react'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import FooterSkeleton from '../../Skelton/footer-skeleton'

export default function Footer() {
  const [loadingState, setLoadingState] = useState<'initial' | 'partial' | 'complete'>('initial')

  useEffect(() => {
    const timer1 = setTimeout(() => setLoadingState('partial'), 2000)
    const timer2 = setTimeout(() => setLoadingState('complete'), 4000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (loadingState === 'initial') {
    return <FooterSkeleton />
  }

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`space-y-4 ${loadingState === 'partial' ? 'animate-fade-in' : ''}`}>
            <h3 className="text-2xl font-bold mb-4 relative overflow-hidden">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <p className="text-sm leading-relaxed">
              Discover the world with our expert travels guides and unforgettable experiences. We're passionate about creating memories that last a lifetime.
            </p>
          </div>
          <div className={`space-y-4 ${loadingState === 'partial' ? 'animate-fade-in' : ''}`}>
            <h3 className="text-2xl font-bold mb-4 relative overflow-hidden">
              Quicks Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-2">
              {['Destinations', 'Tours', 'Accommodations', 'Travel Tips', 'Blog'].map((link, index) => (
                <li key={index} className="transform transition-transform duration-300 hover:translate-x-2">
                  <a href="#" className="text-sm hover:text-yellow-400 transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={`space-y-4 ${loadingState === 'complete' ? 'animate-fade-in' : 'invisible'}`}>
            <h3 className="text-2xl font-bold mb-4 relative overflow-hidden">
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-sm">123 Travel Streets, Adventure City, AC 12345678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contact@tourismwebsite.com" className="text-sm hover:text-yellow-400 transition-colors duration-300">contact@tourismwebsite.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+11234567890" className="text-sm hover:text-yellow-400 transition-colors duration-300">+1 (123) 456-78790</a>
              </li>
            </ul>
          </div>
          <div className={`space-y-4 ${loadingState === 'complete' ? 'animate-fade-in' : 'invisible'}`}>
            <h3 className="text-2xl font-bold mb-4 relative overflow-hidden">
              Follow Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="text-2xl hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={`mt-12 pt-8 border-t border-purple-500 text-center ${loadingState === 'complete' ? 'animate-fade-in' : 'invisible'}`}>
          <p className="text-sm">&copy; 2025 Tourism Websites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

