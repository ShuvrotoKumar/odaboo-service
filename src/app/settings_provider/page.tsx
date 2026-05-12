"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    User,
    Mail,
    Phone,
    Lock,
    Bell,
    ShieldCheck,
    LogOut,
    ChevronRight,
    CheckCircle2,
    Edit2,
    Save,
    MapPin,
    Briefcase,
    Clock,
    Eye,
    EyeOff
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

// Types
interface ProviderProfile {
    name: string;
    businessName: string;
    email: string;
    phone: string;
    location: string;
    avatar: string;
    verified: boolean;
}

// Dummy Data
const INITIAL_PROFILE: ProviderProfile = {
    name: "Alex Rivera",
    businessName: "Rivera Tech Solutions",
    email: "alex.rivera@example.com",
    phone: "+880 1712 345678",
    location: "Dhaka, Bangladesh",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    verified: true
};

const MENU_ITEMS = [
    { id: "profile", title: "Business Profile", icon: Briefcase },
    { id: "security", title: "Security", icon: Lock },
    { id: "hours", title: "Business Hours", icon: Clock },
];

export default function SettingsProviderPage() {
    const [activeSection, setActiveSection] = useState("profile");
    const [profile, setProfile] = useState(INITIAL_PROFILE);

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Sidebar Menu */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-32">
                            <div className="flex items-center gap-4 mb-8 p-2 bg-slate-50 rounded-2xl border border-slate-50">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                                        <Image
                                            src={profile.avatar}
                                            alt={profile.name}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {profile.verified && (
                                        <div className="absolute -bottom-1 -right-1 bg-primary border-2 border-white rounded-full p-0.5">
                                            <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-800 leading-tight">{profile.name}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Provider</p>
                                </div>
                            </div>

                            <nav className="space-y-1.5">
                                {MENU_ITEMS.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveSection(item.id)}
                                        className={cn(
                                            "w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-all group",
                                            activeSection === item.id
                                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className={cn("w-4 h-4", activeSection === item.id ? "text-white" : "text-slate-400 group-hover:text-primary")} />
                                            <span>{item.title}</span>
                                        </div>
                                        <ChevronRight className={cn("w-4 h-4 opacity-0 transition-all", activeSection === item.id ? "opacity-100" : "group-hover:opacity-100 group-hover:translate-x-1")} />
                                    </button>
                                ))}

                                <div className="pt-4 mt-4 border-t border-slate-100">
                                    <button className="w-full flex items-center gap-3 p-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
                                        <LogOut className="w-4 h-4" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-9"
                    >
                        <AnimatePresence mode="wait">
                            {activeSection === "profile" && <ProfileSection profile={profile} setProfile={setProfile} key="profile" />}
                            {activeSection === "security" && <SecuritySection key="security" />}
                            {activeSection === "hours" && <BusinessHoursSection key="hours" />}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </Container>
        </div>
    );
}

// --- Sections ---

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-1">{title}</h2>
        <p className="text-slate-500 text-sm font-medium">{subtitle}</p>
    </div>
);

const ProfileSection = ({ profile, setProfile }: { profile: ProviderProfile, setProfile: (p: ProviderProfile) => void }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(profile);

    const handleSave = () => {
        setProfile(formData);
        setIsEditing(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
        >
            <div className="flex items-center justify-between mb-8">
                <SectionHeader title="Business Profile" subtitle="Update your professional details and business information." />
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all"
                    >
                        <Edit2 className="w-4 h-4" />
                        Edit Profile
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-4 flex flex-col items-center">
                    <div className="relative group">
                        <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-slate-50 shadow-xl">
                            <Image src={profile.avatar} alt={profile.name} width={160} height={160} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <p className="mt-4 text-[11px] text-slate-400 font-bold uppercase tracking-widest text-center">Profile Photo</p>
                </div>

                <div className="md:col-span-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <InputGroup label="Full Name" value={isEditing ? formData.name : profile.name} onChange={(v) => setFormData({ ...formData, name: v })} isEditing={isEditing} icon={User} />
                        <InputGroup label="Business Name" value={isEditing ? formData.businessName : profile.businessName} onChange={(v) => setFormData({ ...formData, businessName: v })} isEditing={isEditing} icon={Briefcase} />
                        <InputGroup label="Email" value={isEditing ? formData.email : profile.email} onChange={(v) => setFormData({ ...formData, email: v })} isEditing={isEditing} icon={Mail} disabled />
                        <InputGroup label="Phone" value={isEditing ? formData.phone : profile.phone} onChange={(v) => setFormData({ ...formData, phone: v })} isEditing={isEditing} icon={Phone} />
                    </div>

                    {isEditing && (
                        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                            <button onClick={handleSave} className="flex-grow flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                            <button onClick={() => setIsEditing(false)} className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all">
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

interface InputGroupProps {
    label: string;
    value: string;
    onChange?: (value: string) => void;
    isEditing: boolean;
    icon: React.ElementType;
    disabled?: boolean;
}

const InputGroup = ({ label, value, onChange, isEditing, icon: Icon, disabled = false }: InputGroupProps) => (
    <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
        <div className="relative group">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                <Icon className="w-4 h-4" />
            </div>
            <input
                type="text"
                value={value}
                readOnly={!isEditing || disabled}
                onChange={(e) => onChange?.(e.target.value)}
                className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border text-[14px] font-medium transition-all outline-none",
                    !isEditing || disabled
                        ? "bg-slate-50/50 border-transparent text-slate-800 cursor-default"
                        : "bg-white border-slate-200 text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/5"
                )}
            />
        </div>
    </div>
);

const SecuritySection = () => {
    const [showPass, setShowPass] = useState(false);
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-8">
            <SectionHeader title="Security" subtitle="Manage your password and account security." />
            <div className="max-w-xl space-y-6">
                <PasswordField label="Current Password" />
                <PasswordField label="New Password" />
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                    Update Password
                </button>
            </div>
        </motion.div>
    );
};

const PasswordField = ({ label }: { label: string }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
            <div className="relative">
                <input type={show ? "text" : "password"} className="w-full pl-4 pr-12 py-3 rounded-xl bg-slate-50 border-transparent text-sm font-medium outline-none focus:bg-white focus:border-primary transition-all" placeholder="••••••••" />
                <button onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors">
                    {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
};

const BusinessHoursSection = () => {
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <SectionHeader title="Business Hours" subtitle="Set your weekly availability for bookings." />
            <div className="space-y-4">
                {DAYS.map((day) => (
                    <div key={day} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-50">
                        <span className="text-sm font-bold text-slate-700">{day}</span>
                        <div className="flex items-center gap-3">
                            <input type="time" defaultValue="09:00" className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold" />
                            <span className="text-slate-400 text-xs">to</span>
                            <input type="time" defaultValue="17:00" className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold" />
                        </div>
                    </div>
                ))}
                <button className="w-full mt-4 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                    Save Availability
                </button>
            </div>
        </motion.div>
    );
};