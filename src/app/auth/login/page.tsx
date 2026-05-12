"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login
        localStorage.setItem("auth_token", "dummy_token");
        // Dispatch storage event manually because 'storage' event only fires in other tabs
        window.dispatchEvent(new Event("storage"));
        router.push("/");
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg.jpg"
                    alt="Professionals"
                    fill
                    className="object-cover blur-xs"
                    priority
                />
                {/* Dark overlay to make the card pop */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Login Form Card */}
            <div className="relative z-10 bg-white rounded-xl shadow-2xl max-w-[480px] w-full p-8 md:p-10 border border-slate-100">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl md:text-2xl font-semibold text-slate-800">Welcome Back</h1>
                    <Image
                        src="/Logo.png"
                        alt="Odaboo Logo"
                        width={100}
                        height={30}
                        className="h-7 w-auto object-contain"
                    />
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4 mb-8">
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
                                className="w-full pl-10 pr-4 py-3 rounded-md border border-slate-200 text-slate-900 bg-transparent placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
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
                                className="w-full pl-10 pr-4 py-3 rounded-md border border-slate-200 text-slate-900 bg-transparent placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                required
                            />
                        </div>

                        <div className="flex justify-end">
                            <Link href="/auth/forgot_password" size="sm" className="text-xs font-semibold text-purple-600 hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={cn(
                            "w-full flex items-center justify-center gap-2 py-3.5 rounded-md text-sm font-bold text-white transition-all duration-200 shadow-md bg-purple-600 hover:bg-purple-700 shadow-purple-500/20"
                        )}
                    >
                        <span>Login</span>
                        <LogIn className="w-4 h-4" />
                    </button>
                </form>

                <div className="text-center mt-6 text-sm pt-6 border-t border-slate-100">
                    <span className="text-slate-500">Don't have an account? </span>
                    <Link href="/auth/confirm_auth" className="text-primary font-bold hover:underline">
                        Sign Up
                    </Link>
                </div>

            </div>
        </div>
    );
}