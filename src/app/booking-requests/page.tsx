"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Search,
    Calendar,
    Clock,
    MapPin,
    Check,
    X,
    MessageSquare,
    Filter,
    ArrowUpRight,
    User,
    Info,
    CheckCircle2,
    MoreVertical
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { cn } from "@/lib/utils";

// Dummy Data for Provider's Incoming Requests
const BOOKING_REQUESTS = [
    {
        id: "REQ-9901",
        serviceName: "Complete Home Wiring",
        customerName: "Rahat Ahmed",
        customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
        date: "Oct 28, 2024",
        time: "11:00 AM",
        amount: 85.00,
        status: "Pending",
        location: "House 12, Road 5, Dhanmondi",
        details: "Need a full inspection of the electrical panel and wiring for a new home office setup."
    },
    {
        id: "REQ-8842",
        serviceName: "Smart Home Installation",
        customerName: "Saima Khan",
        customerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        date: "Oct 30, 2024",
        time: "03:30 PM",
        amount: 120.00,
        status: "Pending",
        location: "Banani, Block G, Dhaka",
        details: "Setting up smart lights and a security camera system. All devices are purchased."
    }
];

const ACTIVE_JOBS = [
    {
        id: "JOB-4412",
        serviceName: "EV Charger Installation",
        customerName: "Zayed Hassan",
        customerAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
        date: "Oct 22, 2024",
        time: "09:00 AM",
        amount: 150.00,
        status: "In Progress",
        location: "Gulshan 2, Dhaka",
        progress: 65
    }
];

const TABS = ["New Requests", "Active Jobs"];

export default function BookingRequestsProviderPage() {
    const [activeTab, setActiveTab] = useState("New Requests");
    const [searchQuery, setSearchQuery] = useState("");

    const displayData = activeTab === "New Requests" ? BOOKING_REQUESTS : ACTIVE_JOBS;

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <Container>
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black text-slate-800 tracking-tight">Booking Requests</h1>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">Manage incoming service requests and client schedules</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="relative group min-w-[300px]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#17b9c1] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search by Client or ID..."
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

                {/* Requests List */}
                <div className="space-y-8">
                    <AnimatePresence mode="popLayout">
                        {displayData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-[#17b9c1]/20 transition-all group relative overflow-hidden"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                                    {/* Client & Service Info */}
                                    <div className="lg:col-span-5 space-y-6">
                                        <div className="flex items-center gap-5">
                                            <div className="relative w-20 h-20 shrink-0">
                                                <div className="w-full h-full rounded-[2rem] bg-slate-50 overflow-hidden border-4 border-white shadow-md">
                                                    <Image
                                                        src={item.customerAvatar}
                                                        alt={item.customerName}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-xl bg-white shadow-lg border border-slate-50 flex items-center justify-center">
                                                    <User className="w-3.5 h-3.5 text-[#17b9c1]" />
                                                </div>
                                            </div>
                                            <div className="space-y-0.5">
                                                <span className="text-[10px] font-black text-[#17b9c1] uppercase tracking-widest">
                                                    {activeTab === "New Requests" ? "Incoming Request" : "Active Project"}
                                                </span>
                                                <h3 className="text-xl font-black text-slate-800 tracking-tight">{item.customerName}</h3>
                                                <p className="text-sm text-slate-400 font-bold underline underline-offset-4 decoration-slate-100 group-hover:decoration-[#17b9c1]/20 transition-all">{item.serviceName}</p>
                                            </div>
                                        </div>

                                        {activeTab === "New Requests" ? (
                                            <div className="p-6 bg-slate-50/50 rounded-3xl border border-slate-50 relative group/info hover:bg-white hover:shadow-sm transition-all duration-300">
                                                <div className="flex items-center gap-2 mb-2 text-[#17b9c1]">
                                                    <Info className="w-4 h-4" />
                                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Job Details</span>
                                                </div>
                                                <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                                                    "{(item as any).details}"
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center px-1">
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</span>
                                                    <span className="text-[10px] font-black text-[#17b9c1] uppercase">{(item as any).progress}%</span>
                                                </div>
                                                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${(item as any).progress}%` }}
                                                        className="h-full bg-[#17b9c1] rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Logistics & Location */}
                                    <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#17b9c1]/5 group-hover:text-[#17b9c1] transition-all">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Date & Time</p>
                                                <p className="text-sm font-black text-slate-700 leading-tight mt-0.5">{item.date} at {item.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#17b9c1]/5 group-hover:text-[#17b9c1] transition-all">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Location</p>
                                                <p className="text-sm font-black text-slate-700 leading-tight mt-0.5 truncate max-w-[220px]">{item.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-[#17b9c1]/5 flex items-center justify-center text-[#17b9c1]">
                                                <span className="font-black text-xs">$</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Estimated Fee</p>
                                                <p className="text-xl font-black text-slate-800 leading-tight mt-0.5">${item.amount.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-stretch justify-center gap-4 pt-6 lg:pt-0">
                                        {activeTab === "New Requests" ? (
                                            <>
                                                <div className="flex flex-col lg:items-end gap-3">
                                                    <button className="w-full lg:w-fit px-10 bg-[#17b9c1] text-white py-3 hover:bg-gray-100 rounded-2xl font-black text-[13px] shadow-xl shadow-[#17b9c1]/20 transition-all group/btn">
                                                        <Check className="w-4 h-4 inline-block mr-2 group-hover/btn:scale-110 transition-transform" />
                                                        Accept
                                                    </button>
                                                    <button className="w-full lg:w-fit px-10 bg-slate-50 text-slate-400 py-2 rounded-2xl font-black text-[12px] hover:bg-red-50 hover:text-red-500 transition-all border border-transparent hover:border-red-100">
                                                        <X className="w-4 h-4 inline-block mr-2" />
                                                        Decline
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex flex-col lg:items-end gap-3">
                                                    <button className="w-full lg:w-fit px-10 bg-[#17b9c1] hover:bg-[#12949a] text-white py-3 rounded-2xl font-black text-[13px] shadow-xl shadow-[#17b9c1]/20 transition-all group/btn">
                                                        <CheckCircle2 className="w-4 h-4 inline-block mr-2 group-hover/btn:scale-110 transition-transform" />
                                                        Mark as Complete
                                                    </button>
                                                    <div className="flex gap-2 w-full lg:w-fit">
                                                        {/* <button className="flex-grow lg:flex-none lg:w-fit lg:px-8 bg-slate-900 text-white py-2 px-6 rounded-2xl font-black text-[12px] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                                                            <MessageSquare className="w-4 h-4 inline-block mr-2" />
                                                            Chat
                                                        </button> */}
                                                        {/* <button className="p-2 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 hover:text-slate-800 transition-all">
                                                            <MoreVertical className="w-4 h-4" />
                                                        </button> */}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
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
