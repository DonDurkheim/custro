'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Heart,
  ArrowUp,
  Mail
} from 'lucide-react'
import Logo from '@/src/custro-logo.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    Services: [
      { name: 'Lead Qualification', href: '#how-it-works' },
      { name: 'AI Chatbots', href: '#how-it-works' },
      { name: 'Voice AI', href: '#how-it-works' },
      { name: 'Smart Forms', href: '#how-it-works' },
    ],
    Company: [
      { name: 'About Us', href: '#home' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Book a Call', href: '#book-call' },
      { name: 'Contact', href: '#book-call' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/custro' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/custro' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@custro.com' },
  ]

  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
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
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Your customer-getting partner. We help businesses stop wasting time on empty clicks and start talking to serious buyers.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center md:justify-start text-gray-400 text-sm mb-4 md:mb-0">
            <span className="mr-1">© 2025 Custro.</span>
            <div className="flex items-center">
              <span className="mr-1">Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current mx-1" />
              <span>for growth-focused businesses</span>
            </div>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button flex items-center space-x-2 text-sm"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
