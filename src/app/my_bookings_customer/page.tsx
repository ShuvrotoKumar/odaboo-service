"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
    Search, 
    Calendar, 
    Clock, 
    MapPin, 
    MoreVertical, 
    MessageSquare, 
    ChevronRight,
    Filter,
    ArrowUpRight,
    CheckCircle2,
    XCircle,
    Timer
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

// Dummy Data
const BOOKINGS = [
    {
        id: "BK-8842",
        serviceName: "Professional Home Cleaning",
        providerName: "Jessica Miller",
        providerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        date: "Oct 24, 2024",
        time: "10:00 AM",
        amount: 45.00,
        status: "Confirmed",
        location: "123 Maple St, Dhaka"
    },
    {
        id: "BK-7721",
        serviceName: "Garden Maintenance",
        providerName: "David Smith",
        providerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
        date: "Oct 26, 2024",
        time: "02:30 PM",
        amount: 60.00,
        status: "Pending",
        location: "456 Oak Lane, Dhaka"
    },
    {
        id: "BK-6610",
        serviceName: "Plumbing Repair",
        providerName: "Sarah Johnson",
        providerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
        date: "Oct 12, 2024",
        time: "11:15 AM",
        amount: 35.00,
        status: "Completed",
        location: "789 Pine Ave, Dhaka"
    }
];

const TABS = ["All Bookings", "Upcoming", "Completed", "Cancelled"];

export default function MyBookingsCustomerPage() {
    const [activeTab, setActiveTab] = useState("All Bookings");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBookings = BOOKINGS.filter((booking) => {
        // Tab filtering
        const matchesTab = (() => {
            if (activeTab === "All Bookings") return true;
            if (activeTab === "Upcoming") return booking.status === "Confirmed" || booking.status === "Pending";
            if (activeTab === "Completed") return booking.status === "Completed";
            if (activeTab === "Cancelled") return booking.status === "Cancelled";
            return true;
        })();

        // Search filtering
        const q = searchQuery.toLowerCase();
        const matchesSearch = booking.id.toLowerCase().includes(q) || 
                              booking.providerName.toLowerCase().includes(q) ||
                              booking.serviceName.toLowerCase().includes(q);

        return matchesTab && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <Container>
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black text-slate-800 tracking-tight">My Bookings</h1>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">Track and manage your scheduled services</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="relative group min-w-[300px]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#17b9c1] transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search by ID or Provider..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border-none rounded-2xl text-[14px] font-bold focus:outline-none focus:ring-4 focus:ring-[#17b9c1]/5 focus:bg-white transition-all placeholder:text-slate-300"
                            />
                        </div>
                        <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:text-[#17b9c1] hover:bg-[#17b9c1]/5 transition-all">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 custom-scrollbar">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-8 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap",
                                activeTab === tab 
                                    ? "bg-slate-900 text-white shadow-xl shadow-slate-200" 
                                    : "bg-slate-50 text-slate-400 hover:text-slate-800 hover:bg-slate-100"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Bookings List */}
                <div className="space-y-6">
                    <AnimatePresence mode="popLayout">
                        {filteredBookings.length > 0 ? filteredBookings.map((booking, index) => (
                            <motion.div
                                key={booking.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-[#17b9c1]/20 transition-all group relative overflow-hidden"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    
                                    {/* Service & Provider Info */}
                                    <div className="lg:col-span-5 flex items-center gap-6">
                                        <div className="relative w-24 h-24 shrink-0">
                                            <div className="w-full h-full rounded-[2rem] bg-slate-50 overflow-hidden border-4 border-white shadow-md">
                                                <Image 
                                                    src={booking.providerAvatar} 
                                                    alt={booking.providerName} 
                                                    fill
                                                    className="object-cover" 
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-xl bg-white shadow-lg border border-slate-50 flex items-center justify-center">
                                                {booking.status === "Completed" ? (
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                ) : booking.status === "Pending" ? (
                                                    <Timer className="w-4 h-4 text-yellow-500" />
                                                ) : (
                                                    <CheckCircle2 className="w-4 h-4 text-[#17b9c1]" />
                                                )}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] font-black text-[#17b9c1] uppercase tracking-widest bg-[#17b9c1]/5 px-2.5 py-1 rounded-lg border border-[#17b9c1]/10">
                                                    {booking.id}
                                                </span>
                                                <StatusBadge status={booking.status} />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-800 group-hover:text-[#17b9c1] transition-colors tracking-tight">
                                                {booking.serviceName}
                                            </h3>
                                            <p className="text-sm text-slate-400 font-bold">Provided by <span className="text-slate-600 underline underline-offset-4 decoration-slate-100 group-hover:decoration-[#17b9c1]/20 transition-all">{booking.providerName}</span></p>
                                        </div>
                                    </div>

                                    {/* Date & Location */}
                                    <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#17b9c1]/5 group-hover:text-[#17b9c1] transition-all">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Date & Time</p>
                                                <p className="text-sm font-black text-slate-700 leading-tight mt-0.5">{booking.date} at {booking.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#17b9c1]/5 group-hover:text-[#17b9c1] transition-all">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Location</p>
                                                <p className="text-sm font-black text-slate-700 leading-tight mt-0.5 truncate max-w-[200px]">{booking.location}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Amount & Actions */}
                                    <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 border-t lg:border-t-0 pt-6 lg:pt-0">
                                        <div className="text-left lg:text-right">
                                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Service Fee</p>
                                            <p className="text-3xl font-black text-slate-800 tracking-tighter">${booking.amount.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="p-4 bg-slate-50 hover:bg-[#17b9c1]/5 text-slate-400 hover:text-[#17b9c1] rounded-2xl transition-all border border-transparent hover:border-[#17b9c1]/10">
                                                <MessageSquare className="w-5 h-5" />
                                            </button>
                                            <button className="bg-slate-900 hover:bg-[#17b9c1] text-white p-4 rounded-2xl transition-all shadow-xl shadow-slate-200 hover:shadow-[#17b9c1]/20">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        )) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="py-20 text-center"
                            >
                                <div className="w-24 h-24 mx-auto bg-slate-50 rounded-[2rem] flex items-center justify-center mb-6">
                                    <Search className="w-8 h-8 text-slate-300" />
                                </div>
                                <h3 className="text-xl font-black text-slate-800 mb-2">No Bookings Found</h3>
                                <p className="text-slate-400 font-bold max-w-sm mx-auto">We couldn't find any bookings matching your current filter criteria.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Empty State Illustration would go here if no bookings */}

                <div className="mt-16 flex justify-center">
                    <button className="px-10 py-4 bg-white border-2 border-slate-50 text-slate-400 font-black rounded-2xl hover:border-[#17b9c1]/20 hover:text-[#17b9c1] hover:bg-slate-50 transition-all shadow-sm text-sm uppercase tracking-widest">
                        Load More Activity
                    </button>
                </div>
            </Container>
            
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #f1f5f9;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}

const StatusBadge = ({ status }: { status: string }) => {
    const colors = {
        Confirmed: "bg-green-500",
        Pending: "bg-yellow-500",
        Completed: "bg-blue-500",
        Cancelled: "bg-red-500"
    };

    return (
        <div className="flex items-center gap-1.5">
            <div className={cn("w-1.5 h-1.5 rounded-full", colors[status as keyof typeof colors] || "bg-slate-300")} />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{status}</span>
        </div>
    );
};