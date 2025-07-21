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

export const metadata = {
  title: "Contact SL Advocates - Get in Touch for Legal Assistance",
  description:
    "Contact our legal team for expert assistance with your legal matters. Multiple office locations in Kerala with experienced attorneys ready to help.",
  keywords: [
    "contact lawyer Kerala",
    "legal consultation Kochi",
    "attorney contact",
    "law firm contact Kerala",
  ],
};

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
    name: "Call Us",
    description: "Speak directly with our legal team",
    icon: PhoneIcon,
    href: `tel:${contactInfo.phone}`,
    value: contactInfo.phone,
    color: "bg-blue-100 text-blue-600",
    hoverColor: "hover:bg-blue-50",
  },
  {
    name: "WhatsApp",
    description: "Chat with us on WhatsApp",
    icon: FaWhatsapp,
    href: `https://wa.me/${contactInfo.whatsapp.replace(
      /[^0-9]/g,
      ""
    )}?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.`,
    value: contactInfo.whatsapp,
    color: "bg-green-100 text-green-600",
    hoverColor: "hover:bg-green-50",
    isExternal: true,
  },
  {
    name: "Email Us",
    description: "Send us your queries anytime",
    icon: EnvelopeIcon,
    href: `mailto:${contactInfo.email}`,
    value: contactInfo.email,
    color: "bg-purple-100 text-purple-600",
    hoverColor: "hover:bg-purple-50",
  },
  {
    name: "Visit Us",
    description: "Come to our office for a meeting",
    icon: MapPinIcon,
    value: contactInfo.address,
    color: "bg-amber-100 text-amber-600",
    hoverColor: "hover:bg-amber-50",
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
  const [activeTab, setActiveTab] = useState("message");
  const [activeLocation, setActiveLocation] = useState(0);
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
      <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1 className="heading-display text-white mb-6">
              Contact Our Legal Team
            </h1>
            <p className="text-lead text-white/90 mb-8">
              Our team of experienced lawyers is ready to assist you with your
              legal needs. Choose your preferred way to connect with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="section-padding-sm bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {method.href ? (
                  <Link
                    href={method.href}
                    className="block h-full"
                    target={method.isExternal ? "_blank" : undefined}
                    rel={method.isExternal ? "noopener noreferrer" : undefined}
                  >
                    <div className={`card-hover h-full ${method.hoverColor}`}>
                      <div className="card-body text-center">
                        <div
                          className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-6`}
                        >
                          {typeof method.icon === "function" ? (
                            <method.icon className="w-8 h-8" />
                          ) : (
                            <method.icon className="w-8 h-8" />
                          )}
                        </div>
                        <h3 className="heading-h4 mb-2">{method.name}</h3>
                        <p className="text-small text-neutral-600 mb-4">
                          {method.description}
                        </p>
                        <p className="font-medium">{method.value}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className={`card-hover h-full ${method.hoverColor}`}>
                    <div className="card-body text-center">
                      <div
                        className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-6`}
                      >
                        {typeof method.icon === "function" ? (
                          <method.icon className="w-8 h-8" />
                        ) : (
                          <method.icon className="w-8 h-8" />
                        )}
                      </div>
                      <h3 className="heading-h4 mb-2">{method.name}</h3>
                      <p className="text-small text-neutral-600 mb-4">
                        {method.description}
                      </p>
                      <p className="font-medium">{method.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section-padding-sm bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="bg-primary-500 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/legal-pattern.svg')] opacity-10" />

            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <ClockIcon className="w-8 h-8" />
                </div>
                <h3 className="heading-h3 text-white mb-4">Office Hours</h3>
                <p className="text-white/80 mb-6">
                  Our team is available to assist you during the following
                  hours:
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:30 AM - 6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <h3 className="heading-h3 text-white">Emergency Contact</h3>
                <p className="text-white/80">
                  For urgent legal matters outside of regular business hours,
                  please use our emergency contact options:
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <PhoneIcon className="w-5 h-5 text-accent-300" />
                      <h4 className="font-semibold">Emergency Helpline</h4>
                    </div>
                    <Link
                      href="tel:+919876543299"
                      className="text-accent-300 hover:text-accent-200 transition-colors text-lg font-medium"
                    >
                      +91 98765 43299
                    </Link>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FaWhatsapp className="w-5 h-5 text-accent-300" />
                      <h4 className="font-semibold">WhatsApp SOS</h4>
                    </div>
                    <Link
                      href="https://wa.me/919876543299?text=EMERGENCY%3A%20I%20need%20urgent%20legal%20assistance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-300 hover:text-accent-200 transition-colors text-lg font-medium"
                    >
                      +91 98765 43299
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-large p-8 lg:p-10"
              >
                <h2 className="heading-h2 mb-6">Get in Touch</h2>

                {/* Form Type Selector */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <button
                    onClick={() => setActiveTab("message")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                      activeTab === "message"
                        ? "bg-primary-500 text-white"
                        : "bg-primary-50 text-primary-700 hover:bg-primary-100"
                    } transition-colors duration-200`}
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    Send Message
                  </button>
                  <button
                    onClick={() => setActiveTab("appointment")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                      activeTab === "appointment"
                        ? "bg-primary-500 text-white"
                        : "bg-primary-50 text-primary-700 hover:bg-primary-100"
                    } transition-colors duration-200`}
                  >
                    <CalendarDaysIcon className="w-5 h-5" />
                    Book Appointment
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-input"
                        placeholder="Enter your full name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address *
                      </label>
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
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="practiceArea">
                        Legal Matter Type *
                      </label>
                      <select
                        id="practiceArea"
                        className="form-select"
                        {...register("practiceArea", {
                          required: "Please select a practice area",
                        })}
                      >
                        <option value="">Select practice area</option>
                        {practiceAreas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                      {errors.practiceArea && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.practiceArea.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {activeTab === "appointment" && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="date">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          className="form-input"
                          {...register("date", {
                            required:
                              activeTab === "appointment" && "Date is required",
                          })}
                        />
                        {errors.date && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.date.message}
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="time">
                          Preferred Time *
                        </label>
                        <input
                          type="time"
                          id="time"
                          className="form-input"
                          {...register("time", {
                            required:
                              activeTab === "appointment" && "Time is required",
                          })}
                        />
                        {errors.time && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.time.message}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="form-textarea"
                      placeholder="Please describe your legal matter or query..."
                      {...register("message", {
                        required: "Message is required",
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded text-primary-500 focus:ring-primary-500"
                        {...register("consent", {
                          required: "You must agree to the privacy policy",
                        })}
                      />
                      <span className="text-sm text-neutral-600">
                        I agree to the{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-primary-600 hover:underline"
                        >
                          privacy policy
                        </Link>{" "}
                        and consent to being contacted regarding my legal query.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : activeTab === "message"
                      ? "Send Message"
                      : "Book Appointment"}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-large p-8"
              >
                <h3 className="heading-h3 mb-6">Our Offices</h3>

                {/* Office Tabs */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {contactInfo.locations.map((location, index) => (
                    <button
                      key={location.city}
                      onClick={() => setActiveLocation(index)}
                      className={`px-4 py-2 rounded-xl transition-colors duration-200 ${
                        activeLocation === index
                          ? "bg-primary-500 text-white"
                          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                    >
                      {location.city} Office
                    </button>
                  ))}
                </div>

                {/* Active Office Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BuildingOfficeIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-neutral-900">
                        {contactInfo.locations[activeLocation].city} Office
                      </h4>
                      <p className="text-neutral-600">
                        {contactInfo.locations[activeLocation].address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-neutral-900">Phone</h4>
                      <Link
                        href={`tel:${contactInfo.locations[activeLocation].phone}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {contactInfo.locations[activeLocation].phone}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <EnvelopeIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-neutral-900">Email</h4>
                      <Link
                        href={`mailto:${contactInfo.locations[activeLocation].email}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {contactInfo.locations[activeLocation].email}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-6 rounded-xl overflow-hidden h-[200px] border border-neutral-200">
                  <iframe
                    src={contactInfo.locations[activeLocation].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${contactInfo.locations[activeLocation].city} Office Map`}
                  ></iframe>
                </div>
              </motion.div>

              {/* Team CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl p-8 text-white"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <UserIcon className="w-6 h-6" />
                </div>
                <h3 className="heading-h4 text-white mb-4">
                  Meet Our Legal Team
                </h3>
                <p className="text-white/90 mb-6">
                  Our team of experienced attorneys is ready to assist you with
                  any legal matter.
                </p>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 bg-white text-secondary-600 px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors font-medium"
                >
                  Meet Our Team
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
