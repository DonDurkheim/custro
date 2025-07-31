'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Zap, 
  Target, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Phone,
  Sparkles,
  CheckCircle,
  Star,
  Brain,
  Filter,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Calendar,
  Mail
} from 'lucide-react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const HomePage = () => {
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    product: ''
  })

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast.loading('Booking your call...', { id: 'booking' });

    try {
      const response = await axios.post('https://custro-backend.onrender.com/leads', formData);

      if (response.status === 201) {
        // Lead submitted successfully, now trigger email
        try {
          const emailResponse = await axios.post('https://custro-backend.onrender.com/email', formData);

          if (emailResponse.status === 200) {
            toast.success('Form submitted! Check your email for a call booking link.', {
              id: 'booking',
              duration: 5000,
            });
            setIsBookingSubmitted(true);
            setFormData({ name: '', email: '', company: '', phone: '', message: '', product: '' });
          } else {
            toast.error('Form submitted, but failed to send email.', { id: 'booking' });
          }
        } catch (error: any) {
          console.error('Error sending email:', error);
          toast.error('Form submitted, but failed to send email.', { id: 'booking' });
        }
      } else {
        toast.error('Failed to submit form.', { id: 'booking' });
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form.', { id: 'booking' });
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Qualification',
      description: 'Smart forms and chatbots that understand intent, filtering serious buyers from casual browsers before they reach you.'
    },
    {
      icon: Filter,
      title: 'Time-Waster Elimination',
      description: 'Advanced filtering systems that ensure only qualified, purchase-ready prospects make it to your pipeline.'
    },
    {
      icon: MessageSquare,
      title: 'Human-Like Conversations',
      description: 'Voice AI and chatbots that feel natural, building trust while gathering crucial qualification data.'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Whether you sell shoes, solar panels, or services - our systems adapt to your specific buyer personas.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Growth',
      description: 'Track conversion rates, lead quality scores, and ROI with detailed analytics that prove results.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protecting your customer data and business intelligence at every touchpoint.'
    }
  ]

  const testimonials = [
    {
      name: 'Michael Wright',
      role: 'Director of Sales',
      content: 'Initially skeptical about another lead qualification tool, but Custro surprised us. Within 4 weeks, our SDRs were handling 40% fewer conversations but closing 55% more deals. The AI actually learns from our successful deals and refines its qualification criteria. Worth every penny.',
      rating: 5,
      company: 'Salesforce Partner',
      result: '2.8x ROI in 90 days'
    },
    {
      name: 'Emma Chen',
      role: 'Marketing Director',
      content: "We used to waste hours on tire-kickers who weren't ready to commit. Custro's qualification system identifies genuine decision-makers with actual budgets. Last quarter, we handled fewer leads but our average deal size went up by 40%. The implementation team was excellent too.",
      rating: 5,
      company: 'Enterprise SaaS',
      result: '40% larger deals'
    },
    {
      name: 'James Sullivan',
      role: 'Founder & CEO',
      content: "As a B2B service provider, qualifying leads was our biggest challenge. Custro's AI doesn't just filter - it engages in meaningful conversations and schedules calls only with prospects who match our ideal customer profile. My sales team now spends time where it matters most.",
      rating: 5,
      company: 'Digital Agency',
      result: '67% less time prospecting'
    }
  ]

  const stats = [
    { number: '2.5K+', label: 'Qualified Leads Delivered', icon: Target },
    { number: '25+', label: 'Businesses Scaled', icon: TrendingUp },
    { number: '87%', label: 'Lead Quality Score', icon: Award },
    { number: '24/7', label: 'AI Working For You', icon: Clock }
  ]

  return (
    <div className="min-h-screen">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(15, 23, 42, 0.9)',
            color: '#fff',
            border: '1px solid rgba(250, 204, 21, 0.3)',
            backdropFilter: 'blur(12px)',
          },
        }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        {/* Premium animated background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-primary-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-primary-400/10 to-blue-400/10 rounded-full blur-2xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 glass-card mb-8 bg-gradient-to-r from-primary-400/10 to-blue-500/10"
            >
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">AI-Powered Lead Qualification</span>
              <Sparkles className="w-4 h-4 text-primary-400" />
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
            >
              Find Your Perfect
              <br />
              <span className="gradient-text">Customers</span>
              <br />
              in Seconds  
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              We're not a tech company. We're your customer-getting partner. 
              <br className="hidden md:block" />
              <span className="text-primary-400 font-semibold">Only serious buyers reach you.</span> 
              No learning curves. Just results.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.a
                href="#book-call"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-400 to-primary-300 text-dark-900 px-10 py-5 rounded-xl font-bold text-xl flex items-center space-x-3 glow-effect hover:shadow-primary-400/50 transition-all duration-300 group"
              >
                <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Get a Free Demo</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
              <span className="gradient-text"> 3 Channels</span> to Qualify Every Lead
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All three channels are designed to capture, qualify, and report — so you only spend time on real opportunities. The rest? It’s handled.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Branded Form Page */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="glass-card group hover:glow-effect transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-300 rounded-xl flex items-center justify-center text-dark-900 font-bold text-lg">
                🔶
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Branded Form Page</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Your private page for qualified leads. We create a mobile-ready form at yourbusiness.custro.pro. Send traffic from ads, socials, or DMs. AI qualifies serious leads and notifies you instantly. Unqualified leads are logged for your review.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>Custom Questions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>Instant Email Updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>Only Real Buyers Come Through</span>
                </li>
              </ul>
            </motion.div>

            {/* Smart Chatbot */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="glass-card group hover:glow-effect transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-300 rounded-xl flex items-center justify-center text-dark-900 font-bold text-lg">
                🟣
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Smart Chatbot</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Turn your site into a talking salesperson. Our copy-paste chatbot chats with visitors, answers questions, and collects buyer info 24/7. It filters and delivers only hot leads, working in the background while you stay in control.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>No Tech Skills Needed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>Works While You Sleep</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>Sends Live Updates via Gmail, WhatsApp, or Telegram</span>
                </li>
              </ul>
            </motion.div>

            {/* Inbound Call Agent */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="glass-card group hover:glow-effect transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-300 rounded-xl flex items-center justify-center text-dark-900 font-bold text-lg">
                🔵
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Inbound Call Agent</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Get your own smart phone number with a talking AI assistant. It handles inbound calls, understands intent, collects info, and checks fit. Qualified calls generate real-time reports. Unqualified calls are logged for your team's decision.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>Feels Human</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>Available 24/7</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>You’re Always in the Loop</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Trust-Building Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            <span className="gradient-text">Our Offer!</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card bg-gradient-to-r from-primary-400/5 to-blue-500/5"
          >
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Pay setup fee first. If you don’t double your qualified lead conversions in 30 days, we work for free until you do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Trusted by <span className="gradient-text">Growth Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join successful businesses that chose results over empty promises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
                className="glass-card group hover:glow-effect transition-all duration-300 shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-primary-400 text-sm font-medium">{testimonial.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-sm">{testimonial.result}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Call Section */}
      <section id="book-call" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Ready to <span className="gradient-text">Scale</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Book a growth call with our team. We'll show you exactly how to turn your traffic into qualified buyers.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-primary-400" />
                <span>Get a Free Demo</span>
              </h3>
              
              {isBookingSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-400 mb-2">Form Submitted Successfully!</h4>
                  <p className="text-gray-300">Check your email for a call booking link.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 bg-transparent text-white placeholder-gray-400"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 bg-transparent text-white placeholder-gray-400"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 bg-transparent text-white placeholder-gray-400"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 bg-transparent text-white placeholder-gray-400"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">What do you sell?</label>
                    <textarea
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 bg-transparent text-white placeholder-gray-400 resize-none"
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-400 to-primary-300 text-dark-900 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 glow-effect hover:shadow-primary-400/50 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book My Growth Call</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  
                  <p className="text-gray-400 text-sm text-center">
                    * We'll send you a calendar link to choose your preferred time
                  </p>
                </form>
              )}
            </motion.div>

            {/* Call Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card bg-gradient-to-r from-primary-400/5 to-blue-500/5"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Every Business Deserves <span className="gradient-text">Big Growth</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop wasting time on empty clicks. Start talking to people who actually want to buy. 
              Whether you sell shoes, solar panels, or sugarcane — Custro sends only real, serious buyers your way.
            </p>
            
            <motion.a
              href="#book-call"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-400 to-primary-300 text-dark-900 px-10 py-5 rounded-xl font-bold text-xl glow-effect hover:shadow-primary-400/50 transition-all duration-300 group"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Book a Free Demo</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400 mt-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>30-minute session</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Custom strategy included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
