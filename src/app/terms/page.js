"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <PageWrapper>
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 bg-primary-50 px-4 py-2 rounded-full mb-6">
                            <span className="text-2xl">📋</span>
                            <span className="text-primary-600 font-semibold">Legal Terms</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Please read these terms carefully before using our website and services
                        </p>
                        <div className="text-sm text-neutral-500 mt-4">
                            Last Updated: {new Date().toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-neutral max-w-none">
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
                            <h3 className="text-amber-800 font-semibold mb-2">⚠️ Important Notice</h3>
                            <p className="text-amber-700 mb-0">
                                By accessing and using this website, you accept and agree to be bound by the terms and
                                provision of this agreement.
                            </p>
                        </div>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the SL Advocates website (the "Website"), you accept and agree to be
                                bound by these Terms and Conditions. If you do not agree to these terms, please do not use
                                our website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Website Purpose</h2>
                            <p>
                                This website is intended solely to provide general information about SL Advocates and our
                                legal services. The information provided on this website:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Is for informational purposes only</li>
                                <li>Does not constitute legal advice</li>
                                <li>Does not create an attorney-client relationship</li>
                                <li>Should not be relied upon for legal decisions</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. No Attorney-Client Relationship</h2>
                            <p>
                                Visiting this website or contacting SL Advocates through this website does not create an
                                attorney-client relationship. Such a relationship is established only through a signed
                                retainer agreement after consultation and mutual agreement.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Confidentiality Warning</h2>
                            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                                <p className="text-red-700 font-medium">
                                    <strong>DO NOT</strong> send confidential or sensitive information through this website,
                                    including contact forms or email communications, unless specifically requested by our firm.
                                    Such communications may not be protected by attorney-client privilege.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Accuracy of Information</h2>
                            <p>
                                While we strive to keep the information on this website current and accurate, SL Advocates
                                makes no representations or warranties regarding:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>The accuracy, completeness, or timeliness of information</li>
                                <li>The suitability of information for any particular purpose</li>
                                <li>The availability or reliability of the website</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Limitation of Liability</h2>
                            <p>
                                SL Advocates shall not be liable for any damages arising from:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Use or inability to use this website</li>
                                <li>Reliance on information provided on this website</li>
                                <li>Technical failures or interruptions</li>
                                <li>Unauthorized access to or alteration of transmissions or data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and images, is the property
                                of SL Advocates and is protected by copyright and other intellectual property laws.
                                Unauthorized use is prohibited.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. External Links</h2>
                            <p>
                                This website may contain links to external websites. SL Advocates is not responsible for
                                the content, privacy practices, or terms of use of external websites.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Data Collection</h2>
                            <p>
                                We use local storage to remember your preferences and improve your browsing experience.
                                We do not use cookies or track personal information without consent. See our
                                <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                                    Privacy Policy
                                </a> for more details.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Modifications</h2>
                            <p>
                                SL Advocates reserves the right to modify these terms at any time. Changes will be posted
                                on this page with an updated date. Continued use of the website constitutes acceptance of
                                modified terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Governing Law</h2>
                            <p>
                                These terms shall be governed by and construed in accordance with the laws of India.
                                Any disputes arising shall be subject to the exclusive jurisdiction of the courts in
                                [Your City/State].
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Contact Information</h2>
                            <div className="bg-neutral-50 p-6 rounded-lg">
                                <p className="mb-4">
                                    If you have any questions about these Terms & Conditions, please contact us:
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p><strong>SL Advocates</strong></p>
                                    <p>📧 Email: info@sladvocates.com</p>
                                    <p>📞 Phone: +91 98765 43210</p>
                                    <p>📍 Address: [Your Office Address]</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
}