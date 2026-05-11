"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { Search, Calendar, CheckCircle, CreditCard, ArrowRight } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Search",
    description: "Browse our extensive list of verified professionals. Filter by category, rating, or location to find the perfect expert for your specific needs.",
    icon: <Search className="w-8 h-8" />,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Booking",
    description: "Select a provider, pick a date and time that works for you, and confirm your booking instantly through our seamless interface.",
    icon: <Calendar className="w-8 h-8" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    title: "Receive",
    description: "Your professional arrives on time and completes the task to your satisfaction. Our experts are committed to quality and professionalism.",
    icon: <CheckCircle className="w-8 h-8" />,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    id: 4,
    title: "Payment",
    description: "Pay securely through our platform only after the service is completed. We ensure your transactions are safe and encrypted.",
    icon: <CreditCard className="w-8 h-8" />,
    color: "bg-primary/20 text-primary",
  },
];

export const HowItWorks = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <Container>
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            How it works
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Experience a frictionless journey from finding a professional to completing your project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch min-h-[450px]">
          {STEPS.map((step) => {
            const isActive = activeId === step.id;

            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => setActiveId(step.id)}
                layout
                className={`relative flex flex-col p-10 rounded-[3rem] cursor-pointer transition-all duration-700 overflow-hidden ${
                  isActive 
                    ? "bg-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] ring-1 ring-slate-100" 
                    : "bg-white/40 hover:bg-white/60 border border-transparent"
                }`}
                style={{
                  flexGrow: isActive ? 2 : 1,
                  flexBasis: "0%",
                }}
              >
                {/* Step Number */}
                <div className={`absolute top-10 right-10 text-6xl font-black transition-opacity duration-500 ${
                  isActive ? "opacity-5 text-slate-900" : "opacity-0"
                }`}>
                  0{step.id}
                </div>

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 ${step.color}`}>
                  {step.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                  isActive ? "text-slate-900" : "text-slate-400"
                }`}>
                  {step.title}
                </h3>

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-slate-500 text-lg leading-relaxed mb-8">
                        {step.description}
                      </p>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm group"
                      >
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isActive && (
                  <div className="mt-auto">
                    <div className="w-8 h-1 bg-slate-200 rounded-full" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};