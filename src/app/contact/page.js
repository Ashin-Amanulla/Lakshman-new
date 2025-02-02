"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    CalendarDaysIcon
} from '@heroicons/react/24/outline'
import PageWrapper from '@/components/layout/PageWrapper'

const contactInfo = {
    address: "1st Floor, ABC Building, MG Road, Kochi, Kerala 682011",
    phone: "+91 98765 43210",
    email: "info@sladvocates.in",
    hours: "Monday - Friday: 9:30 AM - 6:30 PM",
    locations: [
        {
            city: "Kochi",
            address: "1st Floor, ABC Building, MG Road",
            phone: "+91 98765 43210"
        },
        {
            city: "Trivandrum",
            address: "2nd Floor, XYZ Tower, Central Square",
            phone: "+91 98765 43211"
        }
    ]
}

export default function ContactPage() {
    const [activeTab, setActiveTab] = useState('message')
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        // Handle form submission
        reset()
    }

    return (
        <PageWrapper>
            <div className="py-12">
                <div className="container">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="heading-1 mb-6">Get in Touch</h1>
                        <p className="text-text-light text-lg">
                            Our team of experienced lawyers is ready to assist you with your legal needs.
                            Choose your preferred way to connect with us.
                        </p>
                    </motion.div>

                    {/* Contact Options */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <PhoneIcon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl text-primary mb-2">Call Us</h3>
                            <p className="text-text-light mb-4">Speak directly with our legal team</p>
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="text-secondary hover:text-primary transition-colors"
                            >
                                {contactInfo.phone}
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <EnvelopeIcon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl text-primary mb-2">Email Us</h3>
                            <p className="text-text-light mb-4">Send us your queries anytime</p>
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-secondary hover:text-primary transition-colors"
                            >
                                {contactInfo.email}
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <ClockIcon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl text-primary mb-2">Business Hours</h3>
                            <p className="text-text-light">{contactInfo.hours}</p>
                        </motion.div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-3 bg-white rounded-lg shadow-sm p-8"
                        >
                            {/* Form Type Selector */}
                            <div className="flex gap-4 mb-8">
                                <button
                                    onClick={() => setActiveTab('message')}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === 'message'
                                            ? 'bg-primary text-white'
                                            : 'bg-primary/5 text-primary hover:bg-primary/10'
                                        }`}
                                >
                                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                    Send Message
                                </button>
                                <button
                                    onClick={() => setActiveTab('appointment')}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === 'appointment'
                                            ? 'bg-primary text-white'
                                            : 'bg-primary/5 text-primary hover:bg-primary/10'
                                        }`}
                                >
                                    <CalendarDaysIcon className="w-5 h-5" />
                                    Book Appointment
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="form-label" htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-input"
                                            {...register("name", { required: "Name is required" })}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="form-label" htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-input"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label" htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="form-input"
                                        {...register("subject", { required: "Subject is required" })}
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                    )}
                                </div>

                                {activeTab === 'appointment' && (
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="form-label" htmlFor="date">Preferred Date</label>
                                            <input
                                                type="date"
                                                id="date"
                                                className="form-input"
                                                {...register("date", { required: "Date is required" })}
                                            />
                                            {errors.date && (
                                                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="form-label" htmlFor="time">Preferred Time</label>
                                            <input
                                                type="time"
                                                id="time"
                                                className="form-input"
                                                {...register("time", { required: "Time is required" })}
                                            />
                                            {errors.time && (
                                                <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="form-input"
                                        {...register("message", { required: "Message is required" })}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    {activeTab === 'message' ? 'Send Message' : 'Book Appointment'}
                                </button>
                            </form>
                        </motion.div>

                        {/* Office Locations */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {contactInfo.locations.map((location, index) => (
                                <div
                                    key={location.city}
                                    className="bg-white rounded-lg shadow-sm p-6"
                                >
                                    <h3 className="font-heading text-xl text-primary mb-4">
                                        {location.city} Office
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <MapPinIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                                            <p className="text-text-light">{location.address}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <PhoneIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                                            <a
                                                href={`tel:${location.phone}`}
                                                className="text-text-light hover:text-primary transition-colors"
                                            >
                                                {location.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Google Maps Integration */}
                            <div className="rounded-lg overflow-hidden shadow-sm h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.952377317164!2d76.28198207499179!3d9.969888973937701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sMG%20Road%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708701234567!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
} 