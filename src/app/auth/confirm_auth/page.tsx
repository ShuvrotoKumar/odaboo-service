"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ConfirmAuthPage() {
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState<"customer" | "provider" | null>(null);

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

            {/* Role Selection Card */}
            <div className="relative z-10 bg-white rounded-xl shadow-2xl max-w-[480px] w-full p-8 md:p-10 border border-slate-100">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl md:text-2xl font-semibold text-slate-800">Select your role</h1>
                    <Image
                        src="/Logo.png"
                        alt="Odaboo Logo"
                        width={100}
                        height={30}
                        className="h-7 w-auto object-contain"
                    />
                </div>

                {/* Role Options */}
                <div className="space-y-4 mb-8">
                    <button
                        onClick={() => setSelectedRole("customer")}
                        className={cn(
                            "w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-md border text-sm font-bold uppercase transition-all duration-200",
                            selectedRole === "customer"
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-primary/30 text-primary/70 hover:bg-primary/5"
                        )}
                    >
                        <User className="w-4 h-4" />
                        <span>I WANT TO BE A CUSTOMER</span>
                    </button>

                    <button
                        onClick={() => setSelectedRole("provider")}
                        className={cn(
                            "w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-md border text-sm font-bold uppercase transition-all duration-200",
                            selectedRole === "provider"
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-primary/30 text-primary/70 hover:bg-primary/5"
                        )}
                    >
                        <Briefcase className="w-4 h-4" />
                        <span>I WANT TO BE A SERVICE PROVIDER</span>
                    </button>
                </div>

                {/* Signup Action */}
                <button
                    onClick={() => router.push("/auth/sign_up")}
                    className={cn(
                        "w-full py-3.5 rounded-md text-sm font-bold text-white transition-colors duration-200 shadow-md",
                        selectedRole
                            ? "bg-primary hover:bg-primary/90 shadow-primary/20"
                            : "bg-slate-300 cursor-not-allowed shadow-none"
                    )}
                    disabled={!selectedRole}
                >
                    Signup With Email
                </button>

                {/* Login Link */}
                <div className="text-center mt-6 text-sm">
                    <span className="text-slate-500">Already have an account? </span>
                    <Link href="/auth/login" className="text-primary font-semibold hover:underline">
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
}