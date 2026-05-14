"use client";

import React, { useState } from "react";
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
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 m-auto z-[60] w-full max-w-lg h-fit bg-white rounded-[2.5rem] p-8 shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black text-slate-800">Edit Profile</h2>
                            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-slate-500" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#17b9c1] outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Profession</label>
                                <input
                                    type="text"
                                    name="profession"
                                    value={formData.profession}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#17b9c1] outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Bio</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#17b9c1] outline-none transition-colors resize-none"
                                />
                            </div>
                            <PrimaryButton type="submit" className="w-full py-4 rounded-2xl font-bold">
                                Save Changes
                            </PrimaryButton>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
