import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function FooterSkeleton() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="h-8 bg-purple-500 rounded w-32 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-purple-500 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-purple-500 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-purple-500 rounded w-4/5 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-8 bg-purple-500 rounded w-36 animate-pulse"></div>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 bg-purple-500 rounded w-3/4 animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-8 bg-purple-500 rounded w-36 animate-pulse"></div>
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-purple-500 rounded w-5/6 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-8 bg-purple-500 rounded w-32 animate-pulse"></div>
            <div className="flex space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-500">
          <div className="h-4 bg-purple-500 rounded w-64 mx-auto animate-pulse"></div>
        </div>
      </div>
    </footer>
  )
}
