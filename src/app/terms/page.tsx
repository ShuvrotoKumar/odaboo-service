"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Scale, AlertCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/sections/CTASection";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden pt-24 pb-0">

            {/* Hero Section */}
            <section className="relative pt-16 pb-20 bg-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

                <Container className="relative z-10 text-center max-w-3xl">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-3 bg-cyan-50 text-cyan-600 rounded-2xl mb-6">
                            <FileText className="w-8 h-8" />
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Terms of Service
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
                            Please read these terms carefully before using the Odaboo platform. By accessing or using our services, you agree to be bound by these terms.
                        </motion.p>
                    </motion.div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <Container className="max-w-4xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-200"
                    >

                        {/* Intro */}
                        <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed mb-12 font-medium">
                            Last updated: May 2026. These Terms of Service constitute a legally binding agreement made between you and Odaboo concerning your access to and use of our marketplace.
                        </motion.p>

                        {/* Section 1 */}
                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-#1eb9c7-50 flex items-center justify-center text-#1eb9c7-600 shrink-0">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">1. Acceptance of Terms</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed ml-0 md:ml-16">
                                By creating an account, accessing, or using the Odaboo platform, you agree to comply with all applicable laws and these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using our platform.
                            </p>
                        </motion.div>

                        {/* Section 2 */}
                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">2. User Responsibilities</h2>
                            </div>
                            <div className="ml-0 md:ml-16">
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    As a user of the Odaboo platform (whether a Client or a Professional), you are responsible for:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-slate-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
                                        <span>Maintaining the confidentiality of your account credentials.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
                                        <span>Ensuring all information provided during registration or booking is accurate and up-to-date.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
                                        <span>Communicating professionally and respectfully with other users on the platform.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Section 3 */}
                        <motion.div variants={fadeInUp}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                                    <AlertCircle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">3. Dispute Resolution</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed ml-0 md:ml-16">
                                Any disputes between Clients and Professionals must first be addressed directly between the parties. If a resolution cannot be reached, Odaboo's support team may, at its sole discretion, assist in mediation. Odaboo is not liable for damages, incomplete work, or payment disputes occurring outside of our integrated payment platform.
                            </p>
                        </motion.div>

                    </motion.div>
                </Container>
            </section>

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
