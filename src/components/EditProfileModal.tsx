"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        name: string;
        profession: string;
        bio: string;
        location: string;
        avatar: string;
    };
    onSave: (newData: any) => void;
}

export function EditProfileModal({ isOpen, onClose, data, onSave }: EditProfileModalProps) {
    const [formData, setFormData] = useState(data);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        className="fixed inset-0 m-auto z-[110] w-full max-w-xl h-fit bg-white rounded-[3rem] shadow-[0_32px_80px_rgba(0,0,0,0.15)] overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#17b9c1]/10 to-blue-500/10 -z-10" />
                        
                        <div className="p-10">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">Edit Profile</h2>
                                    <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">Update your digital identity</p>
                                </div>
                                <button 
                                    onClick={onClose} 
                                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all active:scale-90"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Avatar Upload Simulation */}
                                <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                    <div className="relative w-24 h-24 shrink-0">
                                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden border-4 border-white shadow-xl">
                                            <Image 
                                                src={formData.avatar} 
                                                alt="Preview" 
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <label className="absolute -bottom-2 -right-2 p-2 bg-[#17b9c1] text-white rounded-xl shadow-lg border-2 border-white hover:scale-110 active:scale-95 transition-all cursor-pointer">
                                            <input type="file" className="hidden" accept="image/*" />
                                            <Camera className="w-4 h-4" />
                                        </label>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-black text-slate-800">Profile Photo</h4>
                                        <p className="text-xs text-slate-400 font-bold leading-relaxed">
                                            Upload a high-quality photo. Max size 5MB.
                                        </p>
                                        <button type="button" className="text-[10px] font-black text-[#17b9c1] uppercase tracking-widest hover:underline mt-2">
                                            Change Picture
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#17b9c1]/20 focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-2">Profession</label>
                                        <input
                                            type="text"
                                            name="profession"
                                            value={formData.profession}
                                            onChange={handleChange}
                                            placeholder="What do you do?"
                                            className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#17b9c1]/20 focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-2">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="City, Country"
                                        className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#17b9c1]/20 focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 shadow-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-2">Short Bio</label>
                                    <textarea
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us a bit about yourself..."
                                        className="w-full p-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-[#17b9c1]/20 focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 shadow-sm resize-none"
                                    />
                                </div>

                                <div className="pt-4 flex gap-4">
                                    <PrimaryButton type="submit" className="flex-grow py-5 rounded-[1.5rem] font-black text-base shadow-xl shadow-[#17b9c1]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                        Update Profile
                                    </PrimaryButton>
                                    <button 
                                        type="button"
                                        onClick={onClose}
                                        className="px-8 py-5 bg-slate-50 text-slate-400 font-black rounded-[1.5rem] hover:bg-slate-100 transition-all"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
