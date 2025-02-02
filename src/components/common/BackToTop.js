"use client"

import { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-6 z-50 p-3 rounded-full bg-primary shadow-lg transition-all duration-300 hover:bg-secondary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <ArrowUpIcon className="w-6 h-6 text-white" />
        </button>
    )
} 