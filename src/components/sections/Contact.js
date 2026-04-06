"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const ctaStats = [
  { number: "24/7", label: "Emergency Support" },
  { number: "Free", label: "Initial Consultation" },
  { number: "2020", label: "Established" },
  { number: "10+", label: "Advocates" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#FAFAF8", padding: "6rem 0" }}
    >
      <div className="container">

        {/* Dark CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8 }}
          style={{
            backgroundColor: "#1A1A1A",
            borderRadius: "8px",
            padding: "5rem 2rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient glow */}
          <div
            style={{
              position: "absolute",
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "500px",
              background: "radial-gradient(ellipse, rgba(184,134,11,0.07) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Top rule accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "64px",
              height: "2px",
              backgroundColor: "#B8860B",
              opacity: 0.7,
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "44rem", margin: "0 auto" }}>

            {/* Section label */}
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B8860B",
                marginBottom: "1.5rem",
              }}
            >
              Legal Assistance
            </div>

            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 400,
                color: "#FAFAF8",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              Need Legal Assistance?
            </h2>

            {/* Decorative rule */}
            <div
              style={{
                height: "1px",
                width: "48px",
                backgroundColor: "#B8860B",
                margin: "0 auto 1.75rem",
                opacity: 0.4,
              }}
            />

            <p
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "1.05rem",
                color: "rgba(250, 250, 248, 0.65)",
                lineHeight: 1.75,
                marginBottom: "2.75rem",
              }}
            >
              {"Don't"} let legal issues overwhelm you. Our experienced team is ready to
              provide the guidance and representation you need to protect your interests.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                marginBottom: "4rem",
              }}
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
                Free Consultation
                <PhoneIcon style={{ width: "16px", height: "16px" }} />
              </Link>

              <Link
                href="/contact"
                style={{
                  fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(250, 250, 248, 0.85)",
                  backgroundColor: "transparent",
                  padding: "0.875rem 2.25rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid rgba(250, 250, 248, 0.25)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  minHeight: "48px",
                  transition: "all 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(250, 250, 248, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(250, 250, 248, 0.5)";
                  e.currentTarget.style.color = "#FAFAF8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "rgba(250, 250, 248, 0.25)";
                  e.currentTarget.style.color = "rgba(250, 250, 248, 0.85)";
                }}
              >
                Contact Us
                <EnvelopeIcon style={{ width: "16px", height: "16px" }} />
              </Link>
            </div>

            {/* Stats Rule + Row */}
            <div style={{ borderTop: "1px solid rgba(232, 228, 223, 0.12)", paddingTop: "3rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "0",
                }}
                className="grid-cols-2 sm:grid-cols-4"
              >
                {ctaStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      textAlign: "center",
                      padding: "0 1rem",
                      borderRight: i < ctaStats.length - 1 ? "1px solid rgba(232, 228, 223, 0.12)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                        fontWeight: 400,
                        color: "#D4A84B",
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
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(250, 250, 248, 0.4)",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
