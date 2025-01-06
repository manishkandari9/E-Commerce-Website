import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, EyeOff, Eye } from 'lucide-react';

const Auth = ({ onClose, isDarkMode }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const endpoint = isSignUp ? '/api/signup' : '/api/login';
      const response = await axios.post(endpoint, { 
        name, 
        email, 
        password
      });
      
      if (response.data.token) {
        Cookies.set('authToken', response.data.token, { expires: 7 });
        onClose();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  const Input = ({ icon: Icon, ...props }) => (
    <div className="relative">
      <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} size={18} />
      <input
        {...props}
        className={`w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
        }`}
      />
    </div>
  );

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  const switchVariants = {
    signup: { x: '100%' },
    signin: { x: '0%' }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <motion.div 
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className={`relative overflow-hidden rounded-lg shadow-xl w-full max-w-md ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className={`absolute top-4 right-4 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'}`}
        >
          <X size={24} />
        </motion.button>
        <div className="p-8">
          <motion.div variants={itemVariants}>
            <h2 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {isSignUp ? 'Start Your Journey' : 'Welcome Back, Explorer'}
            </h2>
          </motion.div>
          <motion.p variants={itemVariants} className={`text-center mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {isSignUp
              ? 'Create an account to unlock personalized travel experiences'
              : 'Sign in to continue your adventure'}
          </motion.p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  key="name"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Input
                    icon={User}
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div variants={itemVariants}>
              <Input
                icon={Mail}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <Input
                icon={Lock}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'}`}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </motion.div>
            <AnimatePresence mode="wait">
              {isSignUp && (
                <>
                  <motion.div
                    key="confirmPassword"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <Input
                      icon={Lock}
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            {error && (
              <motion.p 
                variants={itemVariants}
                className="text-red-500 text-sm text-center"
              >
                {error}
              </motion.p>
            )}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={`w-full py-3 rounded-md transition duration-300 ${
                isDarkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {isSignUp ? 'Start Your Adventure' : 'Continue Your Journey'}
            </motion.button>
          </form>
          <motion.div 
            variants={itemVariants}
            className="mt-6 relative"
          >
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-500'}`}>
                Or
              </span>
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="mt-6 flex justify-center"
          >
            <div className={`relative w-full max-w-[200px] h-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full p-1`}>
              <motion.div
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-blue-500"
                variants={switchVariants}
                animate={isSignUp ? 'signup' : 'signin'}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              <div className="relative flex h-full">
                <button
                  onClick={() => setIsSignUp(false)}
                  className={`flex-1 flex items-center justify-center ${isSignUp ? (isDarkMode ? 'text-gray-400' : 'text-gray-600') : 'text-white'} font-medium transition-colors duration-200`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsSignUp(true)}
                  className={`flex-1 flex items-center justify-center ${!isSignUp ? (isDarkMode ? 'text-gray-400' : 'text-gray-600') : 'text-white'} font-medium transition-colors duration-200`}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Auth;

