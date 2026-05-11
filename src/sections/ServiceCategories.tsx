"use client";

import Image from "next/image";
import { motion, useInView, useAnimate } from "framer-motion";
import { Container } from "@/components/Container";
import { CATEGORIES } from "@/data/mock";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export const ServiceCategories = () => {
  const [scope, animate] = useAnimate();
  // Using the scope itself as the trigger for isInView
  const isInView = useInView(scope, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const runAnimation = async () => {
        // Initial state: all cards stacked and invisible in the 'perceived' center
        // We'll use a staggered entrance from center
        
        const animations = CATEGORIES.map((_, i) => {
          // Calculate stagger delay
          const delay = i * 0.15;
          
          return animate(`.card-${i}`, 
            { 
              opacity: 1, 
              scale: 1, 
              x: 0, 
              y: 0,
              rotate: 0 
            }, 
            { 
              delay,
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 1
            }
          );
        });

        await Promise.all(animations);
      };

      runAnimation();
    }
  }, [isInView, animate]);

  // Logic to determine initial position (all starting from a central-ish point)
  // We'll offset them slightly so they look like a deck
  const getInitialStyles = (index: number) => {
    // Offset them towards the center of a 4-column grid
    // Col 1: needs +150% to reach center
    // Col 2: needs +50% to reach center
    // Col 3: needs -50% to reach center
    // Col 4: needs -150% to reach center
    const xOffsets = ["150%", "50%", "-50%", "-150%"];
    return {
      x: xOffsets[index] || 0,
      y: 40,
      opacity: 0,
      scale: 0.8,
      rotate: (index - 1.5) * 5, // Slight fan rotation
    };
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
              Marketplace
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
              Popular Categories
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Discover verified professionals across various industries, ready to help you today.
            </p>
          </motion.div>
        </div>

        <div 
          ref={scope}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative"
        >
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={getInitialStyles(index)}
              className={`category-card card-${index} group relative h-[500px] overflow-hidden rounded-[3.5rem] cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(30,185,199,0.15)] transition-shadow duration-700 bg-slate-100`}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                {/* Overlays - Decreasing opacity on hover to show 'full' image */}
                <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/20 transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">
                      {category.name}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="h-1 w-12 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  
                  <p className="text-white font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 drop-shadow-sm">
                    {category.count}+ Professionals
                  </p>
                </div>
              </div>

              {/* Subtle shine on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};



