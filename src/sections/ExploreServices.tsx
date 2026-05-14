"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SERVICES } from "@/data/mock";

export const ExploreServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1], // Smooth ease-out
      }
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <SectionTitle
            title="Explore Services"
            subtitle="Discover top-rated professionals for all your needs with our curated service selection."
            centered={false}
            className="mb-0"
          />
          <Link href="/services">
            <PrimaryButton
              variant="outline"
              className="group bg-transparent border-slate-200 text-[#17b9c1] hover:border-[#17b9c1] hover:bg-[#17b9c1] hover:text-white px-8 py-4 transition-all duration-500"
            >
              <span className="font-bold tracking-tight">View All Services</span>
              <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </PrimaryButton>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[650px]"
        >
          {/* Main Large Card */}
          <Link href="/services" className="md:col-span-2 md:row-span-2 block group">
            <motion.div
              variants={cardVariants}
              className="h-full relative overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100"
            >
              <Image
                src={SERVICES[0].image}
                alt={SERVICES[0].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              <div className="absolute bottom-0 left-0 p-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-block px-4 py-1.5 bg-[#17b9c1] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4 shadow-lg shadow-[#17b9c1]/20"
                >
                  {SERVICES[0].category}
                </motion.span>
                <h3 className="text-4xl font-black text-white mb-3 tracking-tight">{SERVICES[0].title}</h3>
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="pro" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-300 font-bold text-sm">{SERVICES[0].providers}+ Pros available</p>
                </div>
                <PrimaryButton className="px-8 shadow-xl shadow-[#17b9c1]/20">Book Now</PrimaryButton>
              </div>
            </motion.div>
          </Link>

          {/* Top Right Card */}
          <Link href="/services" className="md:col-span-2 block group">
            <motion.div
              variants={cardVariants}
              className="h-full relative overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 min-h-[300px]"
            >
              <Image
                src={SERVICES[1].image}
                alt={SERVICES[1].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{SERVICES[1].title}</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#17b9c1] animate-pulse" />
                  <p className="text-slate-300 text-xs font-bold uppercase tracking-widest">{SERVICES[1].providers} Pros active</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Bottom Middle Card */}
          <Link href="/services" className="block group">
            <motion.div
              variants={cardVariants}
              className="h-full relative overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 min-h-[300px]"
            >
              <Image
                src={SERVICES[2].image}
                alt={SERVICES[2].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl font-black text-white mb-1 tracking-tight">{SERVICES[2].title}</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{SERVICES[2].providers} Active Providers</p>
              </div>
            </motion.div>
          </Link>

          {/* Bottom Right Card */}
          <Link href="/services" className="block group">
            <motion.div
              variants={cardVariants}
              className="h-full relative overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 min-h-[300px]"
            >
              <Image
                src={SERVICES[3].image}
                alt={SERVICES[3].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl font-black text-white mb-1 tracking-tight">{SERVICES[3].title}</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{SERVICES[3].providers} Active Providers</p>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center md:hidden"
        >
          <Link href="/services">
            <PrimaryButton className="w-full py-5 rounded-2xl shadow-xl shadow-[#17b9c1]/20">View All Services</PrimaryButton>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};
