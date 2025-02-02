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
    GlobeAltIcon,
    ArrowLeftIcon
} from '@heroicons/react/24/outline'
import PageWrapper from '@/components/layout/PageWrapper'
import { team } from '../data'

export default function TeamMemberPage({ params }) {
    const member = team.find(m =>
        m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === params.slug
    )

    if (!member) return null

    return (
        <PageWrapper>
            <div className="py-12">
                <div className="container">
                    {/* Back Button */}
                    <Link
                        href="/team"
                        className="inline-flex items-center text-text-light hover:text-primary mb-8 group"
                    >
                        <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Team
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h1 className="text-4xl font-bold text-primary mb-2">
                                    {member.name}
                                </h1>
                                <p className="text-xl text-secondary">{member.role}</p>
                            </div>

                            <div className="prose prose-lg">
                                <p>{member.bio}</p>
                            </div>

                            {/* Education */}
                            <div>
                                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <AcademicCapIcon className="w-6 h-6" />
                                    Education
                                </h2>
                                <ul className="space-y-2">
                                    {member.education.map((edu, idx) => (
                                        <li key={idx} className="text-text-light">
                                            {edu}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Expertise */}
                            <div>
                                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <ScaleIcon className="w-6 h-6" />
                                    Areas of Expertise
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {member.expertise.map((exp, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-primary/5 text-primary px-4 py-2 rounded-full text-sm"
                                        >
                                            {exp}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Languages */}
                            <div>
                                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <GlobeAltIcon className="w-6 h-6" />
                                    Languages
                                </h2>
                                <div className="flex gap-2">
                                    {member.languages.map((lang, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                                        >
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="pt-4 flex gap-4">
                                <Link
                                    href={`mailto:${member.email}`}
                                    className="flex items-center gap-2 text-text-light hover:text-primary transition-colors"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    <span>{member.email}</span>
                                </Link>
                                <Link
                                    href={`tel:${member.phone}`}
                                    className="flex items-center gap-2 text-text-light hover:text-primary transition-colors"
                                >
                                    <PhoneIcon className="w-5 h-5" />
                                    <span>{member.phone}</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
} 