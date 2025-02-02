"use client"

import { motion } from 'framer-motion'
import { 
    CalendarIcon, 
    ArrowLeftIcon, 
    ClockIcon,
    DocumentCheckIcon,
    BellAlertIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import PageWrapper from '@/components/layout/PageWrapper'

export default function LegalUpdateDetail({ params }) {
    const update = {
        title: "New Property Registration Guidelines",
        date: "March 10, 2024",
        image: "/images/blog/legal-update-1.jpg",
        summary: "Key amendments to property registration procedures in Kerala affecting documentation requirements and processing timelines.",
        changes: [
            {
                title: "Online Registration",
                description: "Introduction of mandatory online registration system for all property transactions."
            },
            {
                title: "Document Verification",
                description: "Enhanced verification process including digital authentication of documents."
            },
            {
                title: "Timeline Requirements",
                description: "New maximum processing time of 15 days for standard registrations."
            }
        ],
        impact: [
            "Faster processing of registrations",
            "Improved security measures",
            "Reduced paperwork",
            "Greater transparency"
        ],
        effectiveDate: "April 1, 2024",
        requirements: [
            "Valid ID proof (Aadhaar/PAN)",
            "Digital signature certificate",
            "Property documents in specified format",
            "Recent photographs of parties"
        ]
    }

    return (
        <PageWrapper>
            <div className="py-12">
                <div className="container max-w-7xl mx-auto px-4">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link 
                            href="/blog/legal-updates"
                            className="inline-flex items-center text-primary hover:text-secondary"
                        >
                            <ArrowLeftIcon className="w-4 h-4 mr-2" />
                            Back to Legal Updates
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 text-text-light mb-4">
                            <span className="flex items-center">
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                {update.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center">
                                <ClockIcon className="w-4 h-4 mr-2" />
                                Effective: {update.effectiveDate}
                            </span>
                        </div>
                        <h1 className="text-4xl font-heading text-primary mb-6">
                            {update.title}
                        </h1>
                        <p className="text-lg text-text-light">
                            {update.summary}
                        </p>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative aspect-[2/1] rounded-lg overflow-hidden mb-12"
                    >
                        <Image
                            src={update.image}
                            alt={update.title}
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
                                className="space-y-12"
                            >
                                {/* Key Changes */}
                                <section>
                                    <h2 className="text-2xl font-heading text-primary mb-6 flex items-center">
                                        <DocumentCheckIcon className="w-6 h-6 mr-2" />
                                        Key Changes
                                    </h2>
                                    <div className="space-y-6">
                                        {update.changes.map((change, index) => (
                                            <div 
                                                key={index}
                                                className="bg-white rounded-lg p-6 shadow-sm"
                                            >
                                                <h3 className="text-xl font-heading text-primary mb-3">
                                                    {change.title}
                                                </h3>
                                                <p className="text-text-light">
                                                    {change.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* New Requirements */}
                                <section>
                                    <h2 className="text-2xl font-heading text-primary mb-6">
                                        New Requirements
                                    </h2>
                                    <ul className="bg-primary/5 rounded-lg p-6 space-y-4">
                                        {update.requirements.map((req, index) => (
                                            <li 
                                                key={index}
                                                className="flex items-start"
                                            >
                                                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mr-3 mt-0.5">
                                                    {index + 1}
                                                </span>
                                                <span className="text-text-light">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            {/* Impact Analysis */}
                            <div className="bg-primary/5 rounded-lg p-6">
                                <h3 className="text-xl font-heading text-primary mb-4 flex items-center">
                                    <BellAlertIcon className="w-5 h-5 mr-2" />
                                    Impact Analysis
                                </h3>
                                <ul className="space-y-3">
                                    {update.impact.map((point, index) => (
                                        <li 
                                            key={index}
                                            className="flex items-center text-text-light"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Quick Action */}
                            <div className="bg-secondary/10 rounded-lg p-6">
                                <h3 className="text-xl font-heading text-primary mb-4">
                                    Need Assistance?
                                </h3>
                                <p className="text-text-light mb-4">
                                    Our team can help you navigate these new requirements and ensure compliance.
                                </p>
                                <Link
                                    href="/contact"
                                    className="btn-primary w-full text-center"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
} 