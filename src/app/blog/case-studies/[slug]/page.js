"use client"

import { motion } from 'framer-motion'
import { CalendarIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import PageWrapper from '@/components/layout/PageWrapper'

export default function CaseStudyDetail({ params }) {
    // This would typically come from a database/API
    const caseStudy = {
        title: "Property Dispute Resolution Success",
        date: "March 15, 2024",
        image: "/images/blog/case-study-1.jpg",
        category: "Property Law",
        challenge: "A complex property dispute involving multiple stakeholders and historical ownership claims threatened to result in lengthy litigation.",
        approach: [
            "Thorough documentation review and title verification",
            "Stakeholder consultation and mediation",
            "Alternative dispute resolution methods",
            "Strategic negotiation"
        ],
        outcome: "Successfully resolved through mediation, saving significant time and legal costs. All parties reached an amicable settlement.",
        timeline: "8 months",
        keyPoints: [
            "Avoided lengthy court proceedings",
            "Preserved business relationships",
            "Cost-effective resolution",
            "Mutually beneficial outcome"
        ]
    }

    return (
        <PageWrapper>
            <div className="py-12">
                <div className="container">
                    {/* Back Button */}
                    <Link 
                        href="/blog/case-studies"
                        className="inline-flex items-center text-primary hover:text-secondary mb-8"
                    >
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Case Studies
                    </Link>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 text-text-light mb-4">
                            <span className="flex items-center">
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                {caseStudy.date}
                            </span>
                            <span>•</span>
                            <span>{caseStudy.category}</span>
                        </div>
                        <h1 className="text-4xl font-heading text-primary mb-6">
                            {caseStudy.title}
                        </h1>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative aspect-[2/1] rounded-lg overflow-hidden mb-12"
                    >
                        <Image
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                <section>
                                    <h2 className="text-2xl font-heading text-primary mb-4">Challenge</h2>
                                    <p className="text-text-light">{caseStudy.challenge}</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-heading text-primary mb-4">Our Approach</h2>
                                    <ul className="space-y-2">
                                        {caseStudy.approach.map((step, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mr-3 mt-0.5">
                                                    {index + 1}
                                                </span>
                                                <span className="text-text-light">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-heading text-primary mb-4">Outcome</h2>
                                    <p className="text-text-light">{caseStudy.outcome}</p>
                                </section>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="bg-primary/5 rounded-lg p-6">
                                <h3 className="text-xl font-heading text-primary mb-4">Case Summary</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-sm text-text-light mb-1">Timeline</div>
                                        <div className="font-medium">{caseStudy.timeline}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-text-light mb-2">Key Points</div>
                                        <ul className="space-y-2">
                                            {caseStudy.keyPoints.map((point, index) => (
                                                <li key={index} className="flex items-center text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
} 