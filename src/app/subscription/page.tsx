"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, HelpCircle, Zap, Shield, Star, ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/sections/CTASection";
import { cn } from "@/lib/utils";

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
};

// --- Mock Data ---
const PRICING_PLANS = [
    {
        name: "Basic",
        description: "Perfect for individuals just getting started.",
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: ["Create 1 Service Profile", "Basic Search Visibility", "Community Access", "Standard Support"],
        notIncluded: ["Verified Badge", "Featured Placement", "Advanced Analytics"],
        buttonText: "Get Started Free",
        isPopular: false,
        icon: Star
    },
    {
        name: "Professional",
        description: "The ideal plan for growing service providers.",
        monthlyPrice: 29,
        yearlyPrice: 290,
        features: ["Create up to 5 Profiles", "Priority Search Visibility", "Verified 'Pro' Badge", "Featured Placement", "Priority 24/7 Support", "Client Analytics Dashboard"],
        notIncluded: [],
        buttonText: "Start Professional",
        isPopular: true,
        icon: Zap
    },
    {
        name: "Enterprise",
        description: "For agencies and large businesses.",
        monthlyPrice: 99,
        yearlyPrice: 990,
        features: ["Unlimited Profiles", "Top Search Placement", "Dedicated Account Manager", "Custom Branding", "API Access", "Advanced Team Management"],
        notIncluded: [],
        buttonText: "Contact Sales",
        isPopular: false,
        icon: Shield
    }
];

const FAQS = [
    { question: "Can I change my plan later?", answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Prorated charges will apply automatically." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and Apple Pay/Google Pay for your convenience." },
    { question: "Is there a long-term contract?", answer: "No, all our plans are month-to-month or year-to-year. You can cancel your subscription at any time without penalty." },
    { question: "How does the 'Verified Badge' work?", answer: "The Verified Badge requires a brief identity and credential check. Once approved, it helps you stand out in search results and builds trust with clients." }
];

export default function SubscriptionPage() {
    const [isAnnual, setIsAnnual] = useState(true);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden">

            {/* --- 1. Hero Section --- */}
            <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-#1eb9c7-600/5 blur-[120px] rounded-full pointer-events-none" />

                <Container className="relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto"
                    >
                        {/* <motion.span 
              variants={fadeInUp}
              className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm mb-6"
            >
              Pricing & Plans
            </motion.span> */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
                        >
                            Simple, transparent <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-#1eb9c7-600 to-cyan-500">
                                pricing for everyone
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-slate-600 mb-10"
                        >
                            Whether you're just starting out or scaling your business, we have a plan designed to help you reach more customers.
                        </motion.p>

                        {/* Toggle Switch */}
                        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                            <span className={cn("text-sm font-semibold transition-colors", !isAnnual ? "text-slate-900" : "text-slate-500")}>Monthly</span>
                            <button
                                onClick={() => setIsAnnual(!isAnnual)}
                                className="relative w-16 h-8 rounded-full bg-slate-200 flex items-center p-1 cursor-pointer transition-colors"
                                style={{ backgroundColor: isAnnual ? '#9333ea' : '#e2e8f0' }} // #1eb9c7-600
                            >
                                <motion.div
                                    className="w-6 h-6 bg-white rounded-full shadow-sm"
                                    animate={{ x: isAnnual ? 32 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </button>
                            <div className="flex items-center gap-2">
                                <span className={cn("text-sm font-semibold transition-colors", isAnnual ? "text-slate-900" : "text-slate-500")}>Annually</span>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-100 text-green-700 uppercase tracking-wide">Save 20%</span>
                            </div>
                        </motion.div>

                    </motion.div>
                </Container>
            </section>

            {/* --- 2. Pricing Cards Section --- */}
            <section className="pb-24 bg-white relative z-20">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
                    >
                        {PRICING_PLANS.map((plan, idx) => (
                            <motion.div
                                key={plan.name}
                                variants={scaleUp}
                                className={cn(
                                    "relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl",
                                    plan.isPopular
                                        ? "border-#1eb9c7-500 shadow-xl shadow-#1eb9c7-500/10 md:-translate-y-4"
                                        : "border-slate-200 shadow-sm"
                                )}
                            >
                                {plan.isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-gradient-to-r from-#1eb9c7-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                                    <plan.icon className={cn("w-6 h-6", plan.isPopular ? "text-#1eb9c7-600" : "text-slate-400")} />
                                </div>

                                <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>

                                <div className="mb-8">
                                    <div className="flex items-end gap-1">
                                        <span className="text-4xl font-black text-slate-900">
                                            ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                                        </span>
                                        <span className="text-slate-500 font-medium mb-1">
                                            /{isAnnual ? 'yr' : 'mo'}
                                        </span>
                                    </div>
                                    {isAnnual && plan.monthlyPrice > 0 && (
                                        <p className="text-xs text-green-600 font-semibold mt-2">Billed ${plan.yearlyPrice} yearly</p>
                                    )}
                                </div>

                                <button
                                    className={cn(
                                        "w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm active:scale-95 mb-8",
                                        plan.isPopular
                                            ? "bg-#1eb9c7-600 hover:bg-#1eb9c7-700 text-white shadow-#1eb9c7-600/25"
                                            : "bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200"
                                    )}
                                >
                                    {plan.buttonText}
                                </button>

                                <div className="space-y-4">
                                    <p className="text-sm font-bold text-slate-900">What's included:</p>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                                <Check className="w-5 h-5 text-green-500 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                        {plan.notIncluded.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                                <X className="w-5 h-5 text-slate-300 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* --- 3. Features Highlight --- */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <Container className="relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">More than just a profile</h2>
                        <p className="text-slate-400 text-lg">Every paid plan comes with powerful tools to help you manage clients and grow your reputation.</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { title: "Smart Scheduling", desc: "Let clients book your services directly through your profile calendar." },
                            { title: "Secure Payments", desc: "Receive payments quickly and securely with our integrated payment gateway." },
                            { title: "Review Management", desc: "Collect and display verified reviews to build trust and win more jobs." },
                            { title: "Analytics Dashboard", desc: "Track your profile views, clicks, and conversion rates in real-time." },
                            { title: "SEO Optimized", desc: "Your public profile is optimized to rank higher in Google search results." },
                            { title: "Mobile App Access", desc: "Manage your business on the go with our dedicated mobile application." }
                        ].map((feat, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl">
                                <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                                    <Check className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* --- 4. FAQ Section --- */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 text-slate-600 mb-6">
                                <HelpCircle className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-lg text-slate-600">Everything you need to know about the product and billing.</p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-4"
                        >
                            {FAQS.map((faq, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInUp}
                                        className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-#1eb9c7-200 transition-colors"
                                    >
                                        <button
                                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className="text-lg font-bold text-slate-900 pr-8">{faq.question}</span>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                className={cn("shrink-0", isOpen ? "text-#1eb9c7-600" : "text-slate-400")}
                                            >
                                                <ChevronDown className="w-5 h-5" />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* --- 5. CTA Section --- */}
            <CTASection />

        </div>
    );
}
