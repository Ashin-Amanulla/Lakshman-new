"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function DisclaimerModal() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted disclaimer
        const hasAccepted = localStorage.getItem('disclaimer_accepted');

        if (!hasAccepted) {
            // Small delay to ensure page is loaded
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('disclaimer_accepted', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        // Option 1: Redirect to Google (safer than closing tab)
        window.location.href = 'https://www.google.com';

        // Option 2: Try to close tab (may not work in all browsers due to security)
        // window.close();
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
                        onClick={handleDecline}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">⚖️</span>
                                        <h2 className="text-2xl font-bold text-white">
                                            Disclaimer
                                        </h2>
                                    </div>
                                    <button
                                        onClick={handleDecline}
                                        className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
                                        aria-label="Close disclaimer"
                                    >
                                        <XMarkIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-8 py-8">
                                <div className="prose prose-neutral max-w-none">
                                    <div className="space-y-4 text-neutral-700 leading-relaxed">
                                        <p>
                                            This website is intended solely to provide general information about
                                            <strong className="text-primary-600"> SL Advocates</strong>, already available in the public domain.
                                            It does not constitute legal advice, solicitation, or create a lawyer-client relationship.
                                        </p>

                                        <p>
                                            While we strive for accuracy, <strong className="text-primary-600">SL Advocates</strong> is not liable
                                            for any reliance placed on this content. For legal matters, please consult a qualified professional.
                                        </p>

                                        <p>
                                            Please avoid sharing any <strong>confidential or sensitive information</strong> via this platform —
                                            do so at your own risk.
                                        </p>



                                        <div className="flex items-center gap-4 text-sm text-primary-600 pt-2">
                                            <span className="text-lg">👉</span>
                                            <div className="flex gap-4">
                                                <a
                                                    href="/terms"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-semibold hover:text-primary-700 transition-colors underline underline-offset-4"
                                                >
                                                    Terms of Use
                                                </a>
                                                <span className="text-neutral-400">|</span>
                                                <a
                                                    href="/privacy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-semibold hover:text-primary-700 transition-colors underline underline-offset-4"
                                                >
                                                    Privacy Policy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="bg-neutral-50 px-8 py-6 border-t border-neutral-100">
                                <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
                                    <div className="text-sm text-neutral-600">
                                        By proceeding, you acknowledge that you have read and understood this disclaimer.
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={handleDecline}
                                            className="px-6 py-2.5 text-sm font-semibold text-neutral-600 bg-white border-2 border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
                                        >
                                            Decline
                                        </button>
                                        <button
                                            onClick={handleAccept}
                                            className="px-8 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                                        >
                                            Accept & Enter
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-primary-600"></div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}