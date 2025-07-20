"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const contactInfo = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    content: "+91 98765 43210",
    link: "tel:+919876543210",
    description: "Available during office hours",
  },
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    content: "info@sladvocates.in",
    link: "mailto:info@sladvocates.in",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPinIcon,
    title: "Visit Us",
    content: "123 Legal Street, Kochi, Kerala 682001",
    link: "https://maps.google.com",
    description: "Easy access with parking available",
  },
  {
    icon: ClockIcon,
    title: "Office Hours",
    content: "Mon - Fri: 9:30 AM - 6:30 PM",
    description: "Closed on weekends and holidays",
  },
];

const quickActions = [
  {
    title: "Free Consultation",
    description:
      "Schedule a no-obligation consultation to discuss your legal needs",
    icon: ChatBubbleLeftRightIcon,
    link: "/consultation",
    color: "from-primary-500 to-primary-600",
  },
  {
    title: "Book Appointment",
    description: "Schedule a meeting with one of our experienced attorneys",
    icon: CalendarDaysIcon,
    link: "/contact",
    color: "from-secondary-500 to-secondary-600",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      className="section-padding bg-gradient-to-b from-neutral-50 to-white"
      ref={ref}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="heading-h2 mb-6">Ready to Get Started?</h2>
          <p className="text-lead max-w-3xl mx-auto">
            Contact us today for expert legal consultation. Our experienced team
            is here to help you navigate your legal challenges with confidence.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            >
              <Link href={action.link} className="block group">
                <div
                  className={`bg-gradient-to-r ${action.color} rounded-3xl p-8 text-white transform group-hover:scale-105 transition-all duration-300 shadow-large group-hover:shadow-xl`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <action.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {action.title}
                      </h3>
                      <p className="text-white/90 mb-4">{action.description}</p>
                      <div className="inline-flex items-center gap-2 text-white/90 group-hover:text-white transition-colors group/cta">
                        <span className="font-medium">Get Started</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              className="text-center group"
            >
              <div className="card-hover">
                <div className="card-body space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto group-hover:bg-primary-500 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <Link
                        href={info.link}
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors block mb-1"
                      >
                        {info.content}
                      </Link>
                    ) : (
                      <p className="text-neutral-700 font-medium mb-1">
                        {info.content}
                      </p>
                    )}
                    {info.description && (
                      <p className="text-small text-neutral-600">
                        {info.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-primary-500 rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/images/legal-pattern.svg')] opacity-10" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="heading-h3 text-white mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Don't let legal issues overwhelm you. Our experienced team is
              ready to provide the guidance and representation you need to
              protect your interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-secondary btn-lg">
                Free Consultation
                <PhoneIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline btn-lg border-white/30 text-white hover:bg-white hover:text-primary-600"
              >
                Contact Us
                <EnvelopeIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 justify-center mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300">24/7</div>
                <div className="text-sm text-white/80">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300">Free</div>
                <div className="text-sm text-white/80">
                  Initial Consultation
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300">25+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
