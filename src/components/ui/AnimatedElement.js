"use client"

import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function AnimatedElement({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={defaultVariants}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 