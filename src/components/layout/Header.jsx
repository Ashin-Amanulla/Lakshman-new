"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#FAFAF8",
        borderBottom: `1px solid ${isScrolled ? "#E8E4DF" : "transparent"}`,
        boxShadow: isScrolled ? "0 1px 8px rgba(26,26,26,0.06)" : "none",
        transition: "border-color 200ms ease-out, box-shadow 200ms ease-out",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: "72px" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  letterSpacing: "-0.01em",
                }}
              >
                SL Advocates
              </span>
              <span
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#B8860B",
                  marginTop: "2px",
                }}
              >
                Legal Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" style={{ gap: "0.25rem" }} aria-label="Main navigation">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: '"Source Sans 3", system-ui, sans-serif',
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: active ? "#B8860B" : "#6B6B6B",
                    textDecoration: "none",
                    padding: "0.5rem 0.875rem",
                    borderRadius: "4px",
                    transition: "color 200ms ease-out",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => { if (!active) e.target.style.color = "#1A1A1A"; }}
                  onMouseLeave={(e) => { if (!active) e.target.style.color = "#6B6B6B"; }}
                >
                  {item.name}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "20px",
                        height: "1px",
                        backgroundColor: "#B8860B",
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Rule divider */}
            <div style={{ width: "1px", height: "20px", backgroundColor: "#E8E4DF", margin: "0 1rem" }} />

            {/* CTA */}
            <Link
              href="/contact"
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                backgroundColor: "#B8860B",
                padding: "0.6rem 1.5rem",
                borderRadius: "6px",
                textDecoration: "none",
                border: "1px solid #B8860B",
                transition: "all 200ms ease-out",
                minHeight: "44px",
                display: "inline-flex",
                alignItems: "center",
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
              Get Consultation
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "6px",
              border: "1px solid #E8E4DF",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: "#1A1A1A",
              transition: "border-color 200ms ease-out",
            }}
          >
            {mobileMenuOpen ? (
              <XMarkIcon style={{ width: "20px", height: "20px" }} />
            ) : (
              <Bars3Icon style={{ width: "20px", height: "20px" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          style={{ backgroundColor: "rgba(26,26,26,0.4)", backdropFilter: "blur(2px)" }}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="lg:hidden fixed top-0 right-0 z-50 h-full"
        style={{
          width: "min(320px, 85vw)",
          backgroundColor: "#FAFAF8",
          boxShadow: "-4px 0 24px rgba(26,26,26,0.12)",
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms ease-out",
        }}
        role="dialog"
        aria-modal="true"
      >
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Mobile Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.25rem 1.5rem",
              borderBottom: "1px solid #E8E4DF",
            }}
          >
            <span
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "#1A1A1A",
              }}
            >
              Menu
            </span>
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "6px",
                border: "1px solid #E8E4DF",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: "#6B6B6B",
              }}
            >
              <XMarkIcon style={{ width: "18px", height: "18px" }} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav style={{ flex: 1, padding: "1.5rem" }} aria-label="Mobile navigation">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    aria-current={active ? "page" : undefined}
                    style={{
                      fontFamily: '"Source Sans 3", system-ui, sans-serif',
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: active ? "#B8860B" : "#1A1A1A",
                      textDecoration: "none",
                      padding: "0.875rem 1rem",
                      borderRadius: "4px",
                      borderLeft: active ? "2px solid #B8860B" : "2px solid transparent",
                      backgroundColor: active ? "rgba(184,134,11,0.06)" : "transparent",
                      display: "block",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Mobile Footer */}
          <div
            style={{
              padding: "1.5rem",
              borderTop: "1px solid #E8E4DF",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                backgroundColor: "#B8860B",
                padding: "0.875rem 1.5rem",
                borderRadius: "6px",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
                minHeight: "44px",
              }}
            >
              Get Consultation
            </Link>
            <Link
              href="tel:+919876543210"
              style={{
                fontFamily: '"Source Sans 3", system-ui, sans-serif',
                fontSize: "0.875rem",
                color: "#6B6B6B",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
                padding: "0.5rem",
              }}
            >
              +91 98765 43210
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
