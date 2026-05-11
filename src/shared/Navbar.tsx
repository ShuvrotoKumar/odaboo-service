"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Subscription", href: "/subscription" },
  { name: "Feed", href: "/feed" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "top-0 w-full h-[70px] py-3 shadow-md bg-white"
          : "top-0 w-full h-[70px] py-3 shadow-sm bg-transparent"
      )}
    >
      <Container>
        {/* Layout: Left (Logo + Nav) | Right (Actions) */}
        <div className="flex items-center justify-between gap-4">

          {/* ── Left side: Logo & Nav Links ── */}
          <div className="flex items-center gap-40">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/Logo.png"
                alt="Odaboo Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain transition-all duration-300"
                priority
              />
            </Link>

            {/* Nav Links */}
            <div className="hidden xl:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold transition-colors whitespace-nowrap text-slate-700 hover:text-primary tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Right: Search + Auth ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Search Pill — slightly smaller */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-48 pl-8 pr-3 rounded-full text-xs outline-none transition-all shadow-sm bg-white border border-purple-100 text-slate-900 placeholder:text-slate-400 focus:border-primary"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 transition-colors text-[#24B8C1]" />
            </div>

            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full border-2 p-0.5 cursor-pointer overflow-hidden transition-colors border-[#24B8C1]"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                    alt="Profile"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <PrimaryButton
                  size="sm"
                  className="rounded-md px-5 text-xs font-semibold transition-all bg-[#24B8C1] hover:bg-[#1e9ba3] text-white"
                >
                  Post Your Need
                </PrimaryButton>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  className="text-sm font-bold transition-colors text-slate-700 hover:text-primary"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Login
                </button>
                <PrimaryButton
                  size="sm"
                  className="rounded-full px-5 transition-all bg-primary hover:bg-primary-hover text-white"
                >
                  Sign Up
                </PrimaryButton>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 transition-colors text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/Logo.png"
                  alt="Odaboo Logo"
                  width={120}
                  height={35}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6 mb-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              {isLoggedIn ? (
                <>
                  <PrimaryButton className="w-full bg-[#24B8C1]">Post Your Need</PrimaryButton>
                  <button className="text-slate-600 font-medium" onClick={() => setIsLoggedIn(false)}>Logout</button>
                </>
              ) : (
                <>
                  <PrimaryButton className="w-full" onClick={() => setIsLoggedIn(true)}>Login</PrimaryButton>
                  <PrimaryButton variant="outline" className="w-full">Sign Up</PrimaryButton>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};