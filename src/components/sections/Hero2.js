"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ScaleIcon, BuildingOfficeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const legalFacts = [
    {
        title: "Constitutional Excellence",
        description: "Defending rights with constitutional precision and legal expertise",
        icon: ScaleIcon,
        stat: "1000+ Cases Won"
    },
    {
        title: "Corporate Solutions",
        description: "Comprehensive business law services for enterprises of all sizes",
        icon: BuildingOfficeIcon,
        stat: "98% Success Rate"
    },
    {
        title: "Family Protection",
        description: "Compassionate legal support for family matters and personal disputes",
        icon: UserGroupIcon,
        stat: "25+ Years Experience"
    }
];

export default function Hero2() {
    const [currentFact, setCurrentFact] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFact((prev) => (prev + 1) % legalFacts.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
                {/* Justice Scales Floating Pattern */}
                <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute opacity-5"
                            style={{
                                left: `${15 + (i * 15)}%`,
                                top: `${10 + (i * 12)}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 8 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1.5,
                            }}
                        >
                            <ScaleIcon className="w-16 h-16 text-amber-400" />
                        </motion.div>
                    ))}
                </div>

                {/* Geometric Legal Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="legal-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                <circle cx="50" cy="50" r="2" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#legal-grid)" className="text-amber-400/20" />
                    </svg>
                </div>

                {/* Floating Legal Elements */}
                <motion.div
                    className="absolute top-20 left-10 text-amber-400/20"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L13.09 5.26L16 4L14.74 7.09L18 8L14.74 8.91L16 12L13.09 10.74L12 14L10.91 10.74L8 12L9.26 8.91L6 8L9.26 7.09L8 4L10.91 5.26L12 2Z" />
                    </svg>
                </motion.div>

                <motion.div
                    className="absolute top-40 right-20 text-amber-400/15"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <BuildingOfficeIcon className="w-24 h-24" />
                </motion.div>

                {/* Animated Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Column - Main Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            {/* Legal Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-400 backdrop-blur-sm"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    <ScaleIcon className="w-5 h-5" />
                                </motion.div>
                                <span className="font-medium">Kerala's Premier Legal Advocates</span>
                            </motion.div>

                            {/* Main Heading */}
                            <div className="space-y-6">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="text-5xl lg:text-7xl font-bold leading-tight"
                                >
                                    <span className="text-white">Justice</span>
                                    <br />
                                    <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                                        Delivered
                                    </span>
                                    <br />
                                    <span className="text-slate-300">with Precision</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="text-xl text-slate-300 leading-relaxed max-w-2xl"
                                >
                                    Uncompromising legal excellence with three decades of proven results.
                                    We transform complex legal challenges into decisive victories for our clients.
                                </motion.p>
                            </div>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link
                                    href="/consultation"
                                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-amber-500/25"
                                >
                                    <span>Schedule Consultation</span>
                                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>

                                <Link
                                    href="/practice-areas"
                                    className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                                >
                                    <span>Explore Expertise</span>
                                    <motion.div
                                        animate={{ rotate: [0, 180, 360] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        <ScaleIcon className="w-5 h-5" />
                                    </motion.div>
                                </Link>
                            </motion.div>

                            {/* Achievement Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                                className="flex flex-wrap gap-8"
                            >
                                {[
                                    { value: "1000+", label: "Cases Won", color: "text-green-400" },
                                    { value: "98%", label: "Success Rate", color: "text-blue-400" },
                                    { value: "25+", label: "Years Excellence", color: "text-amber-400" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-center group cursor-pointer"
                                    >
                                        <div className={`text-3xl font-bold ${stat.color} group-hover:text-white transition-colors duration-200`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-slate-400 text-sm font-medium mt-1">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Interactive Legal Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="relative"
                        >
                            <div className="relative max-w-lg mx-auto">

                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl blur-3xl transform scale-110" />

                                {/* Main Card */}
                                <div className="relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentFact}
                                            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                            exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
                                        >
                                            {/* Icon */}
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg"
                                            >
                                                {React.createElement(legalFacts[currentFact].icon, { className: "w-10 h-10 text-white" })}
                                            </motion.div>

                                            {/* Content */}
                                            <div className="text-center space-y-4">
                                                <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                                                    {legalFacts[currentFact].title}
                                                </h3>

                                                <p className="text-slate-600 leading-relaxed px-2">
                                                    {legalFacts[currentFact].description}
                                                </p>

                                                {/* Stat Badge */}
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-slate-200 px-6 py-3 rounded-full"
                                                >
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                    <span className="font-semibold text-slate-700">
                                                        {legalFacts[currentFact].stat}
                                                    </span>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Dots */}
                                    <div className="flex justify-center gap-3 mt-8">
                                        {legalFacts.map((_, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => setCurrentFact(index)}
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentFact === index
                                                        ? "bg-amber-400 shadow-lg shadow-amber-400/50"
                                                        : "bg-white/30 hover:bg-white/50"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors cursor-pointer"
                >
                    <span className="text-sm font-medium">Discover More</span>
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-3 bg-current rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
