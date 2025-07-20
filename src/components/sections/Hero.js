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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/legal-pattern.svg')] opacity-5" />
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
            className="relative"
          >
            <div className="relative h-[500px] w-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHighlight}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-large p-8 flex flex-col">
                    {/* Service Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 mx-auto">
                      <Image
                        src={serviceHighlights[currentHighlight].icon}
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>

                    {/* Service Content */}
                    <div className="text-center space-y-4 flex-1">
                      <h3 className="heading-h3 text-primary-600">
                        {serviceHighlights[currentHighlight].title}
                      </h3>
                      <p className="text-body">
                        {serviceHighlights[currentHighlight].description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 text-sm text-neutral-600">
                        {serviceHighlights[currentHighlight].features.map(
                          (feature, index) => (
                            <li
                              key={index}
                              className="flex items-center justify-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      href={serviceHighlights[currentHighlight].link}
                      className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors mt-6 group"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {serviceHighlights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHighlight(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentHighlight === index
                        ? "bg-white w-8"
                        : "bg-white/30 hover:bg-white/50"
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
