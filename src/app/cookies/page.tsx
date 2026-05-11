"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cookie, ShieldCheck, Settings, EyeOff } from "lucide-react";
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

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden pt-24 pb-0">
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <Container className="relative z-10 text-center max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-3 bg-purple-50 text-purple-600 rounded-2xl mb-6">
              <Cookie className="w-8 h-8" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Cookies Policy
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
              Understand what cookies are, how we use them on the Odaboo marketplace, and what choices you have regarding your data.
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
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed mb-12">
              This Cookies Policy explains what cookies are, how we use them on the Odaboo website, and what choices you have. By using our website, you agree to our use of cookies as described in this policy.
            </motion.p>

            {/* Section 1 */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Are Cookies?</h2>
              </div>
              <p className="text-slate-600 leading-relaxed ml-0 md:ml-16">
                Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How We Use Cookies</h2>
              </div>
              <div className="ml-0 md:ml-16 space-y-4">
                <p className="text-slate-600 leading-relaxed mb-6">
                  We use cookies for the following purposes:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Essential Cookies</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">These are necessary for the basic functionality of our website and cannot be switched off.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Performance Cookies</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">These help us understand how visitors interact with our website by collecting anonymous information.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Functional Cookies</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">These enable enhanced features and personalization, such as remembering your preferences and location.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Marketing Cookies</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">These are used to track visitors across websites to display relevant ads and campaigns.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                  <EyeOff className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Your Choices</h2>
              </div>
              <div className="ml-0 md:ml-16">
                <p className="text-slate-600 leading-relaxed mb-6">
                  You have the right to decide whether to accept or reject cookies. You can set your preferences through:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                    <span><strong>Cookie Settings:</strong> Manage your preferences directly on our website using the cookie consent banner.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                    <span><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings (e.g., Chrome, Safari, Firefox).</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                    <span><strong>Third-Party Tools:</strong> Various industry tools are available for opting out of certain types of marketing cookies.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}