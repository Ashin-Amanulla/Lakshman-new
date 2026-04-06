"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, ScaleIcon, BuildingOfficeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import IndiaClientMap from "./IndiaClientMap";

const legalFacts = [
  {
    title: "Constitutional Excellence",
    description: "Defending rights with constitutional precision and dedicated legal expertise since 2020.",
    icon: ScaleIcon,
    stat: "100+ Cases Won",
  },
  {
    title: "Corporate Solutions",
    description: "Comprehensive business law services for enterprises of all sizes across Kerala.",
    icon: BuildingOfficeIcon,
    stat: "Trusted Advice",
  },
  {
    title: "Family Protection",
    description: "Compassionate legal support for family matters and personal disputes with care.",
    icon: UserGroupIcon,
    stat: "Personalized Support",
  },
];

const stats = [
  { number: "100+", label: "Cases Handled" },
  { number: "2020", label: "Established" },
  { number: "10+", label: "Advocates" },
  { number: "24/7", label: "Availability" },
];

export default function Hero() {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % legalFacts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAFAF8",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(184,134,11,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Paper grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "8rem 1.5rem 6rem",
        }}
      >
        {/* Section Label — centered, full width */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ flex: 1, maxWidth: "80px", height: "1px", backgroundColor: "#E8E4DF" }} />
          <span
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#B8860B",
              whiteSpace: "nowrap",
            }}
          >
            Established 2020 · Kerala, India
          </span>
          <span style={{ flex: 1, maxWidth: "80px", height: "1px", backgroundColor: "#E8E4DF" }} />
        </motion.div>

        {/* Two-column grid: text left, map right */}
        <div className="flex flex-col lg:flex-row lg:gap-14 lg:items-center" style={{ marginBottom: "4rem" }}>

          {/* Left column — headline + subheading + CTAs */}
          <div className="flex-1 min-w-0 text-center lg:text-left">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
              className="mx-auto lg:mx-0"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(2.75rem, 7vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#1A1A1A",
                marginBottom: "1.5rem",
                maxWidth: "32rem",
              }}
            >
              Legal Excellence
              <br />
              <em style={{ fontStyle: "italic", color: "#B8860B" }}>with Integrity</em>
            </motion.h1>

            {/* Decorative rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="mx-auto lg:mx-0"
              style={{
                height: "1px",
                width: "64px",
                backgroundColor: "#B8860B",
                marginBottom: "2rem",
                opacity: 0.5,
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="mx-auto lg:mx-0"
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                fontWeight: 400,
                lineHeight: 1.75,
                color: "#6B6B6B",
                maxWidth: "36rem",
                marginBottom: "2.5rem",
                letterSpacing: "0.01em",
              }}
            >
              Premier law firm in Kerala providing comprehensive legal solutions with
              unwavering dedication and expertise. Your trusted legal partner since 2020.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/consultation"
                style={{
                  fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  backgroundColor: "#B8860B",
                  padding: "0.875rem 2.25rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #B8860B",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  minHeight: "48px",
                  transition: "all 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4A84B";
                  e.currentTarget.style.borderColor = "#D4A84B";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#B8860B";
                  e.currentTarget.style.borderColor = "#B8860B";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get Free Consultation
                <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
              </Link>
              <Link
                href="/practice-areas"
                style={{
                  fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#1A1A1A",
                  backgroundColor: "transparent",
                  padding: "0.875rem 2.25rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #1A1A1A",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  minHeight: "48px",
                  transition: "all 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F5F3F0";
                  e.currentTarget.style.color = "#B8860B";
                  e.currentTarget.style.borderColor = "#B8860B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#1A1A1A";
                  e.currentTarget.style.borderColor = "#1A1A1A";
                }}
              >
                Our Practice Areas
              </Link>
            </motion.div>
          </div>

          {/* Right column — India map (desktop only) */}
          <div
            className="hidden lg:block"
            style={{ width: "320px", flexShrink: 0 }}
          >
            <IndiaClientMap />
          </div>
        </div>

        {/* Stats Bar — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          style={{ borderTop: "1px solid #E8E4DF", paddingTop: "2.5rem" }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}
            className="grid-cols-2 sm:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  padding: "0 1.5rem",
                  borderRight: i < stats.length - 1 ? "1px solid #E8E4DF" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    fontWeight: 400,
                    color: "#B8860B",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#6B6B6B",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rotating service highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{ marginTop: "3rem", textAlign: "center" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFact}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.625rem 1.25rem",
                border: "1px solid #E8E4DF",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 1px 4px rgba(26,26,26,0.04)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#B8860B",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  fontSize: "0.875rem",
                  color: "#6B6B6B",
                }}
              >
                <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>
                  {legalFacts[currentFact].title}
                </strong>
                {" — "}
                {legalFacts[currentFact].stat}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
            {legalFacts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentFact(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  height: "1px",
                  width: i === currentFact ? "24px" : "12px",
                  backgroundColor: i === currentFact ? "#B8860B" : "#E8E4DF",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 300ms ease-out",
                  borderRadius: "1px",
                }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
