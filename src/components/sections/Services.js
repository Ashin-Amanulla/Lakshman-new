"use client"

import { motion } from 'framer-motion'
import { 
  ScaleIcon, 
  BuildingOffice2Icon, 
  UserGroupIcon,
  HomeIcon,
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: ScaleIcon,
    title: "Civil Litigation",
    description: "Expert representation in civil disputes, property matters, and contractual conflicts.",
    link: "/services/civil-litigation"
  },
  {
    icon: BuildingOffice2Icon,
    title: "Corporate Law",
    description: "Comprehensive corporate legal services including mergers, acquisitions, and compliance.",
    link: "/services/corporate-law"
  },
  {
    icon: UserGroupIcon,
    title: "Family Law",
    description: "Sensitive handling of family matters including divorce, custody, and settlements.",
    link: "/services/family-law"
  },
  {
    icon: HomeIcon,
    title: "Real Estate Law",
    description: "Expert guidance in property transactions, disputes, and documentation.",
    link: "/services/real-estate"
  },
  {
    icon: DocumentTextIcon,
    title: "Intellectual Property",
    description: "Protection and enforcement of patents, trademarks, and copyrights.",
    link: "/services/intellectual-property"
  },
  {
    icon: GlobeAltIcon,
    title: "International Law",
    description: "Legal support for international business operations and disputes.",
    link: "/services/international-law"
  }
]

export default function Services() {
  return (
    <section className="py-20">
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
            Our Services
          </h2>
          <h3 className="text-4xl font-heading text-primary mb-6">
            Comprehensive Legal Solutions
          </h3>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-text-light">
            We offer a wide range of legal services tailored to meet your specific needs. 
            Our experienced team ensures the highest quality legal representation across various practice areas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <service.icon className="w-12 h-12 text-secondary mb-6" />
                <h4 className="text-xl font-heading text-primary mb-4">{service.title}</h4>
                <p className="text-text-light mb-6">{service.description}</p>
                <a 
                  href={service.link}
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 