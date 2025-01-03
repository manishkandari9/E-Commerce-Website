import React from "react"
export function ContactSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="text-center mb-12">
        <div className="h-12 bg-muted dark:bg-gray-700 rounded-lg w-3/4 mx-auto mb-4 animate-pulse" />
        <div className="h-4 bg-muted dark:bg-gray-700 rounded w-2/3 mx-auto animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Form Skeleton */}
        <div className="bg-card/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 dark:border-gray-700">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name Field */}
              <div className="space-y-2">
                <div className="h-4 bg-muted dark:bg-gray-700 rounded w-1/4 animate-pulse" />
                <div className="h-9 bg-muted dark:bg-gray-700 rounded-md w-full animate-pulse" />
              </div>
              {/* Last Name Field */}
              <div className="space-y-2">
                <div className="h-4 bg-muted dark:bg-gray-700 rounded w-1/4 animate-pulse" />
                <div className="h-9 bg-muted dark:bg-gray-700 rounded-md w-full animate-pulse" />
              </div>
            </div>
            {/* Email Field */}
            <div className="space-y-2">
              <div className="h-4 bg-muted dark:bg-gray-700 rounded w-1/4 animate-pulse" />
              <div className="h-9 bg-muted dark:bg-gray-700 rounded-md w-full animate-pulse" />
            </div>
            {/* Message Field */}
            <div className="space-y-2">
              <div className="h-4 bg-muted dark:bg-gray-700 rounded w-1/4 animate-pulse" />
              <div className="h-32 bg-muted dark:bg-gray-700 rounded-md w-full animate-pulse" />
            </div>
            {/* Submit Button */}
            <div className="h-12 bg-muted dark:bg-gray-700 rounded-md w-full animate-pulse" />
          </div>
        </div>

        {/* Info Section Skeleton */}
        <div className="space-y-8">
          {/* Map Skeleton */}
          <div className="h-[300px] bg-muted dark:bg-gray-700 rounded-2xl animate-pulse border border-border/50 dark:border-gray-700" />
          
          {/* Contact Info Cards Skeleton */}
          <div className="grid gap-4">
            <div className="bg-card/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-border/50 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-muted dark:bg-gray-700 rounded-full animate-pulse" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-muted dark:bg-gray-700 rounded w-1/4 animate-pulse" />
                  <div className="h-4 bg-muted dark:bg-gray-700 rounded w-1/2 animate-pulse" />
                </div>
              </div>
            </div>
            <div className="bg-card/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-border/50 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-muted dark:bg-gray-700 rounded-full animate-pulse" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-muted dark:bg-gray-700 rounded w-1/4 animate-pulse" />
                  <div className="h-4 bg-muted dark:bg-gray-700 rounded w-1/2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Skeleton */}
          <div className="flex justify-center gap-4">
            <div className="h-12 w-12 bg-muted dark:bg-gray-700 rounded-full animate-pulse" />
            <div className="h-12 w-12 bg-muted dark:bg-gray-700 rounded-full animate-pulse" />
            <div className="h-12 w-12 bg-muted dark:bg-gray-700 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
