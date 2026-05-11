"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Join the marketplace
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to find the <br className="hidden md:block" />
                <span className="text-primary">perfect professional?</span>
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join thousands of satisfied users who trust Odaboo to connect them with the best local service providers.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <PrimaryButton className="px-10 py-4 h-auto text-lg rounded-2xl group">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </PrimaryButton>
                <button className="px-8 py-4 text-white font-bold hover:text-primary transition-colors flex items-center gap-2">
                  Learn how it works
                </button>
              </div>

              <div className="grid grid-cols-2 sm:flex items-center gap-6">
                {[
                  "Verified Pros",
                  "Secure Payments",
                  "24/7 Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-700" />
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100"
              >
                {/* Mockup of an app interface or card */}
                <div className="w-64 h-80 bg-slate-50 rounded-[2rem] overflow-hidden flex flex-col">
                  <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">O</div>
                    <div className="flex-1">
                      <div className="h-2 w-16 bg-slate-200 rounded-full mb-1" />
                      <div className="h-1.5 w-10 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1 p-6 space-y-4">
                    <div className="h-4 w-full bg-slate-100 rounded-lg" />
                    <div className="h-4 w-3/4 bg-slate-100 rounded-lg" />
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {[1,2,3].map(i => <div key={i} className="aspect-square bg-slate-100 rounded-xl" />)}
                    </div>
                  </div>
                  <div className="p-6 bg-primary h-16 flex items-center justify-center">
                    <div className="h-2 w-20 bg-white/40 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;