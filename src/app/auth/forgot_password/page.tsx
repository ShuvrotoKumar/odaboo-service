"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowLeft, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for sending reset email would go here
        setIsSubmitted(true);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg.jpg"
                    alt="Professionals"
                    fill
                    className="object-cover blur-xs"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Forgot Password Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-[480px] w-full p-8 md:p-10 border border-slate-100"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-slate-800">Forgot Password?</h1>
                        <p className="text-slate-500 text-sm mt-1">No worries, we'll send you reset instructions.</p>
                    </div>
                    <Image
                        src="/Logo.png"
                        alt="Odaboo Logo"
                        width={100}
                        height={30}
                        className="h-7 w-auto object-contain"
                    />
                </div>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <label htmlFor="email" className="text-sm font-medium text-slate-700 block">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 bg-slate-50/50 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 shadow-lg bg-purple-600 hover:bg-purple-700 shadow-purple-500/20 group"
                        >
                            <span>Send OTP</span>
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send className="w-8 h-8" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">Check your email</h2>
                        <p className="text-slate-500 mb-8">
                            We've sent a password reset link to <span className="font-semibold text-slate-700">{email}</span>
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                        >
                            Didn't receive the email? Click to retry
                        </button>
                    </div>
                )}

                {/* Footer Link */}
                <div className="text-center mt-8 pt-6 border-t border-slate-100">
                    <Link
                        href="/auth/login"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Login
                    </Link>
                </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
}