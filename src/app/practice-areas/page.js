"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageWrapper from '@/components/layout/PageWrapper'
import {
    TruckIcon,
    ScaleIcon,
    HeartIcon,
    ClipboardDocumentListIcon,
    DocumentTextIcon,
    ExclamationTriangleIcon,
    CalculatorIcon,
    BuildingLibraryIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline'

const practiceAreas = [
    {
        title: "Automotive / Tire Defects",
        category: "Automotive",
        image: "/images/law-stick.webp",
        icon: TruckIcon,
        description: "Wide experience in complex cross-border and local corporate automotive cases.",
        link: "/practice-areas/automotive-defects"
    },
    {
        title: "Business Litigation",
        category: "Business",
        image: "/images/law-stick.webp",
        icon: ScaleIcon,
        description: "Qualified and experienced attorneys available upon notice for business disputes.",
        link: "/practice-areas/business-litigation"
    },
    {
        title: "Birth Injury",
        category: "Medical",
        image: "/images/law-stick.webp",
        icon: HeartIcon,
        description: "Professional and private handling of sensitive medical cases.",
        link: "/practice-areas/birth-injury"
    },
    {
        title: "Well Planners",
        category: "Planning",
        image: "/images/law-stick.webp",
        icon: ClipboardDocumentListIcon,
        description: "Team of legal experts using fully screened attorneys for comprehensive planning.",
        link: "/practice-areas/well-planners"
    },
    {
        title: "Lawyer Notes",
        category: "Legal",
        image: "/images/law-stick.webp",
        icon: DocumentTextIcon,
        description: "Professional arrangement and hiring of appearance attorneys.",
        link: "/practice-areas/lawyer-notes"
    },
    {
        title: "Corporate Fraud",
        category: "Corporate",
        image: "/images/law-stick.webp",
        icon: ExclamationTriangleIcon,
        description: "Qualified attorneys for complex corporate fraud cases.",
        link: "/practice-areas/corporate-fraud"
    },
    {
        title: "Taxation & Accounts",
        category: "Tax",
        image: "/images/law-stick.webp",
        icon: CalculatorIcon,
        description: "Professional handling of taxation and accounting matters.",
        link: "/practice-areas/taxation"
    },
    {
        title: "Justice Fight",
        category: "Justice",
        image: "/images/law-stick.webp",
        icon: BuildingLibraryIcon,
        description: "Expert legal team fighting for your rights.",
        link: "/practice-areas/justice"
    },
    {
        title: "Family Law",
        category: "Family",
        image: "/images/law-stick.webp",
        icon: UserGroupIcon,
        description: "Professional assistance in family legal matters.",
        link: "/practice-areas/family-law"
    }
]

const categories = [
    "All",
    "Automotive",
    "Business",
    "Medical",
    "Planning",
    "Legal",
    "Corporate",
    "Tax",
    "Justice",
    "Family"
]

export default function PracticeAreasPage() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredAreas = practiceAreas.filter(area =>
        activeCategory === "All" || area.category === activeCategory
    )

    return (
        <PageWrapper>
            <div className="py-12">
                <div className="container">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-primary mb-4">
                            Practice Areas
                        </h1>
                        <p className="text-text-light text-lg font-normal leading-relaxed tracking-normal">
                            Different Legal Practice Areas and What They Cover
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-wrap justify-center gap-3 mb-8"
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm tracking-wide ${activeCategory === category
                                            ? 'bg-black text-white shadow-md scale-105 font-medium'
                                            : 'bg-white text-text hover:bg-primary/5 hover:scale-105 font-normal'
                                        } border border-primary/10`}
                                >
                                    {category}
                                </button>
                            ))}
                        </motion.div>

                        {/* Add category description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center text-text-light max-w-2xl mx-auto font-normal tracking-normal leading-relaxed"
                        >
                            {activeCategory === "All"
                                ? "Explore our comprehensive range of legal services"
                                : `Browse our ${activeCategory.toLowerCase()} related legal services and expertise`
                            }
                        </motion.p>
                    </div>

                    {/* Practice Areas Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                    >
                        {filteredAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <Link href={area.link}>
                                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                                        {/* Image Container */}
                                        <div className="relative h-48">
                                            <Image
                                                src={area.image}
                                                alt={area.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                            {/* Icon */}
                                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg">
                                                <area.icon className="w-full h-full text-primary" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-medium tracking-tight leading-snug text-primary mb-2">
                                                {area.title}
                                            </h3>
                                            <p className="text-text-light mb-4 font-normal leading-relaxed tracking-normal">
                                                {area.description}
                                            </p>
                                            <span className="text-secondary font-medium tracking-wide inline-flex items-center">
                                                Learn More
                                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-primary rounded-xl overflow-hidden"
                    >
                        <div className="relative px-8 py-16">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff33_25%,transparent_25%,transparent_50%,#ffffff33_50%,#ffffff33_75%,transparent_75%,transparent)] bg-[length:64px_64px]"></div>
                            </div>

                            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
                                <div className="text-white text-center md:text-left flex-1">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-3 text-white">
                                        Need Professional Legal Assistance?
                                    </h2>
                                    <p className="text-white/80 text-base md:text-lg max-w-2xl font-normal leading-relaxed tracking-normal">
                                        Schedule a consultation with our expert team to discuss your legal requirements
                                    </p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-secondary hover:text-white transition-colors font-medium tracking-wide inline-flex items-center gap-2 group"
                                >
                                    Consult Us
                                    <svg
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    )
} 