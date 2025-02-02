"use client";

import { useState } from "react";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-text-light hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2.5 text-text-light hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-white border-t`}
      >
        <div className="container py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-2 text-base font-medium transition-colors ${
                pathname === item.href
                  ? "text-primary"
                  : "text-text-light hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block w-full bg-primary text-white px-6 py-3 rounded-lg text-center hover:bg-primary/90 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
