"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
    CalendarIcon,
    TagIcon,
    UserIcon,
    ClockIcon
} from '@heroicons/react/24/outline'
import PageWrapper from '@/components/layout/PageWrapper'

const blogPosts = [
    {
        id: 1,
        title: "Understanding Property Registration Process",
        category: "Legal Guide",
        date: "March 15, 2024",
        image: "/images/property-change.jpg",
        excerpt: "A comprehensive guide to property registration procedures and requirements in India.",
        author: "Adv. Lakshman RS",
        authorRole: "Managing Partner",
        authorImage: "/images/lak.jpg",
        slug: "property-registration-guide"
    },
    {
        id: 2,
        title: "Recent Changes in Family Law",
        category: "Legal Updates",
        date: "March 10, 2024",
        image: "/images/property-change.jpg",
        excerpt: "Key updates and amendments in family law that you need to know about.",
        author: "Adv. Sudakshina Prasad",
        authorRole: "Senior Partner",
        authorImage: "/images/lak.jpg",
        slug: "family-law-updates"
    },
    {
        id: 3,
        title: "Corporate Law Compliance Guide",
        category: "Business Law",
        date: "March 5, 2024",
        image: "/images/property-change.jpg",
        excerpt: "Essential compliance requirements for businesses operating in India.",
        author: "Adv. Rahul Menon",
        authorRole: "Partner",
        authorImage: "/images/lak.jpg",
        slug: "corporate-compliance-guide"
    },
    {
        id: 4,
        title: "Rights in Criminal Proceedings",
        category: "Criminal Law",
        date: "February 28, 2024",
        image: "/images/property-change.jpg",
        excerpt: "Understanding your fundamental rights during criminal proceedings.",
        author: "Adv. Priya Kumar",
        authorRole: "Associate",
        authorImage: "/images/lak.jpg",
        slug: "criminal-proceedings-rights"
    },
    {
        id: 5,
        title: "Real Estate Due Diligence",
        category: "Property Law",
        date: "February 25, 2024",
        image: "/images/property-change.jpg",
        excerpt: "Important aspects to verify before making property investments.",
        author: "Adv. Lakshman RS",
        authorRole: "Managing Partner",
        authorImage: "/images/lak.jpg",
        slug: "real-estate-due-diligence"
    },
    {
        id: 6,
        title: "Divorce Proceedings in India",
        category: "Family Law",
        date: "February 20, 2024",
        image: "/images/property-change.jpg",
        excerpt: "A step-by-step guide to divorce proceedings under different personal laws.",
        author: "Adv. Sudakshina Prasad",
        authorRole: "Senior Partner",
        authorImage: "/images/lak.jpg",
        slug: "divorce-proceedings-guide"
    },
    // Add more blog posts...
]

const categories = ["All", "Legal Updates", "Case Analysis", "Legal Guides", "News"]

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const featuredPost = blogPosts.find(post => post.featured)
    const regularPosts = filteredPosts.filter(post => !post.featured)

    return (
        <PageWrapper>
            <div className="py-12">
                <div className="container">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-primary mb-4">
                            Legal Insights & Updates
                        </h1>
                        <p className="text-text-light text-lg">
                            Stay informed with our latest legal insights, analysis, and updates
                        </p>
                    </motion.div>

                    {/* Search and Filter */}
                    <div className="flex flex-col md:flex-row gap-4 mb-12">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="form-input md:w-64"
                        />
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${activeCategory === category
                                            ? 'bg-black text-white'
                                            : 'bg-primary/5 text-primary hover:bg-primary/10'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Featured Post */}
                    {featuredPost && activeCategory === "All" && !searchQuery && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-0 p-8 text-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-secondary/80 px-3 py-1 rounded-full text-sm">
                                            Featured
                                        </span>
                                        <span className="flex items-center text-sm">
                                            <CalendarIcon className="w-4 h-4 mr-1" />
                                            {featuredPost.date}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-heading mb-4">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-white/80 mb-4 max-w-2xl">
                                        {featuredPost.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${featuredPost.slug}`}
                                        className="text-secondary hover:text-white transition-colors"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Regular Posts Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {regularPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                            >
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="flex items-center text-sm text-text-light">
                                            <TagIcon className="w-4 h-4 mr-1" />
                                            {post.category}
                                        </span>
                                        <span className="flex items-center text-sm text-text-light">
                                            <ClockIcon className="w-4 h-4 mr-1" />
                                            {post.date}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-heading text-primary mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-text-light mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-text-light">
                                            <UserIcon className="w-4 h-4" />
                                            {post.author}
                                        </div>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-secondary hover:text-primary transition-colors"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    )
} 