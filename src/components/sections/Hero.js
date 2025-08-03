"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const serviceHighlights = [
  {
    id: 1,
    title: "Civil Litigation",
    description:
      "Expert representation in civil matters and complex disputes with proven track record",
    icon: "/icons/gavel.svg",
    features: [
      "Property Disputes",
      "Commercial Litigation",
      "Contract Disputes",
    ],
    link: "/practice-areas/civil-litigation",
  },
  {
    id: 2,
    title: "Corporate Law",
    description:
      "Comprehensive legal solutions for businesses from startups to enterprises",
    icon: "/icons/briefcase.svg",
    features: ["Business Formation", "Compliance", "Mergers & Acquisitions"],
    link: "/practice-areas/corporate-law",
  },
  {
    id: 3,
    title: "Family Law",
    description:
      "Sensitive handling of family legal matters with focus on amicable resolution",
    icon: "/icons/family-shield.svg",
    features: ["Divorce Proceedings", "Child Custody", "Property Settlement"],
    link: "/practice-areas/family-law",
  },
  {
    id: 4,
    title: "Property Law",
    description:
      "Expert guidance in property transactions and real estate legal matters",
    icon: "/icons/property-deed.svg",
    features: [
      "Property Documentation",
      "Title Verification",
      "Real Estate Disputes",
    ],
    link: "/practice-areas/property-law",
  },
];

export default function Hero() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  // Auto-rotate service highlights
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % serviceHighlights.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById("stats-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
      {/* Animated Legal Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Legal Symbols */}
        <div className="absolute inset-0 opacity-10">
          {/* Justice Scale - Top Left */}
          <motion.div
            className="absolute top-20 left-20 text-white/30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V4.5L17 3V1H7V3L9 4.5V6.5L3 7V9L9 8.5V15H10.5V22H13.5V15H15V8.5L21 9ZM7.5 7L8.5 6.5V8.5L7.5 9V7ZM16.5 7V9L15.5 8.5V6.5L16.5 7Z" />
            </svg>
          </motion.div>

          {/* Gavel - Top Right */}
          <motion.div
            className="absolute top-32 right-32 text-white/20"
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.5 20.5L5.5 17.5L7.91 19.91L4.91 22.91L2.5 20.5ZM12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2ZM21 12C21 13.1 20.1 14 19 14S17 13.1 17 12 17.9 10 19 10 21 10.9 21 12ZM6.34 6.34C6.73 5.95 7.36 5.95 7.75 6.34L17.66 16.25C18.05 16.64 18.05 17.27 17.66 17.66L16.25 19.07C15.86 19.46 15.23 19.46 14.84 19.07L4.93 9.16C4.54 8.77 4.54 8.14 4.93 7.75L6.34 6.34Z" />
            </svg>
          </motion.div>

          {/* Dharma Wheel - Center Left */}
          <motion.div
            className="absolute top-1/2 left-10 text-white/15"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C17.52 2 22 6.48 22 12S17.52 22 12 22 2 17.52 2 12 6.48 2 12 2ZM12 4C7.58 4 4 7.58 4 12S7.58 20 12 20 20 16.42 20 12 16.42 4 12 4ZM12 6C15.31 6 18 8.69 18 12S15.31 18 12 18 6 15.31 6 12 8.69 6 12 6ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8ZM12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10Z" />
            </svg>
          </motion.div>

          {/* Book/Constitution - Bottom Right */}
          <motion.div
            className="absolute bottom-32 right-20 text-white/25"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 4V18L12 15.5L6 18V4H18Z" />
            </svg>
          </motion.div>

          {/* Pillar of Ashoka - Bottom Left */}
          <motion.div
            className="absolute bottom-20 left-32 text-white/20"
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="50" height="90" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 5.26L16 4L14.74 7.09L18 8L14.74 8.91L16 12L13.09 10.74L12 14L10.91 10.74L8 12L9.26 8.91L6 8L9.26 7.09L8 4L10.91 5.26L12 2ZM12 18V22H10V18H12Z" />
            </svg>
          </motion.div>

          {/* Small floating particles */}
          <motion.div
            className="absolute top-40 left-1/3 w-2 h-2 bg-white/10 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0
            }}
          />
          <motion.div
            className="absolute top-60 right-1/3 w-3 h-3 bg-white/15 rounded-full"
            animate={{
              y: [0, -80, 0],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full"
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>
      </div>

      {/* Original overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              25+ Years of Legal Excellence
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="heading-display text-white leading-tight"
              >
                Legal Excellence
                <br />
                <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                  with Integrity
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lead text-white/90 max-w-2xl mx-auto lg:mx-0"
              >
                Premier law firm in Kerala providing comprehensive legal
                solutions with unwavering dedication and expertise. Your trusted
                legal partner since 1999.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/consultation" className="btn-secondary btn-lg group">
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/practice-areas"
                className="btn-outline btn-lg border-white/30 text-white hover:bg-white hover:text-primary-600"
              >
                Our Practice Areas
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start text-white/80"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300">1000+</div>
                <div className="text-sm">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300">98%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300">50+</div>
                <div className="text-sm">Legal Experts</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Service Highlights Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full"
          >
            <div className="relative w-full max-w-lg mx-auto pb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHighlight}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-large p-6 sm:p-8 flex flex-col min-h-[420px] sm:min-h-[450px]">
                    {/* Service Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 sm:mb-6 mx-auto flex-shrink-0">
                      <Image
                        src={serviceHighlights[currentHighlight].icon}
                        alt=""
                        width={32}
                        height={32}
                        className="w-7 h-7 sm:w-8 sm:h-8"
                      />
                    </div>

                    {/* Service Content */}
                    <div className="text-center space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-primary-600 leading-tight">
                          {serviceHighlights[currentHighlight].title}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed px-2">
                          {serviceHighlights[currentHighlight].description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="py-2 sm:py-4">
                        <ul className="space-y-2 text-sm text-neutral-600">
                          {serviceHighlights[currentHighlight].features.map(
                            (feature, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0" />
                                <span className="text-center">{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="pt-2">
                        <Link
                          href={serviceHighlights[currentHighlight].link}
                          className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group text-sm sm:text-base"
                        >
                          Learn More
                          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {serviceHighlights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHighlight(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${currentHighlight === index
                      ? "bg-white w-8"
                      : "bg-white/30 hover:bg-white/50 w-3"
                      }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors group"
          aria-label="Scroll to content"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDownIcon className="w-6 h-6 animate-bounce-gentle group-hover:translate-y-1 transition-transform duration-200" />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
