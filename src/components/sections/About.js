"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const highlights = [
  "25+ Years of Legal Excellence",
  "Comprehensive Legal Solutions",
  "Client-Centric Approach",
  "Proven Track Record"
]

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-main.jpg"
                alt="Law Office Interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -right-8 bottom-12 bg-white p-6 rounded-lg shadow-xl max-w-[240px]">
              <div className="text-4xl font-heading text-primary mb-2">98%</div>
              <div className="text-text-light text-sm">Success Rate in Complex Legal Cases</div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              About Our Firm
            </h2>
            <h3 className="text-4xl font-heading text-primary mb-6">
              A Legacy of Legal Excellence Since 1998
            </h3>
            <div className="w-20 h-1 bg-secondary mb-8" />
            
            <p className="text-text-light mb-8">
              SL Advocates has been at the forefront of legal innovation and excellence for over two decades. 
              Our commitment to delivering exceptional legal services is matched only by our dedication to 
              our clients' success. With a team of experienced attorneys and a comprehensive understanding 
              of various legal domains, we provide strategic solutions to complex legal challenges.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div 
                  key={item}
                  className="flex items-center space-x-3"
                >
                  <CheckCircleIcon className="w-5 h-5 text-secondary" />
                  <span className="text-text">{item}</span>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-primary/5 border-l-4 border-secondary p-6 rounded">
              <h4 className="font-heading text-primary text-xl mb-3">Our Mission</h4>
              <p className="text-text-light">
                To provide exceptional legal services with integrity and professionalism, 
                while maintaining the highest standards of legal excellence and ethical conduct.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 