"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
    ScaleIcon,
    UserGroupIcon,
    BuildingOfficeIcon,
    DocumentTextIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    AcademicCapIcon,
    ClipboardDocumentIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    CalendarIcon
} from '@heroicons/react/24/outline'
import PageWrapper from '@/components/layout/PageWrapper'

const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "1000+", label: "Cases Won" },
    { number: "50+", label: "Legal Experts" },
    { number: "98%", label: "Success Rate" }
]

const services = [
    {
        icon: ScaleIcon,
        title: "Civil Litigation",
        description: "Expert representation in civil matters including property disputes and commercial litigation."
    },
    {
        icon: UserGroupIcon,
        title: "Family Law",
        description: "Sensitive handling of family matters with focus on amicable resolution."
    },
    {
        icon: BuildingOfficeIcon,
        title: "Corporate Law",
        description: "Comprehensive legal solutions for businesses of all sizes."
    },
    {
        icon: DocumentTextIcon,
        title: "Documentation",
        description: "Professional drafting and verification of legal documents."
    }
]

const legalResources = [
    {
        title: "Legal Updates",
        description: "Stay informed about recent changes in laws and regulations affecting property rights, family law, and civil matters.",
        icon: DocumentTextIcon
    },
    {
        title: "Legal Education",
        description: "Access comprehensive guides and resources to understand your legal rights and procedures.",
        icon: AcademicCapIcon
    },
    {
        title: "Documentation Guide",
        description: "Essential information about legal documentation requirements and procedures.",
        icon: ClipboardDocumentIcon
    },
    {
        title: "Court Procedures",
        description: "Understanding various court procedures and legal processes in India.",
        icon: ScaleIcon
    }
]

const recentUpdates = [
    {
        date: "March 15, 2024",
        category: "Legal Alert",
        title: "Important Changes in Property Registration Process",
        link: "/blog/legal-updates/property-registration-changes"
    },
    {
        date: "March 10, 2024",
        category: "Court Update",
        title: "Supreme Court Guidelines on Civil Proceedings",
        link: "/blog/legal-updates/supreme-court-guidelines"
    },
    {
        date: "March 5, 2024",
        category: "Legal News",
        title: "New Family Court Procedures Implemented",
        link: "/blog/news/family-court-procedures"
    }
]

const serviceCards = [
    {
        id: 1,
        title: "Civil Litigation",
        description: "Expert representation in civil matters and disputes",
        icon: "/icons/gavel.svg",
        color: "bg-blue-50"
    },
    {
        id: 2,
        title: "Corporate Law",
        description: "Comprehensive legal solutions for businesses",
        icon: "/icons/briefcase.svg",
        color: "bg-indigo-50"
    },
    {
        id: 3,
        title: "Family Law",
        description: "Sensitive handling of family legal matters",
        icon: "/icons/family-shield.svg",
        color: "bg-purple-50"
    },
    {
        id: 4,
        title: "Property Law",
        description: "Expert guidance in property transactions",
        icon: "/icons/property-deed.svg",
        color: "bg-pink-50"
    }
]

