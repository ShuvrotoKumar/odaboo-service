"use client";

import React from "react";
import Image from "next/image";
import { 
    Star, 
    MapPin, 
    ShieldCheck, 
    Calendar, 
    ShoppingBag,
    Heart,
    MessageSquare,
    CheckCircle2,
    Edit2,
    Share2,
    Camera,
    Clock,
    Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { cn } from "@/lib/utils";

// Dummy Data
const CUSTOMER_DATA = {
    name: "Shuvroto Kumar",
    profession: "Premium Customer",
    totalBookings: 24,
    completedBookings: 21,
    reviewsGiven: 15,
    location: "Dhaka, Bangladesh",
    joined: "Member since May 2024",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
    bio: "I'm a tech enthusiast who loves high-quality home services. Always looking for reliable professionals to help maintain and upgrade my living space.",
    favoriteCategories: [
        { name: "Electrical Work", icon: Zap },
        { name: "Smart Home", icon: ShieldCheck },
        { name: "AC Maintenance", icon: Clock },
        { name: "Deep Cleaning", icon: ShoppingBag }
    ],
    favoritePros: [
        { name: "Alex Rivera", role: "Electrician", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" },
        { name: "Sarah Chen", role: "Plumber", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" },
        { name: "Mike Ross", role: "AC Expert", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200" },
        { name: "Jessica Day", role: "Interior", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200" }
    ]
};

export default function MyProfileCustomerPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Left Column: Profile Card & Stats */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80 text-center"
                        >
                            <div className="relative mx-auto w-36 h-36 md:w-44 md:h-44 mb-6">
                                <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-slate-50 shadow-xl">
                                    <Image 
                                        src={CUSTOMER_DATA.avatar} 
                                        alt={CUSTOMER_DATA.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <button className="absolute bottom-3 right-3 p-2.5 bg-[#17b9c1] text-white rounded-2xl shadow-xl border-4 border-white hover:scale-110 active:scale-95 transition-all">
                                    <Camera className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-2 mb-1.5">
                                <h1 className="text-2xl font-black text-slate-800 tracking-tight">{CUSTOMER_DATA.name}</h1>
                                {CUSTOMER_DATA.verified && (
                                    <div className="bg-[#17b9c1]/10 p-1 rounded-full">
                                        <ShieldCheck className="w-5 h-5 text-[#17b9c1]" />
                                    </div>
                                )}
                            </div>
                            <p className="text-sm font-bold text-slate-400 mb-8 max-w-[240px] mx-auto leading-relaxed">
                                {CUSTOMER_DATA.profession}
                            </p>
                            
                            <div className="space-y-4">
                                <PrimaryButton className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-base font-bold shadow-xl shadow-[#17b9c1]/20">
                                    <Edit2 className="w-4 h-4" />
                                    Edit Profile
                                </PrimaryButton>
                                <button className="w-full py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2 border border-slate-100">
                                    <Share2 className="w-4 h-4" />
                                    Share Profile
                                </button>
                            </div>
                        </motion.div>

                        {/* Booking Activity */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <h3 className="text-xs font-black text-[#17b9c1] mb-8 uppercase tracking-[0.2em]">Booking Activity</h3>
                            <div className="space-y-6">
                                <StatItem icon={ShoppingBag} label="Total Orders" value={CUSTOMER_DATA.totalBookings} color="text-blue-500" />
                                <StatItem icon={CheckCircle2} label="Completed" value={CUSTOMER_DATA.completedBookings} color="text-green-500" />
                                <StatItem icon={Star} label="Reviews Given" value={CUSTOMER_DATA.reviewsGiven} color="text-orange-500" />
                                <StatItem icon={Calendar} label="Member Since" value="May 2024" color="text-[#17b9c1]" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Details & Content */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Bio Section */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-8 bg-[#17b9c1] rounded-full" />
                                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Personal Bio</h2>
                            </div>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                {CUSTOMER_DATA.bio}
                            </p>
                        </motion.div>

                        {/* Favorite Categories */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-8">Favorite Categories</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {CUSTOMER_DATA.favoriteCategories.map((cat, i) => (
                                    <div key={i} className="group p-5 bg-slate-50 rounded-3xl border border-transparent hover:border-[#17b9c1]/20 hover:bg-white transition-all duration-300 text-center">
                                        <div className="w-12 h-12 mx-auto rounded-2xl bg-white flex items-center justify-center text-[#17b9c1] shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                            <cat.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-black text-slate-800">{cat.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Favorite Pros */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Favorite Professionals</h2>
                                <button className="text-sm font-bold text-[#17b9c1] hover:underline">View All</button>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {CUSTOMER_DATA.favoritePros.map((pro, i) => (
                                    <div key={i} className="flex flex-col items-center group cursor-pointer">
                                        <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden mb-3 border-2 border-slate-50 shadow-md group-hover:scale-105 transition-transform duration-300">
                                            <Image 
                                                src={pro.img} 
                                                alt={pro.name} 
                                                width={80} 
                                                height={80} 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                        <h4 className="text-sm font-black text-slate-800 text-center group-hover:text-[#17b9c1] transition-colors">{pro.name}</h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{pro.role}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Recent Reviews */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Reviews I've Written</h2>
                                <button className="text-sm font-bold text-[#17b9c1] hover:underline">History</button>
                            </div>
                            
                            <div className="space-y-10">
                                <ReviewItem 
                                    pro="Alex Rivera" 
                                    rating={5} 
                                    date="Oct 12, 2024" 
                                    comment="Fixed my smart lighting perfectly. Very polite and knowledgeable about HomeKit integration."
                                />
                                <div className="h-px bg-slate-100 w-full" />
                                <ReviewItem 
                                    pro="Sarah Chen" 
                                    rating={4} 
                                    date="Sep 28, 2024" 
                                    comment="Quick response for a leak in the kitchen. Very professional service."
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </Container>
        </div>
    );
}

// Helper Components
const StatItem = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string | number, color: string }) => (
    <div className="flex items-center justify-between group">
        <div className="flex items-center gap-4">
            <div className={cn("w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center transition-colors group-hover:bg-white group-hover:shadow-md", color)}>
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-[15px] font-bold text-slate-400">{label}</span>
        </div>
        <span className="text-base font-black text-slate-800">{value}</span>
    </div>
);

const ReviewItem = ({ pro, rating, date, comment }: { pro: string, rating: number, date: string, comment: string }) => (
    <div className="space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-black text-slate-500 text-sm">
                    {pro.charAt(0)}
                </div>
                <div>
                    <h4 className="text-base font-black text-slate-800">Review for {pro}</h4>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{date}</p>
                </div>
            </div>
            <div className="flex items-center gap-1">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
            </div>
        </div>
        <p className="text-[15px] text-slate-500 font-medium leading-relaxed italic border-l-4 border-[#17b9c1]/10 pl-4 py-1">
            "{comment}"
        </p>
    </div>
);