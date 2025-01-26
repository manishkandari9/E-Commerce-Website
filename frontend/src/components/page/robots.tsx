"use client"
import React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Robots() {
  const [activeRobot, setActiveRobot] = useState<"first" | "second">("first")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900 p-8">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center gap-4 mb-8">
          <Button variant={activeRobot === "first" ? "default" : "outline"} onClick={() => setActiveRobot("first")}>
            Robot 1
          </Button>
          <Button variant={activeRobot === "second" ? "default" : "outline"} onClick={() => setActiveRobot("second")}>
            Robot 2
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {activeRobot === "first" ? <RobotOne /> : <RobotTwo />}
        </motion.div>
      </div>
    </div>
  )
}

// First Robot Component
function RobotOne() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center mx-auto">
      {/* Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 2,
        }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 dark:bg-[#2D2B55] bg-[#574B6B] text-white px-4 py-2 rounded-2xl"
      >
        Need our help now?
      </motion.div>

      {/* Robot Container with Hover Animation */}
      <motion.div
        animate={{
          y: [-10, 10],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Robot Body */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-3xl relative shadow-lg dark:shadow-purple-500/20"
          style={{
            background: "linear-gradient(145deg, #2D2B55, #1E1E3F)",
          }}
        >
          {/* Eyes */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="w-6 h-6 rounded-full dark:bg-[#A78BFA] bg-[#574B6B]">
              <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1" />
            </div>
            <div className="w-6 h-6 rounded-full dark:bg-[#A78BFA] bg-[#574B6B]">
              <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1" />
            </div>
          </div>

          {/* Antennae */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-8">
            <motion.div
              animate={{ rotateZ: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-6 dark:bg-[#7C3AED] bg-[#B4C7FF] rounded-full"
            />
            <motion.div
              animate={{ rotateZ: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-6 dark:bg-[#7C3AED] bg-[#B4C7FF] rounded-full"
            />
          </div>

          {/* Arms */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: [-10, 10] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="w-4 h-8 dark:bg-[#7C3AED] bg-[#B4C7FF] rounded-full"
            />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: [10, -10] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="w-4 h-8 dark:bg-[#7C3AED] bg-[#B4C7FF] rounded-full"
            />
          </div>

          {/* Legs */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            <motion.div
              animate={{ rotate: [-5, 5] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="w-4 h-6 dark:bg-[#7C3AED] bg-[#B4C7FF] rounded-full"
            />
            <motion.div
              animate={{ rotate: [5, -5] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="w-4 h-6 dark:bg-[#7C3AED] bg-[#B4C7FF] rounded-full"
            />
          </div>
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 dark:bg-purple-600 bg-blue-400 opacity-20 blur-xl rounded-full animate-pulse" />
      </motion.div>
    </div>
  )
}

// Second Robot Component
function RobotTwo() {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center mx-auto">
      {/* Main robot container with hover effect */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut",
        }}
        className="relative group"
      >
        {/* Body */}
        <div className="relative w-48 h-52 bg-gradient-to-b from-white to-gray-100 rounded-[2rem] shadow-lg">
          {/* Glow effects */}
          <div className="absolute inset-0 bg-blue-300/20 rounded-[2rem] blur-xl group-hover:bg-blue-400/30 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-100/50 rounded-[2rem]" />

          {/* Face */}
          <div className="absolute top-8 left-0 right-0 flex flex-col items-center">
            {/* Eyes */}
            <div className="flex gap-8 mb-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500" />
                </div>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500" />
                </div>
              </motion.div>
            </div>
            {/* Mouth */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-2 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full"
            />
          </div>

          {/* Antennae */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-12">
            <motion.div
              animate={{ rotateZ: [-5, 5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="w-2 h-8 bg-gradient-to-t from-blue-300 to-blue-100 rounded-full"
            />
            <motion.div
              animate={{ rotateZ: [5, -5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="w-2 h-8 bg-gradient-to-t from-blue-300 to-blue-100 rounded-full"
            />
          </div>

          {/* Arms */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: [-10, 10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="w-8 h-16 bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl"
            />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: [10, -10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="w-8 h-16 bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl"
            />
          </div>

          {/* Legs */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
            <motion.div
              animate={{ rotate: [-5, 5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="w-8 h-12 bg-gradient-to-b from-gray-100 to-blue-100 rounded-2xl"
            />
            <motion.div
              animate={{ rotate: [5, -5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.2 }}
              className="w-8 h-12 bg-gradient-to-b from-gray-100 to-blue-100 rounded-2xl"
            />
          </div>

          {/* Ear pieces */}
          <div className="absolute -left-6 top-8">
            <div className="w-6 h-10 bg-gradient-to-r from-gray-100 to-blue-100 rounded-l-xl" />
          </div>
          <div className="absolute -right-6 top-8">
            <div className="w-6 h-10 bg-gradient-to-l from-gray-100 to-blue-100 rounded-r-xl" />
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute inset-0 -z-10 bg-blue-300/20 rounded-full blur-2xl animate-pulse" />
      </motion.div>
    </div>
  )
}

