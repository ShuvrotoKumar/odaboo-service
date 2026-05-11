"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SERVICES } from "@/data/mock";

export const ExploreServices = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionTitle 
            title="Explore Services" 
            subtitle="Find the best services from our top-rated professionals."
            centered={false}
            className="mb-0"
          />
          <PrimaryButton variant="outline">
            View All Services <ArrowRight className="w-4 h-4 ml-2" />
          </PrimaryButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px]">
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[--radius-premium] shadow-xl"
          >
            <Image
              src={SERVICES[0].image}
              alt={SERVICES[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4">
                {SERVICES[0].category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">{SERVICES[0].title}</h3>
              <p className="text-slate-300 mb-6">{SERVICES[0].providers}+ Active Providers</p>
              <PrimaryButton size="sm">Book Now</PrimaryButton>
            </div>
          </motion.div>

          {/* Top Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 group relative overflow-hidden rounded-[--radius-premium] shadow-lg"
          >
            <Image
              src={SERVICES[1].image}
              alt={SERVICES[1].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white mb-1">{SERVICES[1].title}</h3>
              <p className="text-slate-300 text-sm">{SERVICES[1].providers} Active Providers</p>
            </div>
          </motion.div>

          {/* Bottom Middle Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-[--radius-premium] shadow-lg"
          >
            <Image
              src={SERVICES[2].image}
              alt={SERVICES[2].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-lg font-bold text-white mb-1">{SERVICES[2].title}</h3>
              <p className="text-slate-300 text-xs">{SERVICES[2].providers} Active Providers</p>
            </div>
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden rounded-[--radius-premium] shadow-lg"
          >
            <Image
              src={SERVICES[3].image}
              alt={SERVICES[3].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-lg font-bold text-white mb-1">{SERVICES[3].title}</h3>
              <p className="text-slate-300 text-xs">{SERVICES[3].providers} Active Providers</p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <PrimaryButton className="w-full">View All Services</PrimaryButton>
        </div>
      </Container>
    </section>
  );
};
