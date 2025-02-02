import Logo from "@/components/common/Logo";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

// Import social icons correctly
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const practiceAreas = [
  { name: "Civil Litigation", href: "/practice-areas#civil-litigation" },
  { name: "Corporate Law", href: "/practice-areas#corporate-law" },
  { name: "Family Law", href: "/practice-areas#family-law" },
  { name: "Property Law", href: "/practice-areas#property-law" },
];

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, href: "#" },
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "LinkedIn", icon: FaLinkedin, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and About Section */}
            <div className="space-y-6">
              <Logo className="[&>*]:text-white !text-white" />
              <p className="text-white/80">
                Providing comprehensive legal solutions with dedication and
                expertise since 2010.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-lg font-bold mb-6">Practice Areas</h3>
              <ul className="space-y-4">
                {practiceAreas.map((area) => (
                  <li key={area.name}>
                    <Link
                      href={area.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-white/80">
                    123 Legal Street, Kochi,
                    <br />
                    Kerala, India - 682001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5" />
                  <Link
                    href="tel:+919876543210"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +91 98765 43210
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 h-5" />
                  <Link
                    href="mailto:info@sladvocates.in"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    info@sladvocates.in
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5" />
                  <span className="text-white/80">
                    Mon - Fri: 9:30 AM - 6:30 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 SL Advocates. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
