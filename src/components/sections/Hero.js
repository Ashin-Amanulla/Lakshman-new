"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Law Office"
        fill
        priority
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6">
              Expert Legal Solutions for Complex Challenges
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              With decades of experience in corporate and civil law, we provide strategic legal counsel to protect your interests.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="btn-primary"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/practice-areas"
                className="btn-outline text-white border-white hover:bg-white hover:text-primary"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "25+", label: "Years of Experience" },
              { number: "1000+", label: "Cases Won" },
              { number: "50+", label: "Legal Experts" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <div className="text-3xl font-heading text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
      >
        <svg 
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
} 