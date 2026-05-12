"use client";

import React, { useState } from "react";
import { 
    Plus, 
    Search, 
    Edit2, 
    Trash2, 
    ToggleLeft, 
    ToggleRight, 
    AlertCircle,
    Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

// Dummy Data
const INITIAL_SERVICES = [
    { id: 1, name: "Home Wiring & Repairs", category: "Electrical", price: 85, status: "active" },
    { id: 2, name: "Smart Home Setup", category: "Automation", price: 120, status: "active" },
    { id: 3, name: "EV Charger Installation", category: "Electrical", price: 250, status: "inactive" },
];

export default function ManageServicesPage() {
    const [services, setServices] = useState(INITIAL_SERVICES);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleStatus = (id: number) => {
        setServices(services.map(s => 
            s.id === id ? { ...s, status: s.status === "active" ? "inactive" : "active" } : s
        ));
    };

    const deleteService = (id: number) => {
        setServices(services.filter(s => s.id !== id));
    };

    const filteredServices = services.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <Container>
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black text-slate-800 tracking-tight">Manage Services</h1>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">Control your service offerings and pricing</p>
                    </div>
                    
                    <button className="w-full lg:w-fit px-10 bg-[#17b9c1] text-white py-3 rounded-2xl font-black text-[13px] shadow-xl shadow-[#17b9c1]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add New Service
                    </button>
                </div>

                {/* Search Bar - Minimalist */}
                <div className="relative group max-w-xl mb-12">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#17b9c1] transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-14 pr-6 py-4 bg-slate-50/50 border-none rounded-[2rem] text-[14px] font-bold focus:outline-none focus:ring-4 focus:ring-[#17b9c1]/5 focus:bg-white transition-all placeholder:text-slate-300"
                    />
                </div>

                {/* Services List */}
                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.length > 0 ? (
                            filteredServices.map((service, index) => (
                                <motion.div 
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: index * 0.05 }}
                                    key={service.id}
                                    className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:border-[#17b9c1]/20 transition-all"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={cn(
                                            "w-16 h-16 rounded-[1.5rem] flex items-center justify-center shrink-0 transition-all",
                                            service.status === "active" ? "bg-[#17b9c1]/5 text-[#17b9c1]" : "bg-slate-50 text-slate-300"
                                        )}>
                                            <Check className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-xl font-black text-slate-800 tracking-tight">{service.name}</h3>
                                                <StatusBadge status={service.status} />
                                            </div>
                                            <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
                                                <span className="text-[#17b9c1]">${service.price} / hour</span>
                                                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                                <span className="uppercase tracking-widest text-[10px] font-black">{service.category}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 md:pl-8 md:border-l border-slate-50">
                                        <button 
                                            onClick={() => toggleStatus(service.id)}
                                            className={cn(
                                                "p-3 rounded-2xl transition-all",
                                                service.status === "active" 
                                                    ? "text-[#17b9c1] bg-[#17b9c1]/5" 
                                                    : "text-slate-300 bg-slate-50"
                                            )}
                                        >
                                            {service.status === "active" ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7" />}
                                        </button>
                                        <button className="p-3 bg-slate-50 text-slate-400 hover:text-slate-800 rounded-2xl transition-all">
                                            <Edit2 className="w-5 h-5" />
                                        </button>
                                        <button 
                                            onClick={() => deleteService(service.id)}
                                            className="p-3 bg-slate-50 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-100"
                            >
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <AlertCircle className="w-10 h-10 text-slate-300" />
                                </div>
                                <h3 className="text-xl font-black text-slate-800">No services found</h3>
                                <p className="text-slate-400 font-medium mt-2">Try adjusting your search query.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </div>
    );
}

const StatusBadge = ({ status }: { status: string }) => {
    return (
        <span className={cn(
            "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] border",
            status === "active" 
                ? "bg-green-50 text-green-600 border-green-100" 
                : "bg-slate-50 text-slate-400 border-slate-100"
        )}>
            {status}
        </span>
    );
};