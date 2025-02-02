"use client"

import { motion } from 'framer-motion'
import { 
  UserGroupIcon, 
  ScaleIcon, 
  TrophyIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline'

const reasons = [
  {
    icon: UserGroupIcon,
    title: "Client-Focused Approach",
    description: "We prioritize understanding your unique needs and delivering personalized legal solutions.",
    color: "text-blue-600"
  },
  {
    icon: ScaleIcon,
    title: "Legal Excellence",
    description: "Our team of experienced attorneys brings deep expertise across various practice areas.",
    color: "text-purple-600"
  },
  {
    icon: TrophyIcon,
    title: "Proven Track Record",
    description: "Consistently delivering successful outcomes for our clients across complex cases.",
    color: "text-red-600"
  },
  {
    icon: ClockIcon,
    title: "Timely Response",
    description: "Quick response times and proactive communication throughout your case.",
    color: "text-green-600"
  },
  {
    icon: ShieldCheckIcon,
    title: "Ethical Practice",
    description: "Maintaining the highest standards of professional ethics and integrity.",
    color: "text-yellow-600"
  },
  {
    icon: GlobeAltIcon,
    title: "Global Perspective",
    description: "International experience with a deep understanding of local laws.",
    color: "text-indigo-600"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background-light">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-4xl font-heading text-primary mb-6">
            Setting the Standard in Legal Excellence
          </h3>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-text-light">
            With decades of experience and a commitment to excellence, we provide unmatched legal expertise 
            and personalized service to every client.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
                
                {/* Content */}
                <div className="relative">
                  <div className="mb-6">
                    <reason.icon className={`w-12 h-12 ${reason.color}`} />
                  </div>
                  <h4 className="text-xl font-heading text-primary mb-4">
                    {reason.title}
                  </h4>
                  <p className="text-text-light">
                    {reason.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent hover:border-secondary rounded-lg transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            Schedule a Consultation
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 