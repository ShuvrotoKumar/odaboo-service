"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-white">
      {/* Cinematic Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-8 border border-primary/20"
            >
              The Ultimate Service Marketplace
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-[900] text-slate-900 mb-8 tracking-tighter leading-[1.05]"
            >
              Find Expert Services <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-purple-600">
                For Any Need
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-slate-500 mb-14 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Connect with verified professionals in your neighborhood. <br className="hidden md:block" />
            Book with confidence, pay securely, and get things done.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="bg-white p-2.5 md:p-3.5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row items-center gap-3">
              <div className="flex-1 w-full px-6 py-3 flex items-center gap-4 bg-slate-50 rounded-[2rem] border border-slate-100 focus-within:border-primary/30 transition-all">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="What service are you looking for?"
                  className="w-full bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 text-base font-medium"
                />
              </div>
              <PrimaryButton className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-[2rem] px-12 py-4 h-auto text-lg font-bold shadow-lg shadow-primary/20 transform hover:scale-[1.02] active:scale-[0.98] transition-all">
                Search
              </PrimaryButton>
            </div>

            {/* Trusted indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-10 flex flex-wrap justify-center items-center gap-8 text-slate-400"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-500">10k+ Happy Users</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-500">4.9/5 Average Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

