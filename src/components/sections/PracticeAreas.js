"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ScaleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  HomeIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const practiceAreas = [
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    description:
      "Expert representation in civil matters including property disputes, contract violations, and commercial litigation with proven success.",
    icon: ScaleIcon,
    features: ["Property Disputes", "Contract Violations", "Commercial Litigation", "Tort Claims", "Employment Disputes"],
    stats: { cases: "30+", success: "96%" },
  },
  {
    id: "corporate-law",
    title: "Corporate Law",
    description:
      "Comprehensive legal solutions for businesses from startups to large enterprises, ensuring compliance and growth.",
    icon: BuildingOfficeIcon,
    features: ["Business Formation", "Corporate Governance", "Mergers & Acquisitions", "Compliance Management", "Contract Drafting"],
    stats: { cases: "15+", success: "99%" },
  },
  {
    id: "family-law",
    title: "Family Law",
    description:
      "Sensitive and professional handling of family matters with focus on amicable resolutions and protecting your interests.",
    icon: UserGroupIcon,
    features: ["Divorce Proceedings", "Child Custody", "Alimony & Support", "Property Settlement", "Adoption Services"],
    stats: { cases: "20+", success: "94%" },
  },
  {
    id: "property-law",
    title: "Property Law",
    description:
      "Expert guidance in property transactions, documentation, and disputes with thorough due diligence.",
    icon: HomeIcon,
    features: ["Property Documentation", "Title Verification", "Real Estate Transactions", "Property Disputes", "Land Acquisition"],
    stats: { cases: "25+", success: "97%" },
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    description:
      "Aggressive defense representation for criminal charges with thorough case preparation and strategic advocacy.",
    icon: ShieldCheckIcon,
    features: ["Criminal Defense", "Bail Applications", "White Collar Crimes", "Economic Offenses", "Appeals"],
    stats: { cases: "15+", success: "92%" },
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    description:
      "Specialized legal services for banking and financial matters including loan recovery and financial disputes.",
    icon: BanknotesIcon,
    features: ["Loan Recovery", "Financial Disputes", "Banking Regulations", "Debt Recovery", "SARFAESI Matters"],
    stats: { cases: "10+", success: "95%" },
  },
];

const processSteps = [
  {
    number: "I",
    title: "Consultation",
    description: "Free initial consultation to understand your legal needs",
  },
  {
    number: "II",
    title: "Analysis",
    description: "Thorough case analysis and legal research strategy",
  },
  {
    number: "III",
    title: "Action",
    description: "Execute the legal strategy with meticulous detail",
  },
  {
    number: "IV",
    title: "Resolution",
    description: "Achieve favorable outcomes while keeping you informed",
  },
];

function ProcessStep({ number, title, description, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.7 }}
      style={{ textAlign: "center", position: "relative" }}
    >
      {/* Roman numeral circle */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "1px solid rgba(184,134,11,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.25rem",
          backgroundColor: "rgba(184,134,11,0.06)",
        }}
      >
        <span
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "1rem",
            fontWeight: 500,
            color: "#B8860B",
            letterSpacing: "0.05em",
          }}
        >
          {number}
        </span>
      </div>

      <h4
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "#FAFAF8",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: '"Source Sans 3", system-ui, sans-serif',
          fontSize: "0.875rem",
          color: "rgba(250, 250, 248, 0.55)",
          lineHeight: 1.65,
          maxWidth: "180px",
          margin: "0 auto",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function PracticeAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      style={{ backgroundColor: "#FAFAF8", padding: "6rem 0" }}
      ref={ref}
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
            Our Expertise
          </span>
          <span style={{ flex: 1, maxWidth: "120px", height: "1px", backgroundColor: "#E8E4DF" }} />
        </motion.div>

        {/* Heading */}
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
            Comprehensive Legal Services
          </h2>
          <p
            style={{
              fontFamily: '"Source Sans 3", system-ui, sans-serif',
              fontSize: "1.05rem",
              color: "#6B6B6B",
              maxWidth: "38rem",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            From complex litigation to routine legal matters, our experienced
            team provides specialized expertise across multiple practice areas
            to serve your legal needs.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            marginBottom: "5rem",
          }}
          className="md:grid-cols-2 lg:grid-cols-3"
        >
          {practiceAreas.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.7 }}
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E4DF",
                  borderTop: "2px solid #B8860B",
                  borderRadius: "8px",
                  padding: "2rem",
                  boxShadow: "0 1px 4px rgba(26,26,26,0.04)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(26,26,26,0.07)";
                  e.currentTarget.style.borderColor = "#C8C4BF";
                  e.currentTarget.style.backgroundColor = "rgba(245,243,240,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(26,26,26,0.04)";
                  e.currentTarget.style.borderColor = "#E8E4DF";
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <area.icon
                    style={{
                      width: "32px",
                      height: "32px",
                      color: "#B8860B",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#B8860B",
                      padding: "4px 8px",
                      border: "1px solid rgba(184,134,11,0.2)",
                      borderRadius: "4px",
                    }}
                  >
                    Area {i + 1}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {area.title}
                </h3>

                <p
                  style={{
                    fontFamily: '"Source Sans 3", system-ui, sans-serif',
                    fontSize: "0.9rem",
                    color: "#6B6B6B",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {area.description}
                </p>

                {/* Feature list */}
                <div
                  style={{
                    borderTop: "1px solid #F0EDE8",
                    paddingTop: "1rem",
                    marginBottom: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  {area.features.slice(0, 3).map((f, fi) => (
                    <div
                      key={fi}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: "#B8860B", fontSize: "0.5rem", flexShrink: 0 }}>◆</span>
                      <span
                        style={{
                          fontFamily: '"Source Sans 3", system-ui, sans-serif',
                          fontSize: "0.825rem",
                          color: "#4A4846",
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={`/practice-areas/${area.id}`}
                  style={{
                    fontFamily: '"Source Sans 3", system-ui, sans-serif',
                    fontSize: "0.775rem",
                    fontWeight: 500,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "#B8860B",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    transition: "gap 200ms ease-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = "0.625rem";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = "0.375rem";
                  }}
                >
                  Learn More
                  <ArrowRightIcon style={{ width: "14px", height: "14px" }} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            backgroundColor: "#1A1A1A",
            borderRadius: "8px",
            padding: "4rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient accent */}
          <div
            style={{
              position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(184,134,11,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem", position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B8860B",
                marginBottom: "1rem",
              }}
            >
              How We Work
            </div>
            <h3
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 400,
                color: "#FAFAF8",
                letterSpacing: "-0.01em",
                marginBottom: "0.875rem",
              }}
            >
              Our Legal Process
            </h3>
            <p
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "1rem",
                color: "rgba(250, 250, 248, 0.55)",
                maxWidth: "32rem",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              We follow a systematic approach to ensure the best possible
              outcome for your legal matters.
            </p>
          </div>

          {/* Steps — relative rule line */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gap: "3rem",
            }}
            className="md:grid-cols-4"
          >
            {/* Connecting rule line */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: "28px",
                left: "calc(12.5% + 28px)",
                right: "calc(12.5% + 28px)",
                height: "1px",
                backgroundColor: "rgba(184,134,11,0.2)",
              }}
            />

            {processSteps.map((step, i) => (
              <ProcessStep
                key={step.title}
                number={step.number}
                title={step.title}
                description={step.description}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ textAlign: "center", marginTop: "3.5rem", position: "relative", zIndex: 1 }}
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
                padding: "0.875rem 2.5rem",
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
              Start Your Case Today
              <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
