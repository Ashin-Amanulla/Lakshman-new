"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UserIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Free Legal Consultation - Expert Legal Advice | SL Advocates",
  description:
    "Schedule a free consultation with our experienced legal team. Get expert advice on civil litigation, corporate law, family matters, and property issues.",
  keywords: [
    "legal consultation",
    "free legal advice",
    "lawyer consultation Kerala",
    "legal help Kochi",
  ],
};

const consultationBenefits = [
  {
    icon: ShieldCheckIcon,
    title: "Confidential Discussion",
    description:
      "All consultations are completely confidential and protected by attorney-client privilege",
  },
  {
    icon: UserIcon,
    title: "Expert Legal Advice",
    description:
      "Get guidance from experienced lawyers with 25+ years of combined experience",
  },
  {
    icon: BriefcaseIcon,
    title: "Case Assessment",
    description:
      "Professional evaluation of your legal matter and potential courses of action",
  },
  {
    icon: CheckCircleIcon,
    title: "No Obligation",
    description: "Free initial consultation with no commitment required",
  },
];

const practiceAreas = [
  "Civil Litigation",
  "Corporate Law",
  "Family Law",
  "Property Law",
  "Criminal Law",
  "Banking & Finance",
  "Other",
];

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: "",
    urgency: "normal",
    description: "",
    preferredContact: "phone",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isSubmitted) {
    return (
      <PageWrapper>
        <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
          <div className="container-sm text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 shadow-large"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="heading-h2 mb-4">
                Consultation Request Received!
              </h1>
              <p className="text-body mb-8">
                Thank you for your interest in our legal services. We have
                received your consultation request and will contact you within
                24 hours to schedule your free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-primary">
                  Return Home
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact Us Directly
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Free Legal Consultation
            </span>
            <h1 className="heading-display text-white mb-6">
              Get Expert Legal Advice Today
            </h1>
            <p className="text-lead text-white/90 mb-8">
              Schedule a free, confidential consultation with our experienced
              legal team. We're here to help you understand your options and
              protect your interests.
            </p>

            {/* Quick contact options */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <PhoneIcon className="w-8 h-8 mx-auto mb-3 text-accent-300" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <Link
                  href="tel:+919876543210"
                  className="text-accent-300 hover:text-accent-200 transition-colors"
                >
                  +91 98765 43210
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <EnvelopeIcon className="w-8 h-8 mx-auto mb-3 text-accent-300" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <Link
                  href="mailto:info@sladvocates.in"
                  className="text-accent-300 hover:text-accent-200 transition-colors"
                >
                  info@sladvocates.in
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <ClockIcon className="w-8 h-8 mx-auto mb-3 text-accent-300" />
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-white/80">Mon-Fri: 9:30 AM - 6:30 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding-sm bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-small text-neutral-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl shadow-large p-8"
              >
                <h2 className="heading-h3 mb-6">
                  Schedule Your Free Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="practiceArea" className="form-label">
                        Legal Matter Type *
                      </label>
                      <select
                        id="practiceArea"
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Select practice area</option>
                        {practiceAreas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="urgency" className="form-label">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="description" className="form-label">
                      Describe Your Legal Issue *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Please provide a brief description of your legal matter..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Phone Call
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Email
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Schedule Free Consultation"}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-primary-500 rounded-3xl p-8 text-white"
              >
                <h3 className="heading-h4 text-white mb-6">
                  Why Choose SL Advocates?
                </h3>
                <ul className="space-y-4">
                  {[
                    "25+ years of legal experience",
                    "98% success rate in cases",
                    "Free initial consultation",
                    "Confidential and professional service",
                    "Expert team across multiple practice areas",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-large p-8"
              >
                <h3 className="heading-h4 mb-4">Need Immediate Help?</h3>
                <p className="text-body mb-6">
                  For urgent legal matters, contact us directly for immediate
                  assistance.
                </p>
                <div className="space-y-3">
                  <Link href="tel:+919876543210" className="btn-primary w-full">
                    <PhoneIcon className="w-5 h-5" />
                    Call Now
                  </Link>
                  <Link href="/contact" className="btn-outline w-full">
                    Visit Our Office
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
