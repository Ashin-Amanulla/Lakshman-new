"use client";

import { motion } from "framer-motion";
import {
  UserGroupIcon,
  ScaleIcon,
  TrophyIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const reasons = [
  {
    icon: UserGroupIcon,
    title: "Client-Focused Approach",
    description:
      "We prioritize understanding your unique needs and delivering personalized legal solutions that protect your interests.",
  },
  {
    icon: ScaleIcon,
    title: "Legal Excellence",
    description:
      "Our team of experienced attorneys brings deep expertise across various practice areas with a commitment to quality.",
  },
  {
    icon: TrophyIcon,
    title: "Proven Track Record",
    description:
      "Consistently delivering successful outcomes for our clients across complex cases and challenging legal matters.",
  },
  {
    icon: ClockIcon,
    title: "Timely Response",
    description:
      "Quick response times and proactive communication throughout your case, keeping you informed at every step.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Ethical Practice",
    description:
      "Maintaining the highest standards of professional ethics and integrity in all our legal work and client relationships.",
  },
  {
    icon: GlobeAltIcon,
    title: "Global Perspective",
    description:
      "International experience with a deep understanding of local laws, providing comprehensive legal coverage.",
  },
];

export default function WhyChooseUs() {
  return (
    <section style={{ backgroundColor: "#FAFAF8", padding: "6rem 0" }}>
      <div className="container">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "1.25rem",
          }}
        >
          <span style={{ flex: 1, maxWidth: "120px", height: "1px", backgroundColor: "#E8E4DF" }} />
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
            Why Choose Us
          </span>
          <span style={{ flex: 1, maxWidth: "120px", height: "1px", backgroundColor: "#E8E4DF" }} />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "40rem", margin: "0 auto 4rem" }}
        >
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              color: "#1A1A1A",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Setting the Standard in Legal Excellence
          </h2>
          <p
            style={{
              fontFamily: '"Source Sans 3", system-ui, sans-serif',
              fontSize: "1rem",
              color: "#6B6B6B",
              lineHeight: 1.75,
            }}
          >
            With years of dedicated experience and a commitment to excellence, we provide
            unmatched legal expertise and personalized service to every client.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div
          style={{ display: "grid", gap: "1.5rem" }}
          className="md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E4DF",
                  borderRadius: "8px",
                  padding: "2rem",
                  boxShadow: "0 1px 4px rgba(26,26,26,0.04)",
                  height: "100%",
                  transition: "all 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = "#B8860B";
                  e.currentTarget.style.borderTopWidth = "2px";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(26,26,26,0.07)";
                  e.currentTarget.style.backgroundColor = "rgba(245,243,240,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = "#E8E4DF";
                  e.currentTarget.style.borderTopWidth = "1px";
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(26,26,26,0.04)";
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                }}
              >
                {/* Icon */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <reason.icon
                    style={{ width: "24px", height: "24px", color: "#B8860B" }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {reason.title}
                </h3>

                {/* Rule */}
                <div style={{ height: "1px", width: "32px", backgroundColor: "#E8E4DF", marginBottom: "0.875rem" }} />

                {/* Description */}
                <p
                  style={{
                    fontFamily: '"Source Sans 3", system-ui, sans-serif',
                    fontSize: "0.9rem",
                    color: "#6B6B6B",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "3.5rem" }}
        >
          <Link
            href="/contact"
            style={{
              fontFamily: '"Source Sans 3", system-ui, sans-serif',
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#1A1A1A",
              textDecoration: "none",
              border: "1px solid #1A1A1A",
              padding: "0.875rem 2.5rem",
              borderRadius: "6px",
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
            Schedule a Consultation
            <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}