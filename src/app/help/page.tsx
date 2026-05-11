"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, LifeBuoy, BookOpen, User, CreditCard, Wrench, MessageSquare } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/sections/CTASection";
import Link from "next/link";

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

const HELP_TOPICS = [
    {
        title: "Getting Started",
        description: "Learn how to set up your account, verify your identity, and navigate the marketplace.",
        icon: BookOpen,
        color: "bg-blue-50 text-blue-600",
        href: "/faq"
    },
    {
        title: "Account Settings",
        description: "Manage your profile details, notifications, password, and security settings.",
        icon: User,
        color: "bg-#1eb9c7-50 text-#1eb9c7-600",
        href: "/faq"
    },
    {
        title: "Billing & Payments",
        description: "Understand your subscription, how to add payment methods, and get paid for services.",
        icon: CreditCard,
        color: "bg-emerald-50 text-emerald-600",
        href: "/faq"
    },
    {
        title: "Troubleshooting",
        description: "Fix common technical issues with the mobile app or website.",
        icon: Wrench,
        color: "bg-orange-50 text-orange-600",
        href: "/faq"
    },
    {
        title: "Community Guidelines",
        description: "Read about our safety policies, dispute resolution, and respectful communication rules.",
        icon: LifeBuoy,
        color: "bg-cyan-50 text-cyan-600",
        href: "/terms"
    },
    {
        title: "Contact Support",
        description: "Can't find what you're looking for? Reach out to our 24/7 human support team.",
        icon: MessageSquare,
        color: "bg-rose-50 text-rose-600",
        href: "#"
    }
];

export default function HelpCenterPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden pt-24 pb-0">

            {/* Hero Section */}
            <section className="relative pt-16 pb-20 bg-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

                <Container className="relative z-10 text-center max-w-3xl">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                            <LifeBuoy className="w-8 h-8" />
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Help Center
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
                            Find guides, troubleshoot issues, or connect with our support team to get the most out of Odaboo.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div variants={fadeInUp} className="relative max-w-xl mx-auto shadow-lg shadow-blue-900/5 rounded-full">
                            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-14 pr-4 py-4 rounded-full border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all outline-none"
                                placeholder="Search for answers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </motion.div>
                    </motion.div>
                </Container>
            </section>

            {/* Content Section - Topics Grid */}
            <section className="py-16 md:py-24">
                <Container className="max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {HELP_TOPICS.map((topic, index) => (
                            <Link href={topic.href} key={index}>
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all h-full cursor-pointer group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${topic.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <topic.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{topic.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        {topic.description}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
