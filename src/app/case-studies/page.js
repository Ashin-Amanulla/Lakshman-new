"use client"

import { motion } from 'framer-motion'
import { GavelIcon, ScaleIcon, HomeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const featuredCases = [
  {
    title: "Property Dispute Resolution",
    category: "Real Estate Law",
    year: "2023",
    description: "Successfully resolved a complex property dispute involving multiple stakeholders and historical ownership claims. The case was settled through mediation, saving significant time and legal costs.",
    outcome: "Amicable settlement reached, protecting our client's interests",
    duration: "8 months",
    icon: HomeIcon
  },
  {
    title: "Family Settlement Agreement",
    category: "Family Law",
    year: "2023",
    description: "Facilitated a comprehensive family settlement agreement involving ancestral property division among multiple family members.",
    outcome: "Equitable distribution achieved with all parties' consent",
    duration: "6 months",
    icon: ScaleIcon
  },
  {
    title: "Civil Rights Protection",
    category: "Civil Law",
    year: "2022",
    description: "Represented a client in a civil rights case, ensuring protection of fundamental rights and securing appropriate compensation.",
    outcome: "Favorable judgment with compensation awarded",
    duration: "12 months",
    icon: GavelIcon
  }
]

const practiceAreaSuccesses = {
  "Civil Litigation": [
    {
      title: "Contract Dispute Resolution",
      description: "Successfully mediated a contract dispute between two business entities",
      outcome: "Out-of-court settlement"
    },
    {
      title: "Consumer Protection Case",
      description: "Represented a consumer in a product liability case",
      outcome: "Compensation awarded"
    }
  ],
  "Family Law": [
    {
      title: "Custody Resolution",
      description: "Amicable resolution of child custody matter",
      outcome: "Joint custody arrangement"
    },
    {
      title: "Maintenance Case",
      description: "Secured fair maintenance for dependent spouse",
      outcome: "Monthly maintenance granted"
    }
  ],
  "Property Law": [
    {
      title: "Title Clearance",
      description: "Resolved property title disputes and ensured clear ownership",
      outcome: "Clean title established"
    },
    {
      title: "Tenant Rights Protection",
      description: "Protected tenant rights in a commercial property dispute",
      outcome: "Favorable settlement"
    }
  ]
}

export default function CaseStudiesPage() {
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
            Case Studies & Success Stories
          </h1>
          <p className="text-text-light">
            Explore our track record of successfully resolving complex legal challenges 
            across various practice areas.
          </p>
        </motion.div>

        {/* Featured Cases */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading text-primary mb-8">Notable Cases</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {/* Case Header */}
                <div className="bg-primary/5 p-6">
                  <caseStudy.icon className="w-12 h-12 text-secondary mb-4" />
                  <div className="flex items-center gap-2 text-sm text-text-light mb-2">
                    <span>{caseStudy.category}</span>
                    <span>•</span>
                    <span>{caseStudy.year}</span>
                  </div>
                  <h3 className="text-xl font-heading text-primary">
                    {caseStudy.title}
                  </h3>
                </div>

                {/* Case Details */}
                <div className="p-6">
                  <p className="text-text-light mb-6">
                    {caseStudy.description}
                  </p>
                  
                  {/* Outcome & Duration */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="font-medium text-primary">Outcome:</span>
                      <span className="text-text-light">{caseStudy.outcome}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium text-primary">Duration:</span>
                      <span className="text-text-light">{caseStudy.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Practice Area Success Stories */}
        <section>
          <h2 className="text-2xl font-heading text-primary mb-8">
            Success Stories by Practice Area
          </h2>
          <div className="space-y-12">
            {Object.entries(practiceAreaSuccesses).map(([area, cases], areaIndex) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: areaIndex * 0.1 }}
              >
                <h3 className="text-xl font-heading text-primary mb-6">{area}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {cases.map((caseStudy, caseIndex) => (
                    <motion.div
                      key={caseStudy.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (areaIndex * 0.1) + (caseIndex * 0.05) }}
                      className="bg-white rounded-lg shadow-sm p-6"
                    >
                      <h4 className="text-lg font-heading text-primary mb-3">
                        {caseStudy.title}
                      </h4>
                      <p className="text-text-light mb-4">
                        {caseStudy.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-primary">Outcome:</span>
                        <span className="text-sm text-text-light">{caseStudy.outcome}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 