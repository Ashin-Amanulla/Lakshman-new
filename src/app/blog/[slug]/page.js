"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    CalendarIcon,
    TagIcon,
    UserIcon,
    ArrowLeftIcon,
} from '@heroicons/react/24/outline'
import PageWrapper from '@/components/layout/PageWrapper'

// This would normally come from an API or database
const blogPost = {
    title: "Understanding Property Registration Process",
    category: "Legal Guide",
    date: "March 15, 2024",
    image: "/images/property-change.jpg", // Using the temporary image
    content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h2>Key Points to Consider</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <h3>Documentation Requirements</h3>
        <ul>
            <li>Valid ID proof</li>
            <li>Property documents</li>
            <li>Tax receipts</li>
            <li>NOC certificates</li>
        </ul>
        
        <h2>Legal Implications</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
    author: {
        name: "Adv. Lakshman RS",
        role: "Managing Partner",
        image: "/images/lak.jpg", // Using the temporary author image
    },
    relatedPosts: [
        {
            title: "Real Estate Due Diligence",
            category: "Property Law",
            date: "February 25, 2024",
            image: "/images/property-change.jpg", // Using the same temporary image
            slug: "real-estate-due-diligence"
        },
        {
            title: "Recent Changes in Family Law",
            category: "Legal Updates",
            date: "March 10, 2024",
            image: "/images/property-change.jpg", // Using the same temporary image
            slug: "family-law-updates"
        }
    ]
}

export default function BlogPostPage() {
    return (
        <PageWrapper>
            <div className="py-12">
                <div className="container">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-text-light hover:text-primary mb-8 group"
                    >
                        <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-8">
                            <Image
                                src={blogPost.image}
                                alt={blogPost.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-4 text-text-light">
                                <span className="flex items-center">
                                    <TagIcon className="w-4 h-4 mr-1" />
                                    {blogPost.category}
                                </span>
                                <span className="flex items-center">
                                    <CalendarIcon className="w-4 h-4 mr-1" />
                                    {blogPost.date}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                                {blogPost.title}
                            </h1>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mb-12">
                                <Image
                                    src={blogPost.author.image}
                                    alt={blogPost.author.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                                <div>
                                    <div className="font-medium text-primary">
                                        {blogPost.author.name}
                                    </div>
                                    <div className="text-text-light text-sm">
                                        {blogPost.author.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-w-4xl mx-auto prose prose-lg prose-primary mb-16"
                        dangerouslySetInnerHTML={{ __html: blogPost.content }}
                    />

                    {/* Related Posts */}
                    <div className="border-t pt-12">
                        <h2 className="text-2xl font-bold text-primary mb-8">
                            Related Articles
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {blogPost.relatedPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group"
                                >
                                    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="relative aspect-[16/9]">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 mb-3 text-text-light text-sm">
                                                <span>{post.category}</span>
                                                <span>{post.date}</span>
                                            </div>
                                            <h3 className="text-xl font-medium text-primary group-hover:text-secondary transition-colors">
                                                {post.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
} 