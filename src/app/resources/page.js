"use client"

import { motion } from 'framer-motion'
import { 
  BookOpenIcon, 
  DocumentTextIcon, 
  ArrowDownTrayIcon,
  QuestionMarkCircleIcon 
} from '@heroicons/react/24/outline'

const legalGuides = [
  {
    title: "Understanding Civil Cases",
    description: "A comprehensive guide to civil litigation process in India",
    icon: DocumentTextIcon,
    link: "/guides/civil-cases"
  },
  {
    title: "Family Law Basics",
    description: "Essential information about family law matters and procedures",
    icon: BookOpenIcon,
    link: "/guides/family-law"
  },
  {
    title: "Property Documentation",
    description: "Guide to property documentation and registration process",
    icon: DocumentTextIcon,
    link: "/guides/property"
  }
]

const faqs = [
  {
    question: "What documents do I need for property registration?",
    answer: "For property registration, you typically need: Original Sale Deed, Tax receipts, Encumbrance Certificate, ID proof, and address proof. Additional documents may be required based on specific circumstances."
  },
  {
    question: "How long does a civil case typically take?",
    answer: "The duration of a civil case can vary significantly depending on complexity. Simple matters might be resolved in 6-12 months, while complex cases could take longer."
  },
  {
    question: "What are the steps in filing a civil case?",
    answer: "Filing a civil case involves: 1) Drafting a plaint, 2) Filing in the appropriate court, 3) Payment of court fees, 4) Initial hearing dates, 5) Notice to opposite party."
  }
]

const downloads = [
  {
    title: "Power of Attorney Template",
    description: "Basic template for General Power of Attorney",
    type: "PDF",
    size: "156 KB"
  },
  {
    title: "Rent Agreement Checklist",
    description: "Comprehensive checklist for rental agreements",
    type: "PDF",
    size: "128 KB"
  },
  {
    title: "Legal Terms Glossary",
    description: "Common legal terms and their meanings",
    type: "PDF",
    size: "245 KB"
  }
]

export default function ResourcesPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-heading text-primary mb-6">
            Legal Resources & Guides
          </h1>
          <p className="text-text-light">
            Access our collection of legal resources, guides, and templates to better understand 
            your legal rights and procedures.
          </p>
        </motion.div>

        {/* Legal Guides */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading text-primary mb-8">Legal Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <guide.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-heading text-primary mb-2">
                  {guide.title}
                </h3>
                <p className="text-text-light mb-4">
                  {guide.description}
                </p>
                <a 
                  href={guide.link}
                  className="text-secondary hover:text-primary transition-colors inline-flex items-center"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading text-primary mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-start gap-4">
                  <QuestionMarkCircleIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-heading text-primary mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-text-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Downloads */}
        <section>
          <h2 className="text-2xl font-heading text-primary mb-8">
            Document Templates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-heading text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-light text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-text-light">
                      <span>{item.type}</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                  <button className="text-secondary hover:text-primary transition-colors">
                    <ArrowDownTrayIcon className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 