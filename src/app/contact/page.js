"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";

const contactInfo = {
  address: "1st Floor, ABC Building, MG Road, Kochi, Kerala 682011",
  phone: "+91 98765 43210",
  email: "info@sladvocates.in",
  hours: "Monday - Friday: 9:30 AM - 6:30 PM",
  whatsapp: "+91 98765 43210",
  locations: [
    {
      city: "Kochi",
      address: "1st Floor, ABC Building, MG Road",
      phone: "+91 98765 43210",
      email: "kochi@sladvocates.in",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.952377317164!2d76.28198207499179!3d9.969888973937701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sMG%20Road%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708701234567!5m2!1sen!2sin",
    },
    {
      city: "Trivandrum",
      address: "2nd Floor, XYZ Tower, Central Square",
      phone: "+91 98765 43211",
      email: "trivandrum@sladvocates.in",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2939288565086!2d76.9454900748212!3d8.5084034934659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb3d1f5dcb3%3A0x5cf7a4f8be7a73a7!2sSecretariat%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708701234567!5m2!1sen!2sin",
    },
  ],
};

const contactMethods = [
  {
    name: "Call",
    icon: PhoneIcon,
    href: `tel:${contactInfo.phone}`,
    value: contactInfo.phone,
    color: "bg-primary-500",
  },
  {
    name: "Email",
    icon: EnvelopeIcon,
    href: `mailto:${contactInfo.email}`,
    value: contactInfo.email,
    color: "bg-primary-500",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`,
    value: contactInfo.whatsapp,
    color: "bg-primary-500",
    isExternal: true,
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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
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
              <h1 className="heading-h2 mb-4">Message Sent Successfully!</h1>
              <p className="text-body mb-8">
                Thank you for contacting SL Advocates. We have received your
                message and will get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-primary">
                  Return Home
                </Link>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline"
                >
                  Send Another Message
                </button>
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
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-display text-white mb-6">Contact Us</h1>
            <p className="text-lead text-white/90">
              Get in touch with our legal team for expert assistance with your legal matters.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding-sm bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Link
                key={method.name}
                href={method.href}
                target={method.isExternal ? "_blank" : undefined}
                rel={method.isExternal ? "noopener noreferrer" : undefined}
                className="group"
              >
                <div className={`${method.color} text-white rounded-2xl p-6 text-center group-hover:scale-105 transition-transform duration-200`}>
                  <method.icon className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{method.name}</h3>
                  <p className="text-white/90 text-sm">{method.value}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="heading-h2 mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label" htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Your full name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      {...register("phone")}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="practiceArea">Legal Matter</label>
                    <select
                      id="practiceArea"
                      className="form-select"
                      {...register("practiceArea")}
                    >
                      <option value="">Select practice area</option>
                      {practiceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="form-textarea"
                    placeholder="Please describe your legal matter..."
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="heading-h3 mb-6">Our Office</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-neutral-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-neutral-600">{contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <EnvelopeIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-neutral-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Office Hours</h4>
                      <p className="text-neutral-600">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64">
                  <iframe
                    src={contactInfo.locations[0].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
