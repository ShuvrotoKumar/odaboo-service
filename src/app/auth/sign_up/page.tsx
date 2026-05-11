"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000&auto=format&fit=crop"
                    alt="Professionals"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay to make the card pop */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Sign Up Form Card */}
            <div className="relative z-10 bg-white rounded-xl shadow-2xl max-w-[480px] w-full p-8 md:p-10 border border-slate-100">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl md:text-2xl font-semibold text-slate-800">Create Account</h1>
                    <Image
                        src="/Logo.png"
                        alt="Odaboo Logo"
                        width={100}
                        height={30}
                        className="h-7 w-auto object-contain"
                    />
                </div>

                {/* Form Fields */}
                <div className="space-y-4 mb-8">

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-md border border-primary/20 text-slate-900 bg-transparent placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            required
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-md border border-primary/20 text-slate-900 bg-transparent placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            required
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-md border border-primary/20 text-slate-900 bg-transparent placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            required
                        />
                    </div>

                </div>

                {/* Submit Button */}
                <button
                    className={cn(
                        "w-full flex items-center justify-center gap-2 py-3.5 rounded-md text-sm font-bold text-white transition-all duration-200 shadow-md bg-primary/60 hover:bg-primary/70 shadow-primary/20"
                    )}
                >
                    <span>Create Account</span>
                    <ArrowRight className="w-4 h-4" />
                </button>

                {/* Terms text */}
                <p className="text-xs text-slate-500 text-center mt-4">
                    By signing up, you agree to our <Link href="/terms" className="text-primary font-semibold hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary/60 font-semibold hover:underline">Privacy Policy</Link>.
                </p>

                {/* Login Link */}
                <div className="text-center mt-6 text-sm pt-6 border-t border-slate-100">
                    <span className="text-slate-500">Already have an account? </span>
                    <Link href="/auth/login" className="text-primary/60 font-semibold hover:underline">
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
}