'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <div className="text-8xl font-bold font-display gradient-text mb-4">
            404
          </div>
          
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          
          {/* Description */}
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-400 to-primary-300 text-dark-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 glow-effect hover:shadow-primary-400/40 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="glass-button flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </motion.button>
          </div>
          
          {/* Search suggestion */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4">
              Looking for something specific?
            </p>
            <Link href="/search" className="text-primary-400 hover:text-primary-300 text-sm flex items-center justify-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Try our search builder</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}