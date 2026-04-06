"use client";

import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const practiceAreas = [
  { name: "Civil Litigation", href: "/practice-areas/civil-litigation" },
  { name: "Corporate Law", href: "/practice-areas/corporate-law" },
  { name: "Family Law", href: "/practice-areas/family-law" },
  { name: "Property Law", href: "/practice-areas/property-law" },
  { name: "Criminal Law", href: "/practice-areas/criminal-law" },
  { name: "Banking & Finance", href: "/practice-areas/banking-finance" },
];

const legalResources = [
  { name: "Legal Updates", href: "/blog/legal-updates" },
  { name: "Legal Education", href: "/resources/legal-education" },
  { name: "Court Procedures", href: "/resources/court-procedures" },
  { name: "Documentation Guide", href: "/resources/documentation" },
];

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/sladvocates" },
  { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/sladvocates" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/company/sladvocates" },
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/sladvocates" },
];

const linkStyle = {
  fontFamily: '"Source Sans 3", system-ui, sans-serif',
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.65)",
  textDecoration: "none",
  transition: "color 200ms ease-out",
  display: "block",
  lineHeight: "1.6",
};

const headingStyle = {
  fontFamily: '"Playfair Display", Georgia, serif',
  fontSize: "1rem",
  fontWeight: 600,
  color: "#FAFAF8",
  marginBottom: "1.25rem",
  letterSpacing: "-0.01em",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1A1A1A", color: "#FAFAF8" }}>
      {/* Top rule */}
      <div style={{ height: "1px", backgroundColor: "rgba(184,134,11,0.25)" }} />

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="lg:grid-cols-4"
        >
          {/* Column 1 – Firm Info */}
          <div style={{ gridColumn: "1 / span 1" }}>
            {/* Wordmark */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  color: "#FAFAF8",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                SL Advocates
              </div>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#B8860B",
                  marginTop: "4px",
                }}
              >
                Legal Excellence
              </div>
            </div>

            <p
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "0.875rem",
                color: "rgba(250, 250, 248, 0.6)",
                lineHeight: "1.75",
                marginBottom: "1.75rem",
              }}
            >
              Leading law firm in Kerala providing comprehensive legal
              solutions with unwavering dedication and expertise. Your trusted
              legal partner since 2020.
            </p>

            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                {
                  icon: MapPinIcon,
                  label: "Visit Our Office",
                  text: "123 Legal Street, Kochi, Kerala 682001",
                  href: "https://maps.google.com",
                },
                {
                  icon: PhoneIcon,
                  label: "Call Us",
                  text: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                {
                  icon: EnvelopeIcon,
                  label: "Email Us",
                  text: "info@sladvocates.in",
                  href: "mailto:info@sladvocates.in",
                },
                {
                  icon: ClockIcon,
                  label: "Office Hours",
                  text: "Mon–Fri: 9:30 AM – 6:30 PM",
                  href: null,
                },
              ].map(({ icon: Icon, label, text, href }) => (
                <div
                  key={label}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
                >
                  <Icon
                    style={{
                      width: "16px",
                      height: "16px",
                      flexShrink: 0,
                      marginTop: "3px",
                      color: "#B8860B",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: '"IBM Plex Mono", monospace',
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(250, 250, 248, 0.4)",
                        marginBottom: "2px",
                      }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <Link
                        href={href}
                        style={{
                          fontFamily: '"Source Sans 3", system-ui, sans-serif',
                          fontSize: "0.875rem",
                          color: "rgba(250, 250, 248, 0.7)",
                          textDecoration: "none",
                          transition: "color 200ms ease-out",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#D4A84B")}
                        onMouseLeave={(e) => (e.target.style.color = "rgba(250, 250, 248, 0.7)")}
                      >
                        {text}
                      </Link>
                    ) : (
                      <span
                        style={{
                          fontFamily: '"Source Sans 3", system-ui, sans-serif',
                          fontSize: "0.875rem",
                          color: "rgba(250, 250, 248, 0.7)",
                        }}
                      >
                        {text}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop: "2rem" }}>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(250, 250, 248, 0.4)",
                  marginBottom: "0.75rem",
                }}
              >
                Follow Us
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "6px",
                      border: "1px solid rgba(232, 228, 223, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(250, 250, 248, 0.5)",
                      textDecoration: "none",
                      transition: "all 200ms ease-out",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(184,134,11,0.6)";
                      e.currentTarget.style.color = "#D4A84B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(232, 228, 223, 0.15)";
                      e.currentTarget.style.color = "rgba(250, 250, 248, 0.5)";
                    }}
                  >
                    <social.icon style={{ width: "14px", height: "14px" }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 style={headingStyle}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = "#D4A84B")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(250, 250, 248, 0.65)")}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Practice Areas */}
          <div>
            <h3 style={headingStyle}>Practice Areas</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = "#D4A84B")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(250, 250, 248, 0.65)")}
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Resources + CTA */}
          <div>
            <h3 style={headingStyle}>Legal Resources</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
              {legalResources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = "#D4A84B")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(250, 250, 248, 0.65)")}
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Consultation CTA */}
            <div
              style={{
                padding: "1.25rem",
                border: "1px solid rgba(184,134,11,0.25)",
                borderRadius: "8px",
                borderTop: "2px solid #B8860B",
              }}
            >
              <div
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#FAFAF8",
                  marginBottom: "0.5rem",
                }}
              >
                Need Legal Help?
              </div>
              <p
                style={{
                  fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  fontSize: "0.8rem",
                  color: "rgba(250, 250, 248, 0.55)",
                  marginBottom: "1rem",
                  lineHeight: "1.5",
                }}
              >
                Get expert legal consultation today.
              </p>
              <Link
                href="/contact"
                style={{
                  fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  backgroundColor: "#B8860B",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background-color 200ms ease-out",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#D4A84B")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#B8860B")}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(232, 228, 223, 0.12)",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
          className="sm:flex-row sm:justify-between sm:items-center"
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem 1rem",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "0.8rem",
                color: "rgba(250, 250, 248, 0.4)",
              }}
            >
              © {currentYear} SL Advocates. All rights reserved.
            </span>
            <span style={{ color: "rgba(250, 250, 248, 0.2)", fontSize: "0.6rem" }}>·</span>
            <Link
              href="https://www.xyvin.com"
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "0.8rem",
                color: "rgba(250, 250, 248, 0.4)",
                textDecoration: "none",
                transition: "color 200ms ease-out",
              }}
              onMouseEnter={(e) => (e.target.style.color = "rgba(250, 250, 248, 0.7)")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(250, 250, 248, 0.4)")}
            >
              Developed by Xyvin
            </Link>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  fontFamily: '"Source Sans 3", system-ui, sans-serif',
                  fontSize: "0.8rem",
                  color: "rgba(250, 250, 248, 0.4)",
                  textDecoration: "none",
                  transition: "color 200ms ease-out",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#D4A84B")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(250, 250, 248, 0.4)")}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
