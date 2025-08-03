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
  // {
  //   title: "Book Appointment",
  //   description: "Schedule a meeting with one of our experienced attorneys",
  //   icon: CalendarDaysIcon,
  //   link: "/contact",
  //   color: "from-secondary-500 to-secondary-600",
  // },
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
