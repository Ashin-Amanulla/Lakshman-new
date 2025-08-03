"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
                            <span className="text-2xl">🔒</span>
                            <span className="text-primary-600 font-semibold">Privacy & Security</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-8">
                            <h3 className="text-green-800 font-semibold mb-2">🛡️ Our Commitment</h3>
                            <p className="text-green-700 mb-0">
                                SL Advocates is committed to protecting your privacy and ensuring the security of your
                                personal information.
                            </p>
                        </div>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Information You Provide</h3>
                            <p>We may collect information that you voluntarily provide through:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Contact forms on our website</li>
                                <li>Email communications</li>
                                <li>Phone consultations</li>
                                <li>In-person meetings</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-neutral-800 mb-3 mt-6">Automatically Collected Information</h3>
                            <p>When you visit our website, we may automatically collect:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>IP address (anonymized)</li>
                                <li>Pages visited and time spent</li>
                                <li>Referring website</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. How We Use Your Information</h2>
                            <p>We use collected information for the following purposes:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>To provide legal services and consultations</li>
                                <li>To respond to your inquiries and requests</li>
                                <li>To improve our website and services</li>
                                <li>To comply with legal obligations</li>
                                <li>To prevent fraud and ensure security</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Data Storage and Security</h2>

                            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Local Storage</h3>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
                                <p className="text-blue-700">
                                    <strong>💾 Local Storage Usage:</strong> We use your browser's local storage to remember
                                    your disclaimer acceptance and improve your browsing experience. This data stays on your
                                    device and is not transmitted to our servers.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Security Measures</h3>
                            <p>We implement appropriate security measures to protect your information:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Secure server infrastructure</li>
                                <li>Encrypted data transmission (HTTPS)</li>
                                <li>Regular security audits</li>
                                <li>Access controls and authentication</li>
                                <li>Staff training on data protection</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Cookies and Tracking</h2>
                            <div className="bg-neutral-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-neutral-800 mb-3">🍪 Cookie Policy</h3>
                                <p className="text-neutral-700">
                                    <strong>We do NOT use cookies</strong> on this website. We only use local storage for
                                    essential website functionality (remembering your disclaimer acceptance). We do not
                                    track your browsing behavior or use third-party analytics cookies.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Information Sharing</h2>
                            <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>With your explicit consent</li>
                                <li>To comply with legal requirements</li>
                                <li>To protect our rights and safety</li>
                                <li>To trusted service providers bound by confidentiality agreements</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Attorney-Client Privilege</h2>
                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                                <p className="text-amber-700 font-medium">
                                    <strong>⚠️ Important:</strong> Communications through this website may not be protected
                                    by attorney-client privilege until a formal attorney-client relationship is established
                                    through a signed retainer agreement.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Object to processing of your information</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Data Retention</h2>
                            <p>
                                We retain your information only as long as necessary for the purposes outlined in this
                                policy or as required by law. Client files and communications are retained according to
                                professional legal standards and applicable regulations.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Third-Party Services</h2>
                            <p>
                                Our website may contain links to third-party websites or services. This privacy policy
                                does not apply to third-party sites. We encourage you to review their privacy policies
                                before providing any personal information.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Children's Privacy</h2>
                            <p>
                                Our website is not directed to children under 13. We do not knowingly collect personal
                                information from children under 13. If we become aware of such collection, we will take
                                steps to delete the information immediately.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Changes to This Policy</h2>
                            <p>
                                We may update this privacy policy from time to time. Changes will be posted on this page
                                with an updated date. We encourage you to review this policy periodically for any changes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Contact Us</h2>
                            <div className="bg-neutral-50 p-6 rounded-lg">
                                <p className="mb-4">
                                    If you have any questions about this Privacy Policy or our privacy practices,
                                    please contact us:
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p><strong>SL Advocates</strong></p>
                                    <p>📧 Email: privacy@sladvocates.com</p>
                                    <p>📞 Phone: +91 98765 43210</p>
                                    <p>📍 Address: [Your Office Address]</p>
                                </div>
                            </div>
                        </section>

                        <div className="bg-primary-50 p-6 rounded-lg mt-8">
                            <h3 className="text-primary-800 font-semibold mb-2">💡 Questions?</h3>
                            <p className="text-primary-700 mb-4">
                                If you have any questions about how we handle your personal information,
                                please don't hesitate to contact us.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                            >
                                Contact Us →
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
}