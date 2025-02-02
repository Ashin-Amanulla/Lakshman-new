"use client"

import { motion } from 'framer-motion'
import { CalendarIcon, ArrowLeftIcon, DownloadIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import PageWrapper from '@/components/layout/PageWrapper'

export default function ResourceDetail({ params }) {
    const resource = {
        title: "Guide to Civil Litigation",
        date: "March 5, 2024",
        image: "/images/blog/resource-1.jpg",
        type: "Legal Guide",
        description: "A comprehensive guide to understanding civil litigation procedures in India.",
        sections: [
            {
                title: "Understanding Civil Cases",
                content: "Detailed explanation of what constitutes a civil case..."
            },
            {
                title: "Filing Procedures",
                content: "Step-by-step guide to filing a civil case..."
            }
        ],
        downloads: [
            {
                title: "Civil Case Checklist",
                format: "PDF",
                size: "156 KB"
            },
            {
                title: "Sample Plaint Format",
                format: "DOC",
                size: "82 KB"
            }
        ]
    }

    return (
        <PageWrapper>
            <div className="py-12">
                <div className="container">
                    {/* Similar structure to others, but with resource specific content */}
                    {/* ... */}
                </div>
            </div>
        </PageWrapper>
    )
} 