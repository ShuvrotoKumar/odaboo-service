"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { CTASection } from '@/sections/CTASection';
import { Container } from '@/components/Container';
import { SERVICES } from '@/data/mock';

// Local components for better organization
const SearchSection = ({ onSearch }: { onSearch: (term: string) => void }) => {
    const [term, setTerm] = useState('');
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6 mt-20">Explore All Services</h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Browse a wide range of professional services and find the right expert for your needs.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto p-4 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl border border-slate-50">
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                placeholder="Search Service"
                                className="w-full px-6 py-4 outline-none text-slate-600 border border-slate-200 rounded-xl focus:border-#1eb9c7-400 transition-colors"
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={() => onSearch(term)}
                            className="bg-primary hover:bg-primary/80 text-white px-10 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

const ServiceCard = ({ service }: { service: any }) => (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
        <div className="relative h-56 w-full overflow-hidden">
            <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-#1eb9c7-600 transition-colors">{service.title}</h3>
            <p className="text-slate-500 text-sm mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-#1eb9c7-400"></span>
                Anbieter insgesamt: {service.providers}
            </p>
            <div className="flex justify-end">
                <button className="text-#1eb9c7-600 border border-#1eb9c7-500 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-#1eb9c7-50 hover:shadow-inner transition-all">
                    Show all
                </button>
            </div>
        </div>
    </div>
);

const Sidebar = ({ categories, selectedCategories, onToggleCategory, onApply }: any) => (
    <div className="w-full lg:w-72 flex-shrink-0">
        <button className="w-full border border-#1eb9c7-600 rounded-xl p-3 mb-8 flex items-center justify-center gap-2 text-#1eb9c7-600 font-bold hover:bg-#1eb9c7-50 transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
        </button>

        <div className="border border-slate-100 rounded-2xl p-8 bg-white shadow-sm">
            <h4 className="text-#1eb9c7-600 font-bold mb-6 text-xs uppercase tracking-widest">Filter by Services</h4>
            <div className="space-y-4">
                {categories.map((cat: string) => (
                    <label key={cat} className="flex items-center gap-4 cursor-pointer group">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                className="peer appearance-none w-5 h-5 rounded-md border-2 border-slate-200 checked:bg-#1eb9c7-600 checked:border-#1eb9c7-600 transition-all cursor-pointer"
                                checked={selectedCategories.includes(cat)}
                                onChange={() => onToggleCategory(cat)}
                            />
                            <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-slate-600 text-[15px] font-medium group-hover:text-slate-900 transition-colors">{cat}</span>
                    </label>
                ))}
            </div>
            <button
                onClick={onApply}
                className="w-full mt-10 py-3 border-2 border-#1eb9c7-600 text-#1eb9c7-600 rounded-xl text-sm font-bold hover:bg-#1eb9c7-600 hover:text-white transition-all shadow-sm active:scale-95"
            >
                Apply filter
            </button>
        </div>
    </div>
);

const Pagination = () => (
    <div className="flex justify-center items-center gap-2 mt-16 mb-8">
        <button className="flex items-center gap-1 px-4 py-2 text-slate-400 hover:text-#1eb9c7-600 transition-colors font-medium">
            <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex gap-2">
            {[1, 2, 3, 4].map(n => (
                <button key={n} className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 font-semibold hover:border-#1eb9c7-500 hover:text-#1eb9c7-500 transition-all">
                    {n}
                </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-#1eb9c7-600 text-white font-bold shadow-lg shadow-#1eb9c7-100">5</button>
            {[6, 7].map(n => (
                <button key={n} className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 font-semibold hover:border-#1eb9c7-500 hover:text-#1eb9c7-500 transition-all">
                    {n}
                </button>
            ))}
            <span className="flex items-end px-2 pb-2 text-slate-400 font-bold text-xl">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 font-semibold hover:border-#1eb9c7-500 hover:text-#1eb9c7-500 transition-all">17</button>
        </div>
        <button className="flex items-center gap-1 px-6 py-2.5 bg-#1eb9c7-600 text-white rounded-xl shadow-lg shadow-#1eb9c7-100 hover:bg-#1eb9c7-600 transition-all font-bold ml-4">
            Next <ChevronRight className="w-4 h-4" />
        </button>
    </div>
);

const ServicesPage = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
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

    const handleApplyFilters = () => {
        setAppliedFilters(selectedCategories);
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredServices = useMemo(() => {
        let results = SERVICES;

        if (appliedFilters.length > 0) {
            results = results.filter(service =>
                appliedFilters.includes(service.serviceType || '')
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
    }, [appliedFilters, searchTerm]);

    return (
        <div className="min-h-screen bg-white">
            <main>
                <SearchSection onSearch={handleSearch} />

                <div className="bg-slate-50/50 py-20">
                    <Container>
                        <div className="flex flex-col lg:flex-row gap-12">
                            <Sidebar
                                categories={categories}
                                selectedCategories={selectedCategories}
                                onToggleCategory={handleToggleCategory}
                                onApply={handleApplyFilters}
                            />

                            <div className="flex-grow">
                                {filteredServices.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {filteredServices.map((service) => (
                                            <ServiceCard key={service.id} service={service} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                                        <p className="text-slate-400 text-lg">No services found matching your criteria.</p>
                                        <button
                                            onClick={() => { setSelectedCategories([]); setAppliedFilters([]); setSearchTerm(''); }}
                                            className="mt-4 text-#1eb9c7-600 font-bold hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                                <Pagination />
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

