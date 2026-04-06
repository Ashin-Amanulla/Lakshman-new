"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    content:
      "SL Advocates provided exceptional legal support during our company's merger. Their expertise and attention to detail were invaluable in navigating every complexity.",
    author: "Rajesh Mehta",
    position: "CEO, TechCorp India",
    rating: 5,
  },
  {
    id: 2,
    content:
      "SL Advocates handled our property documentation and registration matter with exceptional diligence. Their deep knowledge of Kerala property laws saved us from a potentially costly dispute.",
    author: "Anitha Krishnan",
    position: "Property Owner, Thrissur",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Professional, responsive, and thorough in their approach. They helped us resolve a complex property dispute efficiently and with great care.",
    author: "Priya Sharma",
    position: "Real Estate Developer",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(184,134,11,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

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
            Client Testimonials
          </span>
          <span style={{ flex: 1, maxWidth: "120px", height: "1px", backgroundColor: "#E8E4DF" }} />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              color: "#1A1A1A",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Block */}
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {/* Large decorative quote mark */}
            <div
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "6rem",
                fontWeight: 400,
                color: "#B8860B",
                lineHeight: 0.8,
                marginBottom: "1.5rem",
                textAlign: "center",
                opacity: 0.3,
                letterSpacing: "-0.05em",
              }}
              aria-hidden="true"
            >
              "
            </div>

            {/* Quote */}
            <blockquote
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#1A1A1A",
                lineHeight: 1.6,
                textAlign: "center",
                marginBottom: "2.5rem",
              }}
            >
              "{active.content}"
            </blockquote>

            {/* Stars */}
            <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
              {Array.from({ length: active.rating }).map((_, i) => (
                <span
                  key={i}
                  style={{ color: "#B8860B", fontSize: "0.9rem", letterSpacing: "0.15em" }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Thin rule */}
            <div style={{ height: "1px", backgroundColor: "#E8E4DF", width: "48px", margin: "0 auto 1.5rem" }} />

            {/* Author info */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  marginBottom: "0.25rem",
                }}
              >
                {active.author}
              </div>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: "0.62rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#B8860B",
                }}
              >
                {active.position}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
          >
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #E8E4DF",
                backgroundColor: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6B6B6B",
                transition: "all 200ms ease-out",
                fontSize: "1rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#B8860B";
                e.currentTarget.style.color = "#B8860B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E8E4DF";
                e.currentTarget.style.color = "#6B6B6B";
              }}
            >
              ←
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    height: "1px",
                    width: i === activeIndex ? "28px" : "14px",
                    backgroundColor: i === activeIndex ? "#B8860B" : "#E8E4DF",
                    border: "none",
                    padding: "3px 0",
                    cursor: "pointer",
                    transition: "all 300ms ease-out",
                    borderRadius: "1px",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #E8E4DF",
                backgroundColor: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6B6B6B",
                transition: "all 200ms ease-out",
                fontSize: "1rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#B8860B";
                e.currentTarget.style.color = "#B8860B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E8E4DF";
                e.currentTarget.style.color = "#6B6B6B";
              }}
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}