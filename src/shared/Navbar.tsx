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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-effect py-2 shadow-sm" : "bg-white py-4"
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative flex items-center">
              <span className="text-3xl font-bold text-[#71599C]">oda</span>
              <span className="text-3xl font-bold text-[#24B8C1] relative">
                boo
                {/* Circular Arrows (Simplified SVG representation) */}
                <div className="absolute -top-3 -right-2 w-8 h-8 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FBBF24] animate-spin-slow">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 13.59 2.37 15.09 3.04 16.42L5.47 14.71C5.17 13.88 5 12.97 5 12C5 8.13 8.13 5 12 5V2ZM18.53 7.29L16.1 9C16.4 9.83 16.57 10.74 16.57 11.67C16.57 15.54 13.44 18.67 9.57 18.67V21.67C15.09 21.67 19.57 17.19 19.57 11.67C19.57 10.08 19.2 8.58 18.53 7.25L18.53 7.29Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -left-2 w-8 h-8 pointer-events-none rotate-180">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FBBF24] animate-spin-slow-reverse">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 13.59 2.37 15.09 3.04 16.42L5.47 14.71C5.17 13.88 5 12.97 5 12C5 8.13 8.13 5 12 5V2ZM18.53 7.29L16.1 9C16.4 9.83 16.57 10.74 16.57 11.67C16.57 15.54 13.44 18.67 9.57 18.67V21.67C15.09 21.67 19.57 17.19 19.57 11.67C19.57 10.08 19.2 8.58 18.53 7.25L18.53 7.29Z" fill="currentColor" />
                  </svg>
                </div>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 flex-1 justify-end max-w-2xl">
            {/* Search Pill */}
            <div className="relative w-full max-w-xs group">
              <input
                type="text"
                placeholder="Suchen..."
                className="w-full h-10 pl-10 pr-4 bg-white border border-purple-100 rounded-full text-sm outline-none focus:border-primary transition-all shadow-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#24B8C1]" />
            </div>

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                {/* Avatar with circle border */}
                <div
                  className="w-10 h-10 rounded-full border-2 border-[#24B8C1] p-0.5 cursor-pointer overflow-hidden"
                  onClick={() => setIsLoggedIn(false)} // Toggle back for demo
                >
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <PrimaryButton
                  size="sm"
                  className="bg-[#24B8C1] hover:bg-[#1e9ba3] rounded-md px-6 font-semibold"
                >
                  Posten Sie Ihren Bedarf
                </PrimaryButton>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  className="text-sm font-bold text-slate-700 hover:text-primary transition-colors"
                  onClick={() => setIsLoggedIn(true)} // Toggle for demo
                >
                  Login
                </button>
                <PrimaryButton
                  size="sm"
                  className="bg-primary hover:bg-primary-hover rounded-full px-6"
                >
                  Sign Up
                </PrimaryButton>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-900 dark:text-white"
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
              <span className="text-2xl font-bold">
                <span className="text-[#71599C]">oda</span>
                <span className="text-[#24B8C1]">boo</span>
              </span>
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
                  <PrimaryButton className="w-full bg-[#24B8C1]">Posten Sie Ihren Bedarf</PrimaryButton>
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
