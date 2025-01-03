import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ContactSkeleton } from '../Skelton/contact-skeleton';

// Inline Button component
function Button({ children, className, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Inline Input component
function Input({ className, type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

// Inline Textarea component
function Textarea({ className, ...props }) {
  return (
    <textarea
      className={`flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ContactSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-foreground dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
          Get in Touch
        </h1>
        <p className="text-muted-foreground dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Have questions about your next adventure? We're here to help make your travel dreams come true.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <div className="bg-card/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 dark:border-gray-700">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block dark:text-gray-200">First Name</label>
                <Input 
                  type="text" 
                  placeholder="John" 
                  className="bg-background/50 dark:bg-gray-900/50 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-400" 
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block dark:text-gray-200">Last Name</label>
                <Input 
                  type="text" 
                  placeholder="Doe" 
                  className="bg-background/50 dark:bg-gray-900/50 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-400" 
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block dark:text-gray-200">Email</label>
              <Input 
                type="email" 
                placeholder="john@example.com" 
                className="bg-background/50 dark:bg-gray-900/50 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-400" 
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block dark:text-gray-200">Message</label>
              <Textarea
                placeholder="Tell us about your travel plans..."
                className="bg-background/50 dark:bg-gray-900/50 min-h-[150px] dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-400"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-primary to-primary-foreground dark:from-blue-500 dark:to-purple-500 hover:from-primary/90 hover:to-primary-foreground/90 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-medium py-4">
              Send Message
            </Button>
          </form>
        </div>

        {/* Info Section */}
        <div className="space-y-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] relative border border-border/50 dark:border-gray-700">
            <img
              src="/placeholder.svg"
              alt="Location Map"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="font-bold text-xl mb-2">Visit Our Office</h3>
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  123 Travel Street, Adventure City
                </p>
              </div>
            </div>
          </div>


          {/* Contact Info Cards */}
          <div className="grid gap-4">
            <div className="bg-card/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl p-6 shadow-lg flex items-center gap-4 border border-border/50 dark:border-gray-700 hover:border-primary/50 dark:hover:border-blue-400/50 transition-colors">
              <div className="bg-primary/10 dark:bg-blue-500/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium dark:text-gray-200">Phone</h3>
                <p className="text-primary dark:text-blue-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="bg-card/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl p-6 shadow-lg flex items-center gap-4 border border-border/50 dark:border-gray-700 hover:border-primary/50 dark:hover:border-blue-400/50 transition-colors">
              <div className="bg-primary/10 dark:bg-blue-500/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium dark:text-gray-200">Email</h3>
                <p className="text-primary dark:text-blue-400">hello@travelagency.com</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="bg-card dark:bg-gray-800 p-3 rounded-full shadow-lg border border-border/50 dark:border-gray-700 hover:border-primary/50 dark:hover:border-blue-400/50 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-primary dark:text-blue-400" />
            </a>
            <a 
              href="#" 
              className="bg-card dark:bg-gray-800 p-3 rounded-full shadow-lg border border-border/50 dark:border-gray-700 hover:border-primary/50 dark:hover:border-blue-400/50 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-primary dark:text-blue-400" />
            </a>
            <a 
              href="#" 
              className="bg-card dark:bg-gray-800 p-3 rounded-full shadow-lg border border-border/50 dark:border-gray-700 hover:border-primary/50 dark:hover:border-blue-400/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-primary dark:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
