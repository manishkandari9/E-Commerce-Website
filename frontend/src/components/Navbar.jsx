import React, { useState, useEffect } from 'react';
import { X, Menu, LogIn, Moon, Sun } from 'lucide-react';
import Cookies from 'js-cookie';  // Import js-cookie library
import Auth from './Auth/auth'; // Import Auth component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhoto, setUserPhoto] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false); // State to show/hide Auth modal

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    if (!isLoggedIn) {
      setUserPhoto('https://api.dicebear.com/6.x/initials/svg?seed=User');
    } else {
      setUserPhoto('');
    }
  };

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    Cookies.set('darkMode', newDarkModeState ? 'enabled' : 'disabled', { expires: 365 });
  };

  useEffect(() => {
    const darkModeCookie = Cookies.get('darkMode');
    if (darkModeCookie === 'enabled') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center md:justify-start">
            <a href="/" className="flex items-center">
              <span className="font-semibold text-gray-900 dark:text-white text-lg">Logo</span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-10">
            <a href="/" className="text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-300">Home</a>
            <a href="/services" className="text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-300">Services</a>
            <a href="/about" className="text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-300">About</a>
            <a href="/contact" className="text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-300">Contact</a>

            <div className="relative">
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <img 
                    src={userPhoto} 
                    alt="User profile" 
                    className="w-8 h-8 rounded-full border-2 border-green-500"
                  />
                  <button
                    onClick={toggleLogin}
                    className="text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)} // Open Auth modal when clicked
                  className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                >
                  <LogIn className="mr-1" size={16} />
                  <span>Log In</span>
                </button>
              )}
            </div>

            <button
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-300"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isDarkMode ? (
                <Sun className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Moon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700">Home</a>
          <a href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700">Services</a>
          <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700">About</a>
          <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700">Contact</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center px-5">
            {isLoggedIn ? (
              <>
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={userPhoto} alt="User profile" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 dark:text-gray-200">User Name</div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">user@example.com</div>
                </div>
              </>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)} // Open Auth modal on mobile too
                className="flex-shrink-0 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Log In
              </button>
            )}
          </div>
          {isLoggedIn && (
            <div className="mt-3 px-2 space-y-1">
              <button
                onClick={toggleLogin}
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && <Auth onClose={() => setShowAuthModal(false)} />} {/* Pass onClose to close modal */}
    </nav>
  );
};

export default Navbar;
