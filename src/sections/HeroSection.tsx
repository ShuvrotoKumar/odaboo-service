"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-16 overflow-hidden bg-white">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Find Expert Services <br /> For Any Need
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Connect with trusted service providers in your area. Book appointments, <br className="hidden md:block" />
            make secure payments, and get the help you need - all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white p-3 rounded-md shadow-sm border border-slate-100 flex items-center gap-3">
              <div className="flex-1 px-4 py-2 border border-purple-100 rounded-md">
                <input
                  type="text"
                  placeholder="Search Service"
                  className="w-full bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 text-sm md:text-base"
                />
              </div>
              <PrimaryButton className="bg-[#8B7BB1] hover:bg-[#7a6a9e] rounded-md px-10 py-3 shadow-none">
                Search
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
