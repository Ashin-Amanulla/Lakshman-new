"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrophyIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ScaleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    number: "2020",
    label: "Established",
    description: "Serving clients with dedication since 2020",
    icon: TrophyIcon,
  },
  {
    number: "100+",
    label: "Cases Won",
    description: "Successful legal outcomes across practice areas",
    icon: CheckCircleIcon,
  },
  {
    number: "10+",
    label: "Advocates",
    description: "Experienced advocates and legal professionals",
    icon: UserGroupIcon,
  },
  {
    number: "24/7",
    label: "Availability",
    description: "Dedicated support for all your legal needs",
    icon: ScaleIcon,
  },
];

function CountUpNumber({ target, duration = 2000, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const endValue = parseInt(target.replace(/[^0-9]/g, ""));

    function animate(currentTime) {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [target, duration, inView]);

  return <span>{target.includes("%") ? `${count}%` : `${count}+`}</span>;
}

const features = [
  "Supreme Court Practice",
  "High Court Representation",
  "24/7 Legal Support",
  "Multilingual Services",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section
      id="stats-section"
      ref={ref}
      style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}
    >
      <div className="container">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            Our Track Record
          </span>
          <span style={{ flex: 1, maxWidth: "120px", height: "1px", backgroundColor: "#E8E4DF" }} />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
              marginBottom: "1rem",
            }}
          >
            Trusted by Thousands
          </h2>
          <p
            style={{
              fontFamily: '"Source Sans 3", system-ui, sans-serif',
              fontSize: "1.05rem",
              color: "#6B6B6B",
              maxWidth: "36rem",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Our proven track record speaks for itself. With a commitment to excellence and unwavering dedication to justice, we've built a
            reputation as Kerala's premier modern legal firm.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            marginBottom: "6rem",
          }}
          className="md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E4DF",
                  borderTop: "2px solid #B8860B",
                  borderRadius: "8px",
                  padding: "2rem 1.5rem",
                  boxShadow: "0 1px 4px rgba(26,26,26,0.04)",
                  textAlign: "center",
                  transition: "all 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(26,26,26,0.07)";
                  e.currentTarget.style.borderColor = "#C8C4BF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(26,26,26,0.04)";
                  e.currentTarget.style.borderColor = "#E8E4DF";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: "0 auto 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <stat.icon style={{ width: "28px", height: "28px", color: "#B8860B" }} />
                </div>

                {/* Number */}
                <div
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "2.5rem",
                    fontWeight: 400,
                    color: "#1A1A1A",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  <CountUpNumber target={stat.number} inView={isInView} />
                </div>

                <div
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#B8860B",
                    marginBottom: "0.75rem",
                  }}
                >
                  {stat.label}
                </div>

                <p
                  style={{
                    fontFamily: '"Source Sans 3", system-ui, sans-serif',
                    fontSize: "0.8rem",
                    color: "#6B6B6B",
                    lineHeight: 1.6,
                  }}
                >
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Two-Column */}
        <div
          style={{
            display: "grid",
            gap: "5rem",
            alignItems: "center",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Small label */}
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B8860B",
                marginBottom: "1.25rem",
              }}
            >
              About SL Advocates
            </div>

            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 400,
                color: "#1A1A1A",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              Leading Legal Excellence
              <br />
              <em style={{ fontStyle: "italic", color: "#6B6B6B" }}>in Kerala</em>
            </h2>

            <div style={{ height: "1px", width: "48px", backgroundColor: "#B8860B", opacity: 0.4, marginBottom: "2rem" }} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                marginBottom: "2.5rem",
              }}
            >
              {[
                "Established in 2020, SL Advocates has grown to become one of Kerala's most respected legal firms. Our commitment to providing exceptional legal services with integrity and expertise has earned us the trust of our clients.",
                "We specialize in a comprehensive range of legal services, from complex civil litigation to corporate law, family matters, and property transactions. Our team of seasoned legal professionals brings extensive expertise to every case.",
                "At SL Advocates, we believe that quality legal representation should be accessible, transparent, and results-driven. We work tirelessly to protect our clients' interests while maintaining the highest standards of professional excellence.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: '"Source Sans 3", system-ui, sans-serif',
                    fontSize: "1rem",
                    color: "#6B6B6B",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Feature list */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
                marginBottom: "2.5rem",
              }}
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                  }}
                >
                  <span
                    style={{
                      color: "#B8860B",
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: "1rem",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </span>
                  <span
                    style={{
                      fontFamily: '"Source Sans 3", system-ui, sans-serif',
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "#1A1A1A",
                    }}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/team"
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "#1A1A1A",
                textDecoration: "none",
                border: "1px solid #1A1A1A",
                padding: "0.875rem 2rem",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                minHeight: "44px",
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
              Meet Our Team
              <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
            </Link>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                border: "6px solid #FFFFFF",
                boxShadow: "0 12px 40px rgba(26,26,26,0.1)",
                position: "relative",
              }}
            >
              <Image
                src="/images/asokha.webp"
                alt="SL Advocates Office"
                width={600}
                height={750}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              />
              {/* Warm overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(26,26,26,0.35), transparent 50%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
