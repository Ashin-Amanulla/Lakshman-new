"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    EnvelopeIcon,
    PhoneIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    ScaleIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline'
import PageWrapper from '@/components/layout/PageWrapper'
import { team } from './data'

export default function TeamPage() {
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
                        <h1 className="heading-1 mb-6">Our Legal Team</h1>
                        <p className="text-text-light text-lg">
                            Meet our experienced team of legal professionals dedicated to serving
                            your needs with expertise and integrity
                        </p>
                    </motion.div>

                    {/* Team Grid - Modified to 2x2 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                            >
                                {/* Image Section */}
                                <div className="relative h-72 overflow-hidden group">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-primary mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-secondary font-medium">{member.role}</p>
                                    </div>

                                    {/* Quick Info */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-2">
                                            <BriefcaseIcon className="w-5 h-5 text-secondary" />
                                            <span className="text-sm">{member.experience}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <GlobeAltIcon className="w-5 h-5 text-secondary" />
                                            <div className="flex gap-2">
                                                {member.languages.map((lang) => (
                                                    <span
                                                        key={lang}
                                                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                                                    >
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-text-light text-sm mb-6 line-clamp-3">
                                        {member.bio}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        {/* Contact */}
                                        <div className="flex items-center gap-4">
                                            <Link
                                                href={`mailto:${member.email}`}
                                                className="text-text-light hover:text-primary transition-colors"
                                            >
                                                <EnvelopeIcon className="w-5 h-5" />
                                            </Link>
                                            <Link
                                                href={`tel:${member.phone}`}
                                                className="text-text-light hover:text-primary transition-colors"
                                            >
                                                <PhoneIcon className="w-5 h-5" />
                                            </Link>
                                        </div>

                                        {/* View Profile Link */}
                                        <Link
                                            href={`/team/${member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                            className="text-sm font-medium text-primary hover:text-secondary transition-colors"
                                        >
                                            View Full Profile →
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-20 text-center bg-primary/5 rounded-lg p-12"
                    >
                        <h2 className="heading-2 mb-6">Work With Our Team</h2>
                        <p className="text-text-light mb-8 max-w-2xl mx-auto">
                            Get expert legal assistance from our experienced team of lawyers.
                            We're here to help you navigate your legal challenges.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                        >
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    )
} 