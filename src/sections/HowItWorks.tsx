"use client";

import { Search, Calendar, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { STEPS } from "@/data/mock";

const ICON_MAP = {
  search: Search,
  calendar: Calendar,
  "credit-card": CreditCard,
};

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle 
          title="How It Works" 
          subtitle="Three simple steps to get the professional service you deserve."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => {
            const Icon = ICON_MAP[step.icon as keyof typeof ICON_MAP];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card p-10 text-center flex flex-col items-center group hover:border-primary transition-all duration-300"
              >
                <div className="w-20 h-20 bg-brand-light dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector line for desktop */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200 dark:bg-slate-800 -z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
