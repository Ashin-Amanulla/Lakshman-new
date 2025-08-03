"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";

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

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
          ? "bg-white shadow-lg border-b border-neutral-100"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  pathname === item.href
                    ? "text-primary-600 bg-primary-50"
                    : "text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 bg-primary-600 transition-all duration-200 ${
                    pathname === item.href
                      ? "w-6 -translate-x-1/2"
                      : "w-0 group-hover:w-6 -translate-x-1/2"
                  }`}
                />
              </Link>
            ))}

            {/* CTA Button */}
            <div className="ml-8 pl-8 border-l border-neutral-200">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Consultation
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 hover:bg-primary-50 transition-colors duration-200 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            <div className="flex flex-col items-center justify-center w-5 h-5">
              <span
                className={`block w-5 h-0.5 bg-neutral-700 group-hover:bg-primary-600 transform transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-neutral-700 group-hover:bg-primary-600 transform transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-neutral-700 group-hover:bg-primary-600 transform transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[9999] bg-black/60"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 z-[10000] w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-primary-600">
            <div className="flex items-center">
              <span className="text-white font-bold text-lg">Menu</span>
            </div>
            <button
              type="button"
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile navigation */}
          <nav className="flex-1 p-6" aria-label="Mobile navigation">
            <div className="space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? "text-primary-600 bg-primary-50 border-l-4 border-primary-600"
                      : "text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                  }`}
                  onClick={closeMobileMenu}
                  aria-current={pathname === item.href ? "page" : undefined}
                  style={{
                    animationDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu footer */}
          <div className="p-6 border-t border-neutral-100 bg-neutral-50">
            <div className="space-y-4">
              <Link
                href="/contact"
                className="block w-full py-3 px-4 text-center text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-sm"
                onClick={closeMobileMenu}
              >
                Get Consultation
              </Link>
              <div className="text-center">
                <Link
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <span className="text-base">📞</span>
                  +91 98765 43210
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
