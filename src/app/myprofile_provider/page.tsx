"use client";

import React from "react";
import Image from "next/image";
import { 
    Star, 
    MapPin, 
    ShieldCheck, 
    Calendar, 
    Award, 
    Clock, 
    CheckCircle2,
    Edit2,
    Share2,
    Camera,
    Zap,
    ExternalLink,
    MoreHorizontal,
    X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { cn } from "@/lib/utils";

// Dummy Data
const PROVIDER_DATA = {
    name: "Alex Rivera",
    profession: "Professional Electrician & Home Automation Expert",
    rating: 4.9,
    reviewsCount: 128,
    location: "Dhaka, Bangladesh",
    joined: "Member since 2022",
    verified: true,
    experience: "8+ Years",
    jobsDone: 450,
    responseTime: "< 1 hour",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
    bio: "I specialize in residential and commercial electrical systems, smart home installations, and energy-efficient lighting solutions. My goal is to provide safe, reliable, and high-quality service to every client.",
    services: [
        { name: "Electrical Wiring", icon: Zap },
        { name: "Smart Home Setup", icon: ShieldCheck },
        { name: "Panel Upgrades", icon: Award },
        { name: "EV Charger", icon: Clock }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1558223180-0397e75a399a?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=400&auto=format&fit=crop"
    ]
};

export default function ProviderProfilePage() {
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

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
                                        src={PROVIDER_DATA.avatar} 
                                        alt={PROVIDER_DATA.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <button className="absolute bottom-3 right-3 p-2.5 bg-[#17b9c1] text-white rounded-2xl shadow-xl border-4 border-white hover:scale-110 active:scale-95 transition-all">
                                    <Camera className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-2 mb-1.5">
                                <h1 className="text-2xl font-black text-slate-800 tracking-tight">{PROVIDER_DATA.name}</h1>
                                {PROVIDER_DATA.verified && (
                                    <div className="bg-[#17b9c1]/10 p-1 rounded-full">
                                        <ShieldCheck className="w-5 h-5 text-[#17b9c1]" />
                                    </div>
                                )}
                            </div>
                            <p className="text-sm font-bold text-slate-400 mb-8 max-w-[240px] mx-auto leading-relaxed">
                                {PROVIDER_DATA.profession}
                            </p>
                            
                            <div className="flex items-center justify-center gap-2 mb-10 p-3 bg-slate-50 rounded-2xl border border-slate-50">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={cn("w-4 h-4", i < 4 ? "text-yellow-400 fill-yellow-400" : "text-slate-200")} />
                                    ))}
                                </div>
                                <div className="h-4 w-px bg-slate-200 mx-1" />
                                <span className="text-sm font-black text-slate-800">{PROVIDER_DATA.rating}</span>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">({PROVIDER_DATA.reviewsCount} Reviews)</span>
                            </div>

                            <div className="space-y-4">
                                <PrimaryButton 
                                    onClick={() => setIsEditModalOpen(true)}
                                    className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-base font-bold shadow-xl shadow-[#17b9c1]/20"
                                >
                                    <Edit2 className="w-4 h-4" />
                                    Edit Profile
                                </PrimaryButton>
                                <button className="w-full py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2 border border-slate-100">
                                    <Share2 className="w-4 h-4" />
                                    Share Profile
                                </button>
                            </div>
                        </motion.div>

                        {/* Professional Stats */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <h3 className="text-xs font-black text-[#17b9c1] mb-8 uppercase tracking-[0.2em]">Work Statistics</h3>
                            <div className="space-y-6">
                                <StatItem icon={Award} label="Experience" value={PROVIDER_DATA.experience} color="text-blue-500" />
                                <StatItem icon={CheckCircle2} label="Jobs Done" value={PROVIDER_DATA.jobsDone} color="text-green-500" />
                                <StatItem icon={Clock} label="Response" value={PROVIDER_DATA.responseTime} color="text-orange-500" />
                                <StatItem icon={MapPin} label="Location" value={PROVIDER_DATA.location} color="text-[#17b9c1]" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Details & Content */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Summary Section */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-8 bg-[#17b9c1] rounded-full" />
                                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Professional Bio</h2>
                            </div>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                {PROVIDER_DATA.bio}
                            </p>
                        </motion.div>

                        {/* Services Grid */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black text-slate-800 tracking-tight">My Expertise</h2>
                                <button className="text-sm font-bold text-[#17b9c1] hover:underline">Manage Services</button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {PROVIDER_DATA.services.map((service, i) => (
                                    <div key={i} className="group p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-[#17b9c1]/20 hover:bg-white transition-all duration-300">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#17b9c1] shadow-sm group-hover:scale-110 transition-transform">
                                                <service.icon className="w-6 h-6" />
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-base font-black text-slate-800">{service.name}</span>
                                        <p className="text-xs font-bold text-slate-400 mt-1">Starting from $45/hr</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Work Gallery */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Recent Projects</h2>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#17b9c1] hover:text-[#17b9c1] transition-all">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {PROVIDER_DATA.gallery.map((img, i) => (
                                    <div key={i} className={cn(
                                        "relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl",
                                        i === 0 ? "aspect-[4/3]" : "aspect-square"
                                    )}>
                                        <Image 
                                            src={img} 
                                            alt={`Project ${i+1}`} 
                                            fill 
                                            className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
                                            <p className="text-white font-bold text-sm">Project Completion Details</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Reviews */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Client Reviews</h2>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm font-black text-slate-800">{PROVIDER_DATA.rating}</span>
                                </div>
                            </div>
                            
                            <div className="space-y-10">
                                <ReviewItem 
                                    user="Rahat Ahmed" 
                                    rating={5} 
                                    date="Oct 10, 2024" 
                                    comment="Excellent work! Alex was very professional and solved my wiring issues in no time. Highly recommended."
                                />
                                <div className="h-px bg-slate-100 w-full" />
                                <ReviewItem 
                                    user="Saima Khan" 
                                    rating={5} 
                                    date="Sep 28, 2024" 
                                    comment="Smart home installation was perfect. Everything works exactly as described. Very punctual."
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </Container>

            {/* Edit Modal */}
            <AnimatePresence>
                {isEditModalOpen && (
                    <EditProfileModal 
                        onClose={() => setIsEditModalOpen(false)} 
                        data={PROVIDER_DATA}
                    />
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #f1f5f9;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #e2e8f0;
                }
            `}</style>
        </div>
    );
}

// Modal Component
const EditProfileModal = ({ onClose, data }: { onClose: () => void, data: any }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col max-h-[90vh]"
            >
                {/* Modal Header */}
                <div className="p-8 pb-4 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white z-10">
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Edit Professional Profile</h2>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Update your public information</p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all hover:rotate-90"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-8 pt-6 overflow-y-auto custom-scrollbar space-y-10">
                    
                    {/* Profile Picture Section */}
                    <div className="flex items-center gap-8 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
                        <div className="relative w-24 h-24 shrink-0">
                            <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-md">
                                <Image src={data.avatar} alt="Avatar" fill className="object-cover" />
                            </div>
                            <button className="absolute -bottom-2 -right-2 p-2 bg-[#17b9c1] text-white rounded-xl shadow-lg border-2 border-white hover:scale-110 transition-transform">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-black text-slate-800">Profile Photo</h4>
                            <p className="text-xs font-bold text-slate-400 leading-relaxed">
                                Upload a high-quality photo to build trust with clients. Max size 5MB.
                            </p>
                            <div className="flex gap-2 pt-2">
                                <button className="text-[11px] font-black text-[#17b9c1] hover:underline uppercase tracking-wider">Change Photo</button>
                                <span className="text-slate-300">•</span>
                                <button className="text-[11px] font-black text-red-400 hover:underline uppercase tracking-wider">Remove</button>
                            </div>
                        </div>
                    </div>

                    {/* Basic Information Section */}
                    <div className="space-y-6">
                        <SectionLabel label="Basic Information" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Full Name" defaultValue={data.name} placeholder="e.g. Alex Rivera" />
                            <InputField label="Profession" defaultValue={data.profession} placeholder="e.g. Master Electrician" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.1em] ml-1">Professional Bio</label>
                            <textarea 
                                rows={4} 
                                defaultValue={data.bio} 
                                placeholder="Describe your experience and skills..."
                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-[#17b9c1]/20 outline-none transition-all font-bold text-[14px] text-slate-700 placeholder:text-slate-300 resize-none" 
                            />
                        </div>
                    </div>

                    {/* Professional Details Section */}
                    <div className="space-y-6">
                        <SectionLabel label="Professional Details" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Experience" defaultValue={data.experience} placeholder="e.g. 10+ Years" />
                            <InputField label="Location" defaultValue={data.location} placeholder="e.g. Dhaka, Bangladesh" />
                            <InputField label="Response Time" defaultValue={data.responseTime} placeholder="e.g. < 2 hours" />
                            <InputField label="Jobs Completed" defaultValue={data.jobsDone} placeholder="e.g. 500+" />
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center gap-4">
                    <PrimaryButton className="flex-grow py-4.5 rounded-2xl font-black text-base shadow-xl shadow-[#17b9c1]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Changes
                    </PrimaryButton>
                    <button 
                        onClick={onClose} 
                        className="px-10 py-4.5 bg-white text-slate-500 rounded-2xl font-black text-sm hover:bg-red-50 hover:text-red-500 transition-all border border-slate-100 shadow-sm"
                    >
                        Cancel
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const SectionLabel = ({ label }: { label: string }) => (
    <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[#17b9c1]" />
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">{label}</h3>
        <div className="flex-grow h-px bg-slate-100" />
    </div>
);

const InputField = ({ label, defaultValue, placeholder }: { label: string, defaultValue?: string | number, placeholder?: string }) => (
    <div className="space-y-2">
        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.1em] ml-1">{label}</label>
        <input 
            type="text" 
            defaultValue={defaultValue} 
            placeholder={placeholder}
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-[#17b9c1]/20 outline-none transition-all font-bold text-[14px] text-slate-700 placeholder:text-slate-300" 
        />
    </div>
);


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

const ReviewItem = ({ user, rating, date, comment }: { user: string, rating: number, date: string, comment: string }) => (
    <div className="space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-black text-slate-500 text-sm">
                    {user.charAt(0)}
                </div>
                <div>
                    <h4 className="text-base font-black text-slate-800">{user}</h4>
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