"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  NewspaperIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  CalendarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

const legalUpdates = [
  {
    title: "Recent Changes in Property Registration Laws",
    date: "March 15, 2024",
    category: "Legislative Update",
    description: "Key amendments to property registration procedures in Kerala, affecting documentation requirements and processing timelines.",
    keyPoints: [
      "Introduction of online registration options",
      "Updated document verification process",
      "New timeline requirements for registration completion"
    ],
    impact: "Streamlined property registration process with enhanced security measures"
  },
  {
    title: "Supreme Court Ruling on Civil Disputes",
    date: "March 1, 2024",
    category: "Case Law",
    description: "Analysis of recent Supreme Court judgment affecting civil dispute resolution procedures.",
    keyPoints: [
      "New guidelines for civil case proceedings",
      "Modified timeline requirements",
      "Impact on pending cases"
    ],
    impact: "Faster resolution of civil disputes with clearer procedural guidelines"
  }
]

const statistics = {
  caseTimelines: [
    { type: "Civil Cases", avgDuration: "8-12 months", successRate: "92%" },
    { type: "Family Matters", avgDuration: "4-6 months", successRate: "95%" },
    { type: "Property Disputes", avgDuration: "6-10 months", successRate: "89%" }
  ],
  yearlyStats: {
    totalCases: 150,
    successfulResolutions: 142,
    outOfCourtSettlements: 85,
    averageTimeToResolution: "7 months"
  }
}

const categories = ["All", "Legislative Update", "Case Law", "Legal Tips"]

export default function LegalUpdatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredUpdates = selectedCategory === "All" 
    ? legalUpdates
    : legalUpdates.filter(update => update.category === selectedCategory)

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
            Legal Updates & Insights
          </h1>
          <p className="text-text-light">
            Stay informed about the latest legal developments, case law updates, and 
            legislative changes affecting your rights and obligations.
          </p>
        </motion.div>

        {/* Case Statistics Dashboard */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 bg-primary/5 rounded-lg p-8"
        >
          <h2 className="text-2xl font-heading text-primary mb-8 flex items-center">
            <ChartBarIcon className="w-6 h-6 mr-2" />
            Case Statistics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(statistics.yearlyStats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="text-3xl font-heading text-primary mb-2">
                  {value}
                </div>
                <div className="text-text-light text-sm capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Analysis */}
          <div className="mt-8">
            <h3 className="text-xl font-heading text-primary mb-6">Case Resolution Timelines</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {statistics.caseTimelines.map((item, index) => (
                <motion.div
                  key={item.type}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h4 className="font-heading text-primary mb-4">{item.type}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-text-light">Average Duration:</span>
                      <span className="font-medium">{item.avgDuration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-light">Success Rate:</span>
                      <span className="font-medium text-secondary">{item.successRate}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Updates Section */}
        <section>
          {/* Category Filter */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-primary/5 text-primary hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Updates List */}
          <div className="space-y-8">
            {filteredUpdates.map((update, index) => (
              <motion.article
                key={update.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-text-light mb-4">
                    <CalendarIcon className="w-4 h-4" />
                    {update.date}
                    <span>•</span>
                    {update.category}
                  </div>
                  
                  <h3 className="text-xl font-heading text-primary mb-4">
                    {update.title}
                  </h3>
                  
                  <p className="text-text-light mb-6">
                    {update.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-medium text-primary">Key Points:</h4>
                    <ul className="space-y-2">
                      {update.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowTrendingUpIcon className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                          <span className="text-text-light">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-medium text-primary mb-2">Impact Analysis:</h4>
                    <p className="text-text-light">{update.impact}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 