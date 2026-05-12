"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        location: "",
        budget: "",
        urgency: "whenever",
        description: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            nextStep();
            return;
        }
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);

        localStorage.setItem('newOdabooPost', JSON.stringify({
            ...formData,
            time: "Just now"
        }));
        router.push('/feed');
    };

    return (
        <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#17b9c1]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-blue-50/50 rounded-full blur-[100px]" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Column: Progress & Context */}
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
                                <span className="text-xs font-black uppercase tracking-widest text-slate-600">Step {step} of 3</span>
                            </motion.div>

                            <motion.h1 
                                key={step}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight"
                            >
                                {step === 1 && <>What do you <span className="text-[#17b9c1]">need</span> help with?</>}
                                {step === 2 && <>Where & <span className="text-[#17b9c1]">when</span> is it needed?</>}
                                {step === 3 && <>Finalize your <span className="text-[#17b9c1]">request</span>.</>}
                            </motion.h1>

                            {/* Progress Bar */}
                            <div className="flex gap-2 h-1.5 w-48 pt-2">
                                {[1,2,3].map(i => (
                                    <div key={i} className={cn(
                                        "flex-grow rounded-full transition-all duration-500",
                                        i <= step ? "bg-[#17b9c1]" : "bg-slate-200"
                                    )} />
                                ))}
                            </div>
                        </div>

                        {/* Trust Badges - Only show on first step to keep it clean */}
                        <AnimatePresence>
                            {step === 1 && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
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
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Column: The Form Card */}
                    <motion.div 
                        layout
                        className="lg:col-span-7"
                    >
                        <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-slate-50 relative min-h-[500px] flex flex-col">
                            <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                                <div className="flex-grow">
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div 
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-8"
                                            >
                                                <div className="space-y-4">
                                                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Service Title</label>
                                                    <input 
                                                        required
                                                        type="text" 
                                                        placeholder="e.g. Need an electrician for panel upgrade"
                                                        className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 text-2xl font-black placeholder:text-slate-200 focus:border-[#17b9c1] transition-all outline-none text-slate-900"
                                                        value={formData.title}
                                                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                                                    />
                                                </div>
                                                <ModernInput 
                                                    label="Select Category" 
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
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div 
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="grid grid-cols-1 md:grid-cols-1 gap-8"
                                            >
                                                <ModernInput 
                                                    label="Location" 
                                                    icon={MapPin}
                                                    placeholder="Enter your area"
                                                    value={formData.location}
                                                    onChange={(v) => setFormData({...formData, location: v})}
                                                />
                                                <div className="grid grid-cols-2 gap-8">
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
                                                            { value: "whenever", label: "Flexible" },
                                                            { value: "soon", label: "Soon" },
                                                            { value: "urgent", label: "Urgent" }
                                                        ]}
                                                        onChange={(v) => setFormData({...formData, urgency: v})}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div 
                                                key="step3"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div className="space-y-4">
                                                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Additional Details</label>
                                                    <textarea 
                                                        required
                                                        rows={6}
                                                        placeholder="Tell us more about the job details..."
                                                        className="w-full px-8 py-6 bg-slate-50/50 border-2 border-transparent rounded-[2rem] text-[15px] font-bold focus:bg-white focus:border-[#17b9c1]/10 transition-all outline-none resize-none placeholder:text-slate-300 text-slate-900"
                                                        value={formData.description}
                                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <input type="file" id="job-photos" className="hidden" multiple accept="image/*" />
                                                    <label 
                                                        htmlFor="job-photos"
                                                        className="flex items-center w-fit gap-3 px-8 py-4 bg-slate-50 text-slate-500 rounded-2xl font-bold text-sm hover:bg-slate-100 transition-all border border-dashed border-slate-200 cursor-pointer"
                                                    >
                                                        <ImageIcon className="w-5 h-5" />
                                                        Attach Job Photos (Optional)
                                                    </label>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Actions */}
                                <div className="pt-12 flex items-center justify-between gap-6 border-t border-slate-50 mt-10">
                                    {step > 1 ? (
                                        <button 
                                            type="button"
                                            onClick={prevStep}
                                            className="px-8 py-4 bg-slate-50 text-slate-500 rounded-2xl font-black text-sm hover:bg-slate-100 transition-all"
                                        >
                                            Back
                                        </button>
                                    ) : (
                                        <div /> 
                                    )}

                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={cn(
                                            "px-12 py-5 bg-[#17b9c1] text-white rounded-[1.5rem] font-black text-lg shadow-2xl shadow-[#17b9c1]/20 transition-all flex items-center justify-center gap-3",
                                            isSubmitting ? "opacity-70 scale-95" : "hover:scale-[1.02] active:scale-[0.98]"
                                        )}
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <span>{step === 3 ? "Publish Requirement" : "Continue"}</span>
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

interface TrustItemProps {
    icon: React.ElementType;
    title: string;
    desc: string;
}

const TrustItem = ({ icon: Icon, title, desc }: TrustItemProps) => (
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

interface ModernInputProps {
    label: string;
    icon: React.ElementType;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "select";
    options?: { value: string; label: string }[];
}

const ModernInput = ({ label, icon: Icon, placeholder, value, onChange, type = "text", options = [] }: ModernInputProps) => (
    <div className="space-y-3">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <div className="relative group">
            <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#17b9c1] transition-colors" />
            {type === "select" ? (
                <div className="relative">
                    <select 
                        required
                        className="w-full pl-12 pr-10 py-3.5 bg-slate-50/50 border-none rounded-xl text-[15px] font-bold appearance-none focus:bg-white focus:ring-4 focus:ring-[#17b9c1]/5 transition-all outline-none cursor-pointer text-slate-900"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    >
                        <option value="" disabled>{placeholder || "Select"}</option>
                        {options.map((opt) => (
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
                    className="w-full pl-12 pr-6 py-3.5 bg-slate-50/50 border-none rounded-xl text-[14px] font-bold focus:bg-white focus:ring-4 focus:ring-[#17b9c1]/5 transition-all outline-none placeholder:text-slate-300 text-slate-900"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    </div>
);