'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center relative overflow-hidden pt-16">
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-primary-400/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-primary-400/10 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative glass-card p-12 max-w-2xl w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          >
            <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-6" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Thank You!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-300 mb-8"
          >
            Your request has been submitted successfully. We have sent you a calendar link to choose your preferred time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default ThankYouPage
