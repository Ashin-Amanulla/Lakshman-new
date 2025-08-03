"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
    EnvelopeIcon,
    PhoneIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    ScaleIcon,
    GlobeAltIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline'
import PageWrapper from '@/components/layout/PageWrapper'
import { team } from './data'

// Team member image component with fallback
function TeamMemberImage({ member }) {
    const [imageError, setImageError] = useState(false)

    if (imageError) {
        return (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <UserCircleIcon className="w-24 h-24 text-primary-400" />
            </div>
        )
    }

    const isFirstImage = member.name === team[0]?.name

    return (
        <Image
            src={member.image}
            alt={`${member.name} - ${member.role} at SL Advocates`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
            loading={isFirstImage ? undefined : "lazy"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            quality={85}
            onError={() => setImageError(true)}
            priority={isFirstImage}
        />
    )
}

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
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-primary mb-4">
                            Our Legal Team
                        </h1>
                        <p className="text-text-light text-lg">
                            Meet our experienced team of legal professionals dedicated to serving
                            your needs with expertise and integrity
                        </p>
                    </motion.div>

                    {/* Team Grid */}
                    <div className="max-w-6xl mx-auto">
                        {/* First Row - Main People (2 columns) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
                        >
                            {team.slice(0, 2).map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {/* Image Section */}
                                    <div className="relative aspect-[3/4] overflow-hidden group bg-neutral-100">
                                        <TeamMemberImage member={member} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Name overlay on hover */}
                                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h4 className="font-semibold text-lg">{member.name}</h4>
                                            <p className="text-sm text-white/90">{member.role}</p>
                                        </div>
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

                        {/* Remaining Rows - Other Team Members (3 columns) */}
                        {team.length > 2 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {team.slice(2).map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (index + 2) * 0.1 }}
                                        className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        {/* Image Section */}
                                        <div className="relative aspect-[3/4] overflow-hidden group bg-neutral-100">
                                            <TeamMemberImage member={member} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Name overlay on hover */}
                                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <h4 className="font-semibold text-lg">{member.name}</h4>
                                                <p className="text-sm text-white/90">{member.role}</p>
                                            </div>
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
                        )}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-20 text-center bg-primary/5 rounded-lg p-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-primary mb-4">
                            Work With Our Team
                        </h1>
                        <p className="text-text-light mb-8 max-w-2xl mx-auto">
                            Get expert legal assistance from our experienced team of lawyers.
                            We're here to help you navigate your legal challenges.
                        </p>
                        <Link
                            href="/careers"
                            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-black/90 transition-colors inline-flex items-center gap-2"
                        >
                            Careers
                        </Link>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    )
} 