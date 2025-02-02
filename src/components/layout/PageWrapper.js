"use client"

import { motion } from 'framer-motion'

export default function PageWrapper({ children }) {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen pt-24 md:pt-28" // Added padding-top to account for fixed navbar
        >
            {children}
        </motion.main>
    )
} 