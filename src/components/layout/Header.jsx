"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  // { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-glass shadow-medium border-b border-neutral-200/20"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary-600 focus-visible:text-primary-600 ${
                  pathname === item.href
                    ? "text-primary-600"
                    : "text-neutral-700"
                } after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-200 ${
                  pathname === item.href
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary btn-sm ml-4">
              Get Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden relative z-50 p-2 rounded-xl text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            <div className="relative w-6 h-6">
              <span
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm" />
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 z-40 w-full max-w-sm h-full bg-white shadow-large transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <h2
              id="mobile-menu-title"
              className="text-lg font-semibold text-neutral-900"
            >
              Menu
            </h2>
          </div>

          {/* Mobile navigation */}
          <nav
            className="flex-1 px-6 py-6 space-y-2"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors duration-200 ${
                  pathname === item.href
                    ? "bg-primary-50 text-primary-600"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-primary-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu footer */}
          <div className="p-6 border-t border-neutral-200">
            <Link
              href="/consultation"
              className="btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Consultation
            </Link>
            <div className="mt-4 text-center">
              <Link
                href="tel:+919876543210"
                className="text-sm text-neutral-600 hover:text-primary-600 transition-colors"
              >
                Call: +91 98765 43210
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
