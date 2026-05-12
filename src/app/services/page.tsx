"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Search, Filter, ChevronLeft, ChevronRight, X, Sparkles, SlidersHorizontal, Info } from 'lucide-react';
import { CTASection } from '@/sections/CTASection';
import { Container } from '@/components/Container';
import { SERVICES } from '@/data/mock';
import { cn } from '@/lib/utils';

// --- Animations ---
const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

// --- Components ---

const SearchSection = ({ onSearch }: { onSearch: (term: string) => void }) => {
    const [term, setTerm] = useState('');

    return (
        <section className="relative pt-32 pb-24 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-from)_0%,_transparent_40%)] from-purple-50/50" />
            <div className="absolute bottom-0 right-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-from)_0%,_transparent_40%)] from-blue-50/50" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-bold mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Discover Top Professionals</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Premium Services</span>
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Connecting you with the finest experts. Browse a wide range of professional services tailored to your specific needs.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative group p-2 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-2xl border border-white/50">
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="relative flex-grow">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-600 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="What service are you looking for?"
                                    className="w-full pl-14 pr-6 py-5 outline-none text-slate-600 bg-transparent rounded-xl focus:bg-white transition-all text-lg"
                                    value={term}
                                    onChange={(e) => {
                                        setTerm(e.target.value);
                                        onSearch(e.target.value);
                                    }}
                                />
                            </div>
                            <button
                                onClick={() => onSearch(term)}
                                className="bg-primary hover:bg-primary/80 text-white px-12 py-5 rounded-xl font-bold transition-all shadow-xl hover:shadow-slate-200 active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                Find Service
                            </button>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{ y: -8 }}
        className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group"
    >
        <div className="relative h-64 w-full overflow-hidden">
            <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur shadow-sm text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {service.category}
                </span>
            </div>
        </div>
        <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
            </h3>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-600 text-sm font-medium">
                        {service.providers} Experts available
                    </span>
                </div>
                <button className="relative overflow-hidden group/btn px-6 py-2.5 bg-slate-50 hover:bg-purple-600 text-slate-900 hover:text-white rounded-xl text-sm font-bold transition-all duration-300">
                    View All
                </button>
            </div>
        </div>
    </motion.div>
);

const Sidebar = ({ categories, selectedCategories, onToggleCategory, onClear }: any) => (
    <div className="w-full lg:w-80 flex-shrink-0">
        <div className="sticky top-28 space-y-8">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
                    <SlidersHorizontal className="w-5 h-5 text-purple-600" />
                    <span>Filters</span>
                </div>
                {selectedCategories.length > 0 && (
                    <button
                        onClick={onClear}
                        className="text-sm font-semibold text-purple-600 hover:text-purple-700 underline underline-offset-4"
                    >
                        Clear All
                    </button>
                )}
            </div>

            <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
                <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                    Service Categories
                    <Info className="w-4 h-4 text-slate-300" />
                </h4>
                <div className="space-y-4">
                    {categories.map((cat: string) => (
                        <label key={cat} className="flex items-center gap-4 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    className="peer appearance-none w-6 h-6 rounded-lg border-2 border-slate-100 checked:bg-purple-600 checked:border-purple-600 transition-all duration-300 cursor-pointer"
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => onToggleCategory(cat)}
                                />
                                <motion.div
                                    initial={false}
                                    animate={selectedCategories.includes(cat) ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                            </div>
                            <span className={cn(
                                "text-[15px] font-medium transition-all duration-300",
                                selectedCategories.includes(cat) ? "text-purple-600 translate-x-1" : "text-slate-500 group-hover:text-slate-900"
                            )}>
                                {cat}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Premium Tip Card */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] text-white shadow-xl shadow-slate-200">
                <h5 className="font-bold mb-2">Need help?</h5>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    Our support team is here to help you find the perfect service provider.
                </p>
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold transition-all backdrop-blur-sm border border-white/10">
                    Contact Support
                </button>
            </div>
        </div>
    </div>
);

const Pagination = () => (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-20 pt-10 border-t border-slate-100">
        <p className="text-slate-500 font-medium">
            Showing <span className="text-slate-900">1-8</span> of <span className="text-slate-900">124</span> results
        </p>
        <div className="flex items-center gap-3">
            <button className="p-3 rounded-xl border border-slate-100 text-slate-400 hover:text-purple-600 hover:border-purple-200 transition-all bg-white shadow-sm disabled:opacity-50">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
                {[1, 2, 3].map(n => (
                    <button key={n} className={cn(
                        "w-11 h-11 flex items-center justify-center rounded-xl font-bold transition-all",
                        n === 1
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                            : "border border-slate-100 text-slate-600 hover:border-purple-200 hover:text-purple-600 bg-white"
                    )}>
                        {n}
                    </button>
                ))}
                <span className="flex items-center px-2 text-slate-400 font-bold">...</span>
                <button className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-100 text-slate-600 hover:border-purple-200 hover:text-purple-600 bg-white font-bold">
                    12
                </button>
            </div>
            <button className="p-3 rounded-xl border border-slate-100 text-slate-400 hover:text-purple-600 hover:border-purple-200 transition-all bg-white shadow-sm">
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    </div>
);

const ServicesPage = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        "Electrician", "Nurse", "Window cleaning", "Car Mechanic",
        "Personal Trainer", "Driving School", "Wedding Photographer", "Removal Transport"
    ];

    const handleToggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleClearFilters = () => {
        setSelectedCategories([]);
        setSearchTerm('');
    };

    const filteredServices = useMemo(() => {
        let results = SERVICES;

        if (selectedCategories.length > 0) {
            results = results.filter(service =>
                selectedCategories.includes(service.serviceType || '')
            );
        }

        if (searchTerm) {
            const lowTerm = searchTerm.toLowerCase();
            results = results.filter(service =>
                service.title.toLowerCase().includes(lowTerm) ||
                service.category.toLowerCase().includes(lowTerm)
            );
        }

        return results;
    }, [selectedCategories, searchTerm]);

    return (
        <div className="min-h-screen bg-[#fafbfc]">
            <main>
                <SearchSection onSearch={setSearchTerm} />

                <div className="pb-32">
                    <Container>
                        <div className="flex flex-col lg:flex-row gap-16">
                            <Sidebar
                                categories={categories}
                                selectedCategories={selectedCategories}
                                onToggleCategory={handleToggleCategory}
                                onClear={handleClearFilters}
                            />

                            <div className="flex-grow">
                                <AnimatePresence mode="wait">
                                    {filteredServices.length > 0 ? (
                                        <motion.div
                                            key="results"
                                            variants={staggerContainer}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            className="grid grid-cols-1 md:grid-cols-2 gap-10"
                                        >
                                            {filteredServices.map((service) => (
                                                <ServiceCard key={service.id} service={service} />
                                            ))}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="no-results"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200 flex flex-col items-center"
                                        >
                                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                                                <Search className="w-10 h-10 text-slate-300" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">No services found</h3>
                                            <p className="text-slate-400 text-lg mb-8 max-w-sm">
                                                We couldn't find anything matching your search. Try adjusting your filters.
                                            </p>
                                            <button
                                                onClick={handleClearFilters}
                                                className="px-8 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
                                            >
                                                Clear all filters
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {filteredServices.length > 0 && <Pagination />}
                            </div>
                        </div>
                    </Container>
                </div>

                <CTASection />
            </main>
        </div>
    );
};

export default ServicesPage;


