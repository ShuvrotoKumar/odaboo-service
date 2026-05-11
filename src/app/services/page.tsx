"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '@/shared/Navbar';
import { Footer } from '@/shared/Footer';
import { CTASection } from '@/sections/CTASection';
import { Container } from '@/components/Container';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SERVICES } from '@/data/mock';

// Local components for better organization
const SearchSection = ({ onSearch }: { onSearch: (term: string) => void }) => {
  const [term, setTerm] = useState('');
  return (
    <section className="py-12 bg-white">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-8 text-slate-900">Explore More Services</h1>
        <div className="max-w-3xl mx-auto flex gap-0 shadow-lg rounded-lg overflow-hidden border border-slate-100">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search Service" 
              className="w-full px-6 py-4 outline-none text-slate-600"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <button 
            onClick={() => onSearch(term)}
            className="bg-[--color-primary] hover:bg-[--color-primary-hover] text-white px-8 py-4 font-semibold transition-colors flex items-center gap-2"
          >
            Search
          </button>
        </div>
      </Container>
    </section>
  );
};

const ServiceCard = ({ service }: { service: any }) => (
  <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
    <div className="relative h-48 w-full">
      <Image 
        src={service.image} 
        alt={service.title} 
        fill 
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
      <p className="text-slate-500 text-sm mb-4">Anbieter insgesamt: 116</p>
      <div className="flex justify-end">
        <button className="text-cyan-500 border border-cyan-500 px-4 py-1.5 rounded text-sm font-medium hover:bg-cyan-50 transition-colors">
          Alle anzeigen
        </button>
      </div>
    </div>
  </div>
);

const Sidebar = ({ categories, selectedCategories, onToggleCategory }: any) => (
  <div className="w-full lg:w-64 flex-shrink-0">
    <div className="border border-cyan-500 rounded p-2 mb-6 flex items-center justify-center gap-2 text-cyan-600">
      <Filter className="w-4 h-4" />
      <span className="font-medium">Filter</span>
    </div>

    <div className="border border-slate-200 rounded-lg p-6 bg-white">
      <h4 className="text-cyan-500 font-semibold mb-4 text-sm tracking-wide">Filter by Services</h4>
      <div className="space-y-3">
        {categories.map((cat: string) => (
          <label key={cat} className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-500"
              checked={selectedCategories.includes(cat)}
              onChange={() => onToggleCategory(cat)}
            />
            <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">{cat}</span>
          </label>
        ))}
      </div>
      <button className="w-full mt-8 py-2 border border-cyan-500 text-cyan-500 rounded text-sm font-medium hover:bg-cyan-50 transition-colors">
        Apply filter
      </button>
    </div>
  </div>
);

const Pagination = () => (
  <div className="flex justify-center items-center gap-2 mt-12 mb-8">
    <button className="flex items-center gap-1 px-3 py-2 text-slate-400 hover:text-slate-600 text-xs">
      <ChevronLeft className="w-4 h-4" /> Back
    </button>
    {[1, 2, 3, 4].map(n => (
      <button key={n} className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 text-xs hover:border-cyan-500 hover:text-cyan-500 transition-colors">
        {n}
      </button>
    ))}
    <button className="w-8 h-8 flex items-center justify-center rounded bg-cyan-500 text-white text-xs">5</button>
    {[6, 7].map(n => (
      <button key={n} className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 text-xs hover:border-cyan-500 hover:text-cyan-500 transition-colors">
        {n}
      </button>
    ))}
    <span className="text-slate-400">...</span>
    <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 text-xs hover:border-cyan-500 hover:text-cyan-500 transition-colors">17</button>
    <button className="flex items-center gap-1 px-4 py-2 bg-cyan-500 text-white rounded text-xs ml-2 font-medium">
      Next <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

const ServicesPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
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

  const handleSearch = (term: string) => {
    console.log("Searching for:", term);
  };

  // Duplicate services to fill the grid for demo
  const displayServices = [...SERVICES, ...SERVICES].slice(0, 8);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        <SearchSection onSearch={handleSearch} />

        <Container className="py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar 
              categories={categories} 
              selectedCategories={selectedCategories}
              onToggleCategory={handleToggleCategory}
            />

            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayServices.map((service, idx) => (
                  <ServiceCard key={idx} service={service} />
                ))}
              </div>
              <Pagination />
            </div>
          </div>
        </Container>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;