"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users, Shield, Zap, Heart, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/sections/CTASection";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* --- 1. Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/40 blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-100/40 blur-3xl" />
        </div>
        <Container className="relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
            >
              Empowering Professionals, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Simplifying Lives
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Odaboo is the premier marketplace connecting skilled experts with individuals and businesses that need them. We believe in creating a seamless, trustworthy, and efficient ecosystem for all your service needs.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* --- 2. Mission & Vision Section --- */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="space-y-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 mb-2">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To democratize access to high-quality professional services by building a platform that prioritizes transparency, reliability, and excellence. We strive to empower independent professionals to grow their businesses while providing customers with peace of mind.
              </p>
              <ul className="space-y-4 pt-4">
                {['Verified Professionals', 'Secure Transactions', '24/7 Customer Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-cyan-50 rounded-3xl transform rotate-3" />
              <div className="relative bg-white border border-slate-100 p-10 lg:p-12 rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.05)]">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-600 mb-8">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  "To become the world's most trusted and widely used service marketplace, where finding the right expert is as simple as a few clicks, and where every professional has the tools they need to succeed."
                </p>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* --- 3. Statistics Section --- */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center"
          >
            {[
              { label: "Active Professionals", value: "10,000+" },
              { label: "Services Completed", value: "250K+" },
              { label: "Happy Customers", value: "98%" },
              { label: "Cities Covered", value: "50+" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="p-4">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* --- 4. Core Values Section --- */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600">
              The principles that guide our decisions, shape our culture, and drive our commitment to excellence.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Shield, title: "Trust & Safety", desc: "We prioritize a secure environment where users can confidently book and offer services." },
              { icon: Heart, title: "Customer First", desc: "Every feature we build is designed with the user's best interest in mind." },
              { icon: Zap, title: "Innovation", desc: "We constantly seek creative solutions to simplify the service booking process." },
              { icon: Users, title: "Community", desc: "Fostering a supportive network of professionals and clients who help each other thrive." },
              { icon: Target, title: "Excellence", desc: "We hold ourselves and our professionals to the highest standards of quality." },
              { icon: CheckCircle2, title: "Transparency", desc: "Clear pricing, honest reviews, and open communication at every step." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 mb-6">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* --- 5. CTA Section --- */}
      <CTASection />

    </div>
  );
}
