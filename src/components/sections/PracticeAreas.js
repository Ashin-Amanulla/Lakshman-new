"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ScaleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  HomeIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const practiceAreas = [
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    description:
      "Expert representation in civil matters including property disputes, contract violations, and commercial litigation with proven success.",
    icon: ScaleIcon,
    features: [
      "Property Disputes",
      "Contract Violations",
      "Commercial Litigation",
      "Tort Claims",
      "Employment Disputes",
    ],
    stats: { cases: "250+", success: "96%" },
    image: "/images/civil-litigation.jpg",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "corporate-law",
    title: "Corporate Law",
    description:
      "Comprehensive legal solutions for businesses from startups to large enterprises, ensuring compliance and growth.",
    icon: BuildingOfficeIcon,
    features: [
      "Business Formation",
      "Corporate Governance",
      "Mergers & Acquisitions",
      "Compliance Management",
      "Contract Drafting",
    ],
    stats: { cases: "180+", success: "99%" },
    image: "/images/corporate-law.jpg",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "family-law",
    title: "Family Law",
    description:
      "Sensitive and professional handling of family matters with focus on amicable resolutions and protecting your interests.",
    icon: UserGroupIcon,
    features: [
      "Divorce Proceedings",
      "Child Custody",
      "Alimony & Support",
      "Property Settlement",
      "Adoption Services",
    ],
    stats: { cases: "200+", success: "94%" },
    image: "/images/family-law.jpg",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "property-law",
    title: "Property Law",
    description:
      "Expert guidance in property transactions, documentation, and disputes with thorough due diligence.",
    icon: HomeIcon,
    features: [
      "Property Documentation",
      "Title Verification",
      "Real Estate Transactions",
      "Property Disputes",
      "Land Acquisition",
    ],
    stats: { cases: "320+", success: "97%" },
    image: "/images/property-law.jpg",
    color: "from-green-500 to-green-600",
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    description:
      "Aggressive defense representation for criminal charges with thorough case preparation and strategic advocacy.",
    icon: ShieldCheckIcon,
    features: [
      "Criminal Defense",
      "Bail Applications",
      "White Collar Crimes",
      "Economic Offenses",
      "Appeals",
    ],
    stats: { cases: "150+", success: "92%" },
    image: "/images/criminal-law.jpg",
    color: "from-red-500 to-red-600",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    description:
      "Specialized legal services for banking and financial matters including loan recovery and financial disputes.",
    icon: BanknotesIcon,
    features: [
      "Loan Recovery",
      "Financial Disputes",
      "Banking Regulations",
      "Debt Recovery",
      "SARFAESI Matters",
    ],
    stats: { cases: "120+", success: "95%" },
    image: "/images/banking-finance.jpg",
    color: "from-yellow-500 to-yellow-600",
  },
];

const ProcessStep = ({ number, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="w-12 h-12 rounded-full bg-primary-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
        {number}
      </div>
      <h4 className="font-semibold text-neutral-900 mb-2">{title}</h4>
      <p className="text-small text-neutral-600">{description}</p>
    </motion.div>
  );
};

export default function PracticeAreas() {
  const [activeArea, setActiveArea] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="heading-h2 mb-6">Comprehensive Legal Services</h2>
          <p className="text-lead max-w-3xl mx-auto">
            From complex litigation to routine legal matters, our experienced
            team provides specialized expertise across multiple practice areas
            to serve your legal needs.
          </p>
        </motion.div>

        {/* Practice Areas Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="card-hover h-full">
                <div className="card-body space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-r bg-primary-500 flex items-center justify-center flex-shrink-0`}
                    >
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-h4">{area.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-body">{area.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-3">
                      Key Services:
                    </h4>
                    <ul className="space-y-2">
                      {area.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-neutral-600"
                        >
                          <ChevronRightIcon className="w-4 h-4 text-primary-400" />
                          {feature}
                        </li>
                      ))}
                      {area.features.length > 3 && (
                        <li className="text-sm text-neutral-500 ml-6">
                          +{area.features.length - 3} more services
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/practice-areas/${area.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group/link"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="heading-h3 mb-4">Our Legal Process</h3>
            <p className="text-body max-w-2xl mx-auto">
              We follow a systematic approach to ensure the best possible
              outcome for your legal matters
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="1"
              title="Consultation"
              description="Free initial consultation to understand your legal needs and objectives"
              delay={0.4}
            />
            <ProcessStep
              number="2"
              title="Analysis"
              description="Thorough case analysis and legal research to develop the best strategy"
              delay={0.5}
            />
            <ProcessStep
              number="3"
              title="Action"
              description="Execute the legal strategy with meticulous attention to detail"
              delay={0.6}
            />
            <ProcessStep
              number="4"
              title="Resolution"
              description="Achieve favorable outcomes while keeping you informed throughout"
              delay={0.7}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-8"
          >
            <Link href="/consultation" className="btn-primary btn-lg group">
              Start Your Case Today
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
