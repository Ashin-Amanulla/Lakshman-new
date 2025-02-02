"use client"

import { useForm } from 'react-hook-form'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        // Handle form submission
    }

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-law-navy mb-6">Contact Us</h2>
                    <div className="w-24 h-1 bg-law-gold mx-auto mb-8" />
                    <p className="text-law-gray max-w-2xl mx-auto">
                        For inquiries about our legal services, please feel free to reach out to us.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <MapPinIcon className="h-6 w-6 text-law-gold mt-1" />
                                <div className="ml-4">
                                    <h3 className="font-serif text-xl text-law-navy mb-2">Our Office</h3>
                                    <p className="text-law-gray">
                                        123 Legal Chambers<br />
                                        MG Road, Bangalore<br />
                                        Karnataka, India 560001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <PhoneIcon className="h-6 w-6 text-law-gold mt-1" />
                                <div className="ml-4">
                                    <h3 className="font-serif text-xl text-law-navy mb-2">Phone</h3>
                                    <p className="text-law-gray">+91 80 1234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <EnvelopeIcon className="h-6 w-6 text-law-gold mt-1" />
                                <div className="ml-4">
                                    <h3 className="font-serif text-xl text-law-navy mb-2">Email</h3>
                                    <p className="text-law-gray">info@sladvocates.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-law-navy font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                                className="w-full px-4 py-2 border border-law-light rounded-lg focus:outline-none focus:ring-2 focus:ring-law-gold"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-law-navy font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                className="w-full px-4 py-2 border border-law-light rounded-lg focus:outline-none focus:ring-2 focus:ring-law-gold"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-law-navy font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                {...register('message', { required: 'Message is required' })}
                                className="w-full px-4 py-2 border border-law-light rounded-lg focus:outline-none focus:ring-2 focus:ring-law-gold"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-law-navy text-white font-semibold py-3 rounded-lg hover:bg-law-navy/90 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
} 