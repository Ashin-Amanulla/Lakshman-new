"use client"

import { motion } from 'framer-motion'
import { CalendarIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import PageWrapper from '@/components/layout/PageWrapper'

export default function NewsDetail({ params }) {
    const article = {
        title: "Supreme Court's Latest Judgment",
        date: "March 1, 2024",
        image: "/images/blog/news-1.jpg",
        author: "Lakshman RS",
        content: "Detailed analysis of the recent Supreme Court ruling...",
        keyPoints: [
            "New precedent set for similar cases",
            "Impact on existing procedures",
            "Implementation timeline"
        ],
        relatedTopics: [
            "Civil Procedure",
            "Constitutional Law",
            "Judicial Precedents"
        ]
    }

    return (
        <PageWrapper>
            <div className="py-12">
                <div className="container">
                    {/* Similar structure to others, but with news article specific content */}
                    {/* ... */}
                </div>
            </div>
        </PageWrapper>
    )
} 