import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { X, Menu, User, Moon, Sun } from 'lucide-react';
import * as THREE from 'three';
import Cookies from 'js-cookie';
import Auth from './Auth/auth';
import NavbarSkeleton from '../Skelton/NavbarSkeleton';

const AnimatedLogo = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <mesh 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#ffc107" : "#03a9f4"} />
    </mesh>
  );
};

const NavItem = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
    href={href}
    className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-teal-500 transition-colors duration-200"
    onHoverStart={() => setIsHovered(true)}
    onHoverEnd={() => setIsHovered(false)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-teal-500"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isHovered ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    />
  </motion.a>
  
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhoto, setUserPhoto] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
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
    setIsDarkMode(darkModeCookie === 'enabled');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: 'Home', href: '/Home' },
    { name: 'Destination', href: '/services' },
    { name: 'Packages', href: '/about' },
    { name: 'Explore', href: '/contact' },
    { name: 'Booking', href: '/Booking' },
    { name: 'About Us', href: '/About Us' },
    
  ];

  return (
    <>
    {isLoading ? (
      <NavbarSkeleton />
    ) : (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
         className="bg-white dark:bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-black shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="flex items-center justify-start">
            <motion.a
              href="/"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 mr-2">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <OrbitControls enableZoom={false} enablePan={false} />
                  <AnimatedLogo />
                </Canvas>
              </div>
              <motion.span
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  className="font-bold text-2xl tracking-wider font-['Mogra', 'system-ui'] !important text-black dark:text-white"
>
  ThrillTrek
</motion.span>

            </motion.a>
          </div>
          <motion.div
            className="hidden md:flex md:items-center md:space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <AnimatePresence>
              {navItems.map((item, index) => (
                <NavItem key={item.name} href={item.href}>
                  {item.name}
                </NavItem>
              ))}
            </AnimatePresence>
             <div className="relative flex items-center space-x-4">
              {isLoggedIn ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-2"
                >
                  <motion.img 
                    src={userPhoto} 
                    alt="User profile" 
                    className="w-8 h-8 rounded-full border-2 border-secondary-500"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleLogin}
                    className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-secondary-500 dark:hover:text-secondary-400"
                  >
                    Log Out
                  </motion.button>
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAuthModal(true)}
                  className="text-neutral-700 dark:text-neutral-300 hover:text-secondary-500 dark:hover:text-secondary-400"
                >
                  <User className="h-6 w-6" />
                </motion.button>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="text-neutral-700 dark:text-neutral-300 hover:text-secondary-500 dark:hover:text-secondary-400"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          <div className="flex md:hidden">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500"
            >
              {isDarkMode ? (
                <Sun className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Moon className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavItem href={item.href}>
                    {item.name}
                  </NavItem>
                </motion.div>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-5">
                {isLoggedIn ? (
                  <>
                    <div className="flex-shrink-0">
                      <motion.img 
                        className="h-10 w-10 rounded-full" 
                        src={userPhoto} 
                        alt="User profile"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800 dark:text-gray-200">User Name</div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">user@example.com</div>
                    </div>
                  </>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAuthModal(true)}
                    className="flex-shrink-0 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-neutral-900 bg-secondary-500 hover:bg-secondary-600"
                  >
                    Log In
                  </motion.button>
                )}
              </div>
              {isLoggedIn && (
                <div className="mt-3 px-2 space-y-1">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleLogin}
                    className="block w-full px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:bg-secondary-50 dark:hover:text-white dark:hover:bg-secondary-700"
                  >
                    Log Out
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <Auth onClose={() => setShowAuthModal(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    )}
    </>
  );
};

export default Navbar;

