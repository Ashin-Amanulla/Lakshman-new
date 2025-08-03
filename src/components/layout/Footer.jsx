import Logo from "@/components/common/Logo";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

// Import social icons correctly
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
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://facebook.com/sladvocates",
  },
  { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/sladvocates" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/company/sladvocates",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/sladvocates",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="section-padding-sm">
          <div className="grid lg:grid-cols-5 gap-12 mb-12">
            {/* Company Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <Logo className="[&>*]:text-white !text-white" />
              <p className="text-white/80 max-w-md">
                Leading law firm in Kerala providing comprehensive legal
                solutions with unwavering dedication and expertise. Your trusted
                legal partner since 1999.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-300" />
                  <div className="text-white/80">
                    <div className="font-medium text-white mb-1">
                      Visit Our Office
                    </div>
                    123 Legal Street, Kochi,
                    <br />
                    Kerala, India - 682001
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-accent-300" />
                  <div>
                    <div className="font-medium text-white mb-1">Call Us</div>
                    <Link
                      href="tel:+919876543210"
                      className="text-white/80 hover:text-accent-300 transition-colors"
                    >
                      +91 98765 43210
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-accent-300" />
                  <div>
                    <div className="font-medium text-white mb-1">Email Us</div>
                    <Link
                      href="mailto:info@sladvocates.in"
                      className="text-white/80 hover:text-accent-300 transition-colors"
                    >
                      info@sladvocates.in
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-accent-300" />
                  <div>
                    <div className="font-medium text-white mb-1">
                      Office Hours
                    </div>
                    <span className="text-white/80">
                      Mon - Fri: 9:30 AM - 6:30 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-accent-300 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowTopRightOnSquareIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Practice Areas
              </h3>
              <ul className="space-y-3">
                {practiceAreas.map((area) => (
                  <li key={area.name}>
                    <Link
                      href={area.href}
                      className="text-white/80 hover:text-accent-300 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span>{area.name}</span>
                      <ArrowTopRightOnSquareIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Legal Resources
              </h3>
              <ul className="space-y-3 mb-8">
                {legalResources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-white/80 hover:text-accent-300 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span>{resource.name}</span>
                      <ArrowTopRightOnSquareIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <h4 className="font-semibold text-white mb-2">
                  Need Legal Help?
                </h4>
                <p className="text-white/80 text-sm mb-3">
                  Get expert legal consultation today.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Free Consultation
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-white/60 text-sm">
              <p>© {currentYear} SL Advocates. All rights reserved.</p>
              <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
              <p>Licensed to practice law in Kerala, India</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="hover:text-white transition-colors duration-200"
              >
                Legal Disclaimer
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-white transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
