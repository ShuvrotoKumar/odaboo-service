"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Gradient and Pattern */}
      <div className="absolute inset-0 bg-brand-light dark:bg-purple-900/10 -z-10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-10 pointer-events-none -z-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Join thousands of satisfied customers and skilled professionals on Odaboo. 
            Whether you need a service or want to offer one, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton size="lg" className="w-full sm:w-auto">
              Request Information
            </PrimaryButton>
            <PrimaryButton size="lg" variant="secondary" className="w-full sm:w-auto">
              Become a Seller
            </PrimaryButton>
          </div>
          
          {/* Floating decorative elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-12 h-12 bg-primary/20 rounded-full blur-xl"
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
          />
        </motion.div>
      </Container>
    </section>
  );
};
