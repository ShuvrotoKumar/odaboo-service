"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, MessageCircle, HelpCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/sections/CTASection";
import { cn } from "@/lib/utils";

// --- Animation Variants ---
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

// --- Mock FAQ Data ---
const FAQ_CATEGORIES = ["All", "General", "For Professionals", "For Clients", "Billing"];

const FAQ_DATA = [
  // General
  { category: "General", question: "What is Odaboo?", answer: "Odaboo is a premium service marketplace that connects trusted professionals with clients needing everyday tasks, home improvements, and specialized services." },
  { category: "General", question: "Is Odaboo available in my city?", answer: "We are currently operating in major metropolitan areas and continuously expanding. When you sign up, you can see the availability of services based on your zip code." },
  
  // For Professionals
  { category: "For Professionals", question: "How do I become a verified professional?", answer: "To get the 'Verified Badge', you need to create an account, complete your profile, and submit your ID and any relevant licenses/credentials for our team to review. Verification typically takes 24-48 hours." },
  { category: "For Professionals", question: "How much does Odaboo charge professionals?", answer: "You can create a basic profile for free! For enhanced visibility, analytics, and more features, we offer Premium and Enterprise subscription plans starting at $29/month." },
  { category: "For Professionals", question: "How do I get paid?", answer: "Odaboo uses secure, integrated payment processing. Once a job is completed and approved by the client, funds are deposited directly into your linked bank account within 2-3 business days." },

  // For Clients
  { category: "For Clients", question: "How do I book a service?", answer: "Simply search for the service you need, browse verified professionals, select a time that works for you, and confirm your booking. You can message the pro directly to discuss specific details." },
  { category: "For Clients", question: "What if I am not satisfied with the service?", answer: "We take quality very seriously. If you have an issue, please contact our support team within 24 hours of service completion. All verified professionals are backed by our satisfaction guarantee." },
  { category: "For Clients", question: "Are the professionals background-checked?", answer: "Yes! Any professional with a 'Verified Badge' has passed our identity verification and background screening process." },

  // Billing
  { category: "Billing", question: "Can I change my subscription plan later?", answer: "Yes, you can upgrade or downgrade your professional plan at any time from your account settings. Prorated charges will apply automatically." },
  { category: "Billing", question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and Apple Pay/Google Pay for your convenience." },
  { category: "Billing", question: "Is there a long-term contract?", answer: "No, all our subscription plans are month-to-month or year-to-year. You can cancel your subscription at any time without penalty." },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Filter FAQs based on category and search query
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(faq => {
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden pt-24 pb-0">
      {/* --- 1. Hero Section --- */}
      <section className="relative pt-16 pb-20 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <Container className="relative z-10 text-center max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-3 bg-cyan-50 text-cyan-600 rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              How can we help you?
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
              Find answers to common questions about Odaboo, booking services, and professional accounts.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div variants={fadeInUp} className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 rounded-full border-slate-200 shadow-sm text-slate-900 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all outline-none"
                placeholder="Search for articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* --- 2. FAQ Content Section --- */}
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {FAQ_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null); // Close all when switching category
                }}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all",
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <motion.div
                      key={faq.question}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "border rounded-2xl overflow-hidden transition-colors",
                        isOpen ? "bg-white border-purple-200 shadow-sm" : "bg-white border-slate-200 hover:border-purple-200"
                      )}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="text-lg font-bold text-slate-900 pr-8">{faq.question}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className={cn("shrink-0", isOpen ? "text-purple-600" : "text-slate-400")}
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
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300"
                >
                  <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
                  <p className="text-slate-500">We couldn't find any FAQs matching "{searchQuery}".</p>
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="mt-6 text-purple-600 font-bold hover:underline"
                  >
                    Clear search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </Container>
      </section>

      {/* --- 3. CTA Section --- */}
      <CTASection />
    </div>
  );
}