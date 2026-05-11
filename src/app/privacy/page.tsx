"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database } from "lucide-react";
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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden pt-24 pb-0">

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-#1eb9c7-600/5 blur-[120px] rounded-full pointer-events-none" />

        <Container className="relative z-10 text-center max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-3 bg-#1eb9c7-50 text-#1eb9c7-600 rounded-2xl mb-6">
              <Shield className="w-8 h-8" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
              Your privacy is critically important to us. Learn how we collect, use, and protect your personal information on Odaboo.
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
              Last updated: May 2026. This Privacy Policy applies to all users of the Odaboo marketplace.
            </motion.p>

            {/* Section 1 */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                  <Database className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">1. Information We Collect</h2>
              </div>
              <div className="ml-0 md:ml-16">
                <p className="text-slate-600 leading-relaxed mb-6">
                  We collect information to provide better services to all our users. The types of data we collect include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
                    <span><strong>Personal Information:</strong> Name, email address, phone number, and physical address provided during registration.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
                    <span><strong>Payment Information:</strong> Securely tokenized payment details for processing transactions.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
                    <span><strong>Usage Data:</strong> How you interact with our platform, including search queries and visited pages.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-#1eb9c7-50 flex items-center justify-center text-#1eb9c7-600 shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">2. How We Use Information</h2>
              </div>
              <p className="text-slate-600 leading-relaxed ml-0 md:ml-16">
                Your data is primarily used to facilitate the core functionality of Odaboo, such as matching clients with professionals, processing payments, and providing customer support. We also use aggregated usage data to improve our platform's algorithms and user experience.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">3. Data Security</h2>
              </div>
              <p className="text-slate-600 leading-relaxed ml-0 md:ml-16">
                We implement industry-standard security protocols, including encryption in transit and at rest, to protect your data from unauthorized access. However, no electronic transmission is completely secure, and we cannot guarantee absolute data security.
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
