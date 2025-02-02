"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    id: 1,
    content: "SL Advocates provided exceptional legal support during our company's merger. Their expertise and attention to detail were invaluable.",
    author: "Rajesh Mehta",
    position: "CEO, TechCorp India",
    image: "/images/testimonials/client1.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "Their team's understanding of international law helped us navigate complex cross-border transactions seamlessly.",
    author: "Sarah Johnson",
    position: "Director, Global Ventures",
    image: "/images/testimonials/client2.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "Professional, responsive, and thorough in their approach. They helped us resolve a complex property dispute efficiently.",
    author: "Priya Sharma",
    position: "Real Estate Developer",
    image: "/images/testimonials/client3.jpg",
    rating: 5
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="container relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 text-white/5">
          <svg className="w-64 h-64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
          </svg>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 relative"
        >
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Testimonials
          </h2>
          <h3 className="text-4xl font-heading mb-6">
            What Our Clients Say
          </h3>
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12"
          >
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-secondary" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-center mb-8">
              "{testimonials[activeIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-heading text-lg">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-white/80 text-sm">
                  {testimonials[activeIndex].position}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-secondary w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 