export default function HomePage() {
    const [currentCard, setCurrentCard] = useState(0)

    // Auto-rotate cards
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % serviceCards.length)
        }, 3000) // Change card every 3 seconds

        return () => clearInterval(timer)
    }, [])

    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="pt-32 pb-20 overflow-hidden bg-primary">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-center lg:text-left"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Legal Excellence <br />
                                with Integrity
                            </h1>
                            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                                Providing comprehensive legal solutions with dedication and expertise since 2010.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 font-medium"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    href="/practice-areas"
                                    className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-medium"
                                >
                                    Our Services
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column - Service Cards Carousel */}
                        <div className="relative h-[400px] w-full">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">
                                        <div className="w-20 h-20 rounded-xl bg-primary/5 flex items-center justify-center mb-6 mx-auto">
                                            <Image
                                                src={serviceCards[currentCard].icon}
                                                alt=""
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 text-primary"
                                                style={{ color: 'var(--color-primary)' }}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-3 text-center">
                                            {serviceCards[currentCard].title}
                                        </h3>
                                        <p className="text-text-light mb-6 text-center">
                                            {serviceCards[currentCard].description}
                                        </p>
                                        <div className="text-center">
                                            <Link
                                                href={`/practice-areas#${serviceCards[currentCard].title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group"
                                            >
                                                Learn More
                                                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Dots */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                                {serviceCards.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentCard(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${currentCard === index
                                                ? 'bg-white w-8'
                                                : 'bg-white/20 hover:bg-white/40'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Light background */}
            <section className="py-20 bg-gradient-to-b from-white to-primary/5">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center bg-white p-8 rounded-xl shadow-sm"
                            >
                                <h3 className="text-4xl font-bold text-primary mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-text-light font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - White background with decorative elements */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#f8fafc_25%,transparent_25%,transparent_50%,#f8fafc_50%,#f8fafc_75%,transparent_75%,transparent)] bg-[length:64px_64px] opacity-30"></div>
                <div className="container relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="heading-1 mb-6">Practice Areas</h2>
                        <p className="text-text-light text-lg">
                            Specialized legal services across multiple domains
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group h-full"
                            >
                                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-primary/5">
                                    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                                        <service.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-heading text-primary mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-light mb-4 flex-grow">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={`/practice-areas/${service.title.toLowerCase().replace(/ /g, '-')}`}
                                        className="inline-flex items-center text-secondary hover:text-primary transition-colors mt-auto"
                                    >
                                        View Details
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legal Resources Section - Gradient background */}
            <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="heading-1 mb-6">Legal Resources</h2>
                        <p className="text-text-light text-lg">
                            Access comprehensive legal information and stay updated with latest developments
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {legalResources.map((resource, index) => (
                            <motion.div
                                key={resource.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group h-full"
                            >
                                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-primary/5">
                                    <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center mb-6">
                                        <resource.icon className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-heading text-primary mb-3">
                                        {resource.title}
                                    </h3>
                                    <p className="text-text-light">
                                        {resource.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legal Awareness Section - White background with side pattern */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
                <div className="container relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="heading-1 mb-6">
                                Legal Awareness Initiative
                            </h2>
                            <p className="text-text-light mb-8">
                                Understanding your legal rights and responsibilities is crucial. Access our comprehensive resources and stay informed about legal procedures and requirements.
                            </p>
                            <Link
                                href="/resources"
                                className="btn-primary inline-block"
                            >
                                Access Resources
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative h-[500px] rounded-lg overflow-hidden"
                        >
                            <Image
                                src="/images/asokha.webp"
                                height={400}
                                width={400}
                                alt="Legal Resources"
                                
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pre-Footer Section - Gradient background */}
            <section className="py-20 bg-gradient-to-t from-primary/5 to-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Recent Updates */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-xl shadow-sm p-8"
                        >
                            <h2 className="text-3xl font-heading text-primary mb-8 flex items-center gap-3">
                                <DocumentTextIcon className="w-8 h-8 text-secondary" />
                                Legal Updates
                            </h2>
                            <div className="space-y-6">
                                {recentUpdates.map((update, index) => (
                                    <motion.div
                                        key={update.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="border-l-4 border-secondary/20 hover:border-secondary pl-4 transition-colors"
                                    >
                                        <div className="flex items-center gap-2 text-sm text-text-light mb-1">
                                            <CalendarIcon className="w-4 h-4" />
                                            <span>{update.date}</span>
                                            <span className="text-secondary font-medium">{update.category}</span>
                                        </div>
                                        <Link
                                            href={update.link}
                                            className="text-lg font-heading text-primary hover:text-secondary transition-colors"
                                        >
                                            {update.title}
                                        </Link>
                                    </motion.div>
                                ))}
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center text-secondary hover:text-primary transition-colors group"
                                >
                                    View All Updates
                                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Contact Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-primary rounded-xl shadow-sm p-8 text-white relative overflow-hidden"
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff33_25%,transparent_25%,transparent_50%,#ffffff33_50%,#ffffff33_75%,transparent_75%,transparent)] bg-[length:64px_64px]"></div>
                            </div>

                            <div className="relative">
                                <h2 className="text-3xl font-heading mb-6 text-white">
                                    Contact Our Office
                                </h2>
                                <p className="text-white/80 mb-8 text-lg">
                                    Our team is available to assist you with your legal requirements during office hours.
                                </p>
                                <div className="space-y-6 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <ClockIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading mb-1">Office Hours</h3>
                                            <p className="text-white/80">Monday - Friday: 9:30 AM - 6:30 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <PhoneIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading mb-1">Call Us</h3>
                                            <Link
                                                href="tel:+919876543210"
                                                className="text-secondary hover:text-white transition-colors"
                                            >
                                                +91 98765 43210
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition-colors"
                                >
                                    Contact Us
                                    <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
} 