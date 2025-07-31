'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Menu, 
  X, 
  Calendar
} from 'lucide-react'
import Logo from '@/src/custro-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book Call', href: '#book-call' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 md:w-12 md:h-12 rounded-lg flex items-center justify-center overflow-hidden"
            >
              <Image
                src={Logo}
                alt="Custro Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </motion.div>
            <span className="text-3xl md:text-3xl font-normal font-manrope bg-gradient-to-r from-[#F4AE4D] to-[#FA709A] text-transparent bg-clip-text tracking-tight hover:scale-105 transition-transform hover:from-[#FA709A] hover:to-[#F4AE4D] duration-300">
              Custro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="#book-call">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-400 to-primary-300 text-dark-900 px-6 py-2 rounded-lg font-bold flex items-center space-x-2 glow-effect hover:shadow-primary-400/40 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Call</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="glass-button p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-primary-400 hover:bg-white/5 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-2 border-t border-white/10 mt-2">
                <Link
                  href="#book-call"
                  className="flex items-center justify-center space-x-2 px-3 py-3 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-900 rounded-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Call</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
