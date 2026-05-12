"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    User,
    Mail,
    Phone,
    Calendar,
    Lock,
    Bell,
    ShieldCheck,
    CreditCard,
    LogOut,
    ChevronRight,
    CheckCircle2,
    Edit2,
    Save,
    X,
    Eye,
    EyeOff,
    MapPin,
    Smartphone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

interface UserProfile {
    name: string;
    email: string;
    phone: string;
    location: string;
    avatar: string;
    verified: boolean;
}

// Dummy Data
const USER_PROFILE: UserProfile = {
    name: "Shuvroto Kumar",
    email: "shuvroto@example.com",
    phone: "+880 1234 567890",
    location: "Dhaka, Bangladesh",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    verified: true
};

const MENU_ITEMS = [
    { id: "profile", title: "Profile Information", icon: User },
    { id: "security", title: "Security & Password", icon: Lock },
    // { id: "notifications", title: "Notification Preferences", icon: Bell },
    // { id: "payment", title: "Payment Methods", icon: CreditCard },
    // { id: "privacy", title: "Privacy Settings", icon: ShieldCheck },
];

export default function SettingsCustomerPage() {
    const [activeSection, setActiveSection] = useState("profile");
    const [user, setUser] = useState(USER_PROFILE);

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
                                            src={user.avatar}
                                            alt={user.name}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {user.verified && (
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white rounded-full p-0.5">
                                            <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-800 leading-tight">{user.name}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Customer</p>
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
                            {activeSection === "profile" && <ProfileSection user={user} setUser={setUser} key="profile" />}
                            {activeSection === "security" && <SecuritySection key="security" />}
                            {activeSection === "notifications" && <NotificationSection key="notifications" />}
                            {activeSection === "payment" && <PaymentSection key="payment" />}
                            {activeSection === "privacy" && <PrivacySection key="privacy" />}
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

const ProfileSection = ({ user, setUser }: { user: UserProfile, setUser: (u: UserProfile) => void }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    const handleSave = () => {
        setUser(formData);
        setIsEditing(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
        >
            <div className="flex items-center justify-between mb-8">
                <SectionHeader title="Profile Information" subtitle="Update your personal details and how others see you." />
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
                {/* Profile Photo */}
                <div className="md:col-span-4 flex flex-col items-center">
                    <div className="relative group">
                        <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-slate-50 shadow-xl">
                            <Image src={user.avatar} alt={user.name} width={160} height={160} className="w-full h-full object-cover" />
                        </div>
                        {isEditing && (
                            <label className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white rounded-3xl cursor-pointer">
                                <input type="file" className="hidden" accept="image/*" />
                                <Image className="w-6 h-6 mb-2" src="/Logo.png" alt="Upload" width={24} height={24} />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Change Photo</span>
                            </label>
                        )}
                    </div>
                    <p className="mt-4 text-[11px] text-slate-400 font-bold uppercase tracking-widest text-center">Allowed: JPG, PNG. Max 5MB</p>
                </div>

                {/* Form Fields */}
                <div className="md:col-span-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <InputGroup label="Full Name" value={isEditing ? formData.name : user.name} onChange={(v) => setFormData({ ...formData, name: v })} isEditing={isEditing} icon={User} />
                        <InputGroup label="Email Address" value={isEditing ? formData.email : user.email} onChange={(v) => setFormData({ ...formData, email: v })} isEditing={isEditing} icon={Mail} disabled />
                        <InputGroup label="Phone Number" value={isEditing ? formData.phone : user.phone} onChange={(v) => setFormData({ ...formData, phone: v })} isEditing={isEditing} icon={Phone} />
                        <InputGroup label="Location" value={isEditing ? formData.location : user.location} onChange={(v) => setFormData({ ...formData, location: v })} isEditing={isEditing} icon={MapPin} />
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
    onChange?: (v: string) => void;
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
            <SectionHeader title="Security Settings" subtitle="Keep your account secure by updating your password and enabling protections." />

            <div className="max-w-xl space-y-6">
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-slate-800">Update Password</h3>
                    <div className="space-y-4">
                        <PasswordField label="Current Password" />
                        <PasswordField label="New Password" />
                        <PasswordField label="Confirm New Password" />
                    </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                    <div>
                        <h4 className="text-sm font-bold text-primary">Two-Factor Authentication</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">Add an extra layer of security to your account by requiring a code from your phone in addition to your password.</p>
                        <button className="mt-3 text-xs font-bold text-primary hover:underline">Enable 2FA Now</button>
                    </div>
                </div>

                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                    Update Security Settings
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

const NotificationSection = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
        <SectionHeader title="Notification Preferences" subtitle="Decide how and when you want to be notified about your account activity." />
        <div className="space-y-6">
            <ToggleItem title="Email Notifications" description="Receive updates about your bookings and messages via email." defaultChecked />
            <ToggleItem title="Push Notifications" description="Get real-time alerts on your browser and mobile device." defaultChecked />
            <ToggleItem title="Marketing Emails" description="Stay updated with our latest offers, features, and tips." />
            <ToggleItem title="Service Updates" description="Be the first to know about maintenance and new services in your area." defaultChecked />
        </div>
    </motion.div>
);

interface ToggleItemProps {
    title: string;
    description: string;
    defaultChecked?: boolean;
}

const ToggleItem = ({ title, description, defaultChecked = false }: ToggleItemProps) => {
    const [checked, setChecked] = useState(defaultChecked);
    return (
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-50">
            <div className="flex items-center gap-4">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", checked ? "bg-primary/10 text-primary" : "bg-slate-200 text-slate-400")}>
                    <Bell className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-800">{title}</h4>
                    <p className="text-xs text-slate-500">{description}</p>
                </div>
            </div>
            <button
                onClick={() => setChecked(!checked)}
                className={cn("w-12 h-6 rounded-full relative transition-colors duration-200 outline-none", checked ? "bg-primary" : "bg-slate-300")}
            >
                <motion.div animate={{ x: checked ? 26 : 4 }} className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
            </button>
        </div>
    );
};

const PaymentSection = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
        <SectionHeader title="Payment Methods" subtitle="Manage your saved cards and billing information for faster checkout." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl text-white relative overflow-hidden group border border-slate-700">
                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                        <CreditCard className="w-10 h-10 text-slate-400" />
                        <span className="px-2.5 py-1 bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider">Default</span>
                    </div>
                    <p className="text-xl font-mono tracking-[4px] mb-6">•••• •••• •••• 4242</p>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Card Holder</p>
                            <p className="text-sm font-bold">SHUVROTO KUMAR</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Expires</p>
                            <p className="text-sm font-bold">12/28</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-3 p-8 text-slate-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all group">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <X className="w-6 h-6 rotate-45" />
                </div>
                <span className="font-bold text-sm">Add New Payment Method</span>
            </button>
        </div>
    </motion.div>
);

const PrivacySection = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
        <SectionHeader title="Privacy Settings" subtitle="Control who can see your information and activity on the platform." />
        <div className="space-y-6">
            <ToggleItem title="Public Profile" description="Allow other users to see your basic profile information." defaultChecked />
            <ToggleItem title="Show Online Status" description="Show when you are currently active on the platform." defaultChecked />
            <ToggleItem title="Search Engine Indexing" description="Allow search engines to index your public profile page." />

            <div className="pt-6 border-t border-slate-100">
                <button className="px-6 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-sm hover:bg-red-100 transition-all">
                    Deactivate Account
                </button>
            </div>
        </div>
    </motion.div>
);