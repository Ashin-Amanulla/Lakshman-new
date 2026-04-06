"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function DisclaimerModal() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem("disclaimer_accepted");

        if (!hasAccepted) {
            const timer = setTimeout(() => setIsVisible(true), 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("disclaimer_accepted", "true");
        setIsVisible(false);
    };

    const handleDecline = () => {
        window.location.href = "https://www.google.com";
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    role="dialog"
                    aria-modal="false"
                    aria-labelledby="disclaimer-bar-title"
                    aria-describedby="disclaimer-bar-desc"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 28, stiffness: 320 }}
                    className="fixed inset-x-0 bottom-0 z-[10000] border-t-2 border-accent bg-card shadow-[0_-8px_32px_rgba(26,26,26,0.12)]"
                >
                    <button
                        type="button"
                        onClick={handleDecline}
                        className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        aria-label="Decline and leave"
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </button>

                    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pt-4 pr-12 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pr-14 lg:flex-row lg:items-center lg:gap-8 lg:px-6 lg:pt-3 lg:pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                        <div className="flex min-w-0 flex-1 items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-lg" aria-hidden>
                                ⚖️
                            </span>
                            <div className="min-w-0 space-y-2 text-sm leading-relaxed text-muted-foreground">
                                <p
                                    id="disclaimer-bar-title"
                                    className="font-heading text-base font-semibold text-foreground"
                                >
                                    {"Disclaimer & consent"}
                                </p>
                                <p id="disclaimer-bar-desc">
                                    This site shares general information about{" "}
                                    <strong className="font-semibold text-foreground">SL Advocates</strong> only.
                                    It is not legal advice and does not create a lawyer–client relationship. Do not
                                    send confidential information here. We store your choice in local storage (see{" "}
                                    <Link
                                        href="/privacy"
                                        className="font-medium text-accent underline underline-offset-2 hover:text-accent-secondary"
                                    >
                                        Privacy
                                    </Link>
                                    ).
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    <Link
                                        href="/terms"
                                        className="font-medium text-foreground underline underline-offset-2 hover:text-accent"
                                    >
                                        Terms of Use
                                    </Link>
                                    <span className="mx-2 text-border">·</span>
                                    <Link
                                        href="/privacy"
                                        className="font-medium text-foreground underline underline-offset-2 hover:text-accent"
                                    >
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full shrink-0 flex-col gap-2 sm:flex-row sm:w-auto sm:items-center sm:justify-end lg:gap-3">
                            <button
                                type="button"
                                onClick={handleDecline}
                                className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-border-hover hover:bg-muted"
                            >
                                Decline
                            </button>
                            <button
                                type="button"
                                onClick={handleAccept}
                                className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-secondary"
                            >
                                Accept & continue
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
