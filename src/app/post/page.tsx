"use client";

import React, { useState } from "react";
import { 
    Send, 
    MapPin, 
    Calendar, 
    DollarSign, 
    Tag, 
    Image as ImageIcon, 
    X,
    Info,
    ChevronDown,
    Briefcase,
    Sparkles,
    ShieldCheck,
    Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

export default function PostRequirementPage() {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        location: "",
        budget: "",
        urgency: "whenever",
        description: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#17b9c1]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-blue-50/50 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Column: Context & Trust */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-sm border border-slate-100"
                            >
                                <div className="w-8 h-8 rounded-xl bg-[#17b9c1]/10 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-[#17b9c1]" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-slate-600">Post Requirement</span>
                            </motion.div>

                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight"
                            >
                                Let's find the <span className="text-[#17b9c1]">perfect</span> expert for you.
                            </motion.h1>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-500 font-medium leading-relaxed pr-8"
                            >
                                Describe your project, set your budget, and receive personalized offers from verified professionals in minutes.
                            </motion.p>
                        </div>

                        {/* Trust Badges */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6 pt-6"
                        >
                            <TrustItem 
                                icon={ShieldCheck} 
                                title="Verified Professionals" 
                                desc="All providers undergo strict background checks."
                            />
                            <TrustItem 
                                icon={Clock} 
                                title="Quick Response" 
                                desc="Get initial quotes within 15-30 minutes."
                            />
                            <TrustItem 
                                icon={DollarSign} 
                                title="Secure Payments" 
                                desc="Pay only when the work is completed to your satisfaction."
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: The Form Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-slate-50 relative">
                            <form onSubmit={handleSubmit} className="space-y-10">
                                {/* Service Title */}
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">The Essentials</label>
                                    <div className="relative group">
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="What do you need help with?"
                                            className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 text-2xl font-black placeholder:text-slate-200 focus:border-[#17b9c1] transition-all outline-none"
                                            value={formData.title}
                                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                                        />
                                    </div>
                                </div>

                                {/* Form Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                                    <ModernInput 
                                        label="Category" 
                                        icon={Tag}
                                        type="select"
                                        value={formData.category}
                                        options={[
                                            { value: "electrical", label: "Electrical" },
                                            { value: "automation", label: "Automation" },
                                            { value: "plumbing", label: "Plumbing" },
                                            { value: "cleaning", label: "Cleaning" }
                                        ]}
                                        onChange={(v) => setFormData({...formData, category: v})}
                                    />
                                    <ModernInput 
                                        label="Location" 
                                        icon={MapPin}
                                        placeholder="Enter your area"
                                        value={formData.location}
                                        onChange={(v) => setFormData({...formData, location: v})}
                                    />
                                    <ModernInput 
                                        label="Your Budget" 
                                        icon={DollarSign}
                                        placeholder="e.g. $100 - $500"
                                        value={formData.budget}
                                        onChange={(v) => setFormData({...formData, budget: v})}
                                    />
                                    <ModernInput 
                                        label="Urgency" 
                                        icon={Calendar}
                                        type="select"
                                        value={formData.urgency}
                                        options={[
                                            { value: "whenever", label: "Flexible Timing" },
                                            { value: "soon", label: "Next few days" },
                                            { value: "urgent", label: "Emergency" }
                                        ]}
                                        onChange={(v) => setFormData({...formData, urgency: v})}
                                    />
                                </div>

                                {/* Description */}
                                <div className="space-y-4 pt-4">
                                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Project Details</label>
                                    <textarea 
                                        required
                                        rows={4}
                                        placeholder="Tell us more about the job..."
                                        className="w-full px-8 py-6 bg-slate-50/50 border-2 border-transparent rounded-[2rem] text-[15px] font-bold focus:bg-white focus:border-[#17b9c1]/10 focus:ring-4 focus:ring-[#17b9c1]/5 transition-all outline-none resize-none placeholder:text-slate-300"
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    />
                                </div>

                                {/* Actions */}
                                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex -space-x-3">
                                        {[1,2,3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-4 border-white bg-[#17b9c1] flex items-center justify-center text-white text-[10px] font-black shadow-sm">
                                            +50
                                        </div>
                                    </div>

                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={cn(
                                            "w-full md:w-auto px-12 py-5 bg-[#17b9c1] text-white rounded-[1.5rem] font-black text-lg shadow-2xl shadow-[#17b9c1]/20 transition-all flex items-center justify-center gap-3",
                                            isSubmitting ? "opacity-70 scale-95" : "hover:scale-[1.02] hover:shadow-[#17b9c1]/30 active:scale-[0.98]"
                                        )}
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <span>Publish Post</span>
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}

const TrustItem = ({ icon: Icon, title, desc }: any) => (
    <div className="flex items-start gap-5 group">
        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-[#17b9c1]/20 group-hover:bg-[#17b9c1]/5 transition-all">
            <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#17b9c1] transition-colors" />
        </div>
        <div>
            <h3 className="font-black text-slate-800 text-lg leading-tight">{title}</h3>
            <p className="text-sm text-slate-400 font-medium mt-1">{desc}</p>
        </div>
    </div>
);

const ModernInput = ({ label, icon: Icon, placeholder, value, onChange, type = "text", options = [] }: any) => (
    <div className="space-y-3">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <div className="relative group">
            <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#17b9c1] transition-colors" />
            {type === "select" ? (
                <div className="relative">
                    <select 
                        required
                        className="w-full pl-12 pr-10 py-3.5 bg-slate-50/50 border-none rounded-xl text-[15px] font-bold appearance-none focus:bg-white focus:ring-4 focus:ring-[#17b9c1]/5 transition-all outline-none cursor-pointer text-slate-700"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    >
                        <option value="" disabled>{placeholder || "Select"}</option>
                        {options.map((opt: any) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
            ) : (
                <input 
                    required
                    type="text" 
                    placeholder={placeholder}
                    className="w-full pl-12 pr-6 py-3.5 bg-slate-50/50 border-none rounded-xl text-[14px] font-bold focus:bg-white focus:ring-4 focus:ring-[#17b9c1]/5 transition-all outline-none placeholder:text-slate-300"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    </div>
);