"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();
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

  if (pathname?.startsWith("/auth")) return null;

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "top-0 w-full h-[85px] py-4 shadow-md bg-white"
          : "top-0 w-full h-[85px] py-4 shadow-sm bg-transparent"
      )}
    >
      <Container>
        {/* Layout: Left (Logo + Nav) | Right (Actions) */}
        <div className="flex items-center justify-between gap-4 h-full">

          {/* ── Left side: Logo & Nav Links ── */}
          <div className="flex items-center gap-30">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/Logo.png"
                alt="Odaboo Logo"
                width={160}
                height={55}
                className="h-11 w-auto object-contain transition-all duration-300"
                priority
              />
            </Link>

            {/* Nav Links */}
            <div className="hidden xl:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-[800] transition-colors whitespace-nowrap text-slate-800 hover:text-primary tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Right: Search + Auth ── */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Search Pill — slightly larger */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") router.push("/services");
                }}
                className="h-11 w-56 pl-10 pr-4 rounded-full text-sm outline-none transition-all shadow-sm bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors text-slate-400 group-focus-within:text-primary" />
            </div>

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link href="/profile">
                  <div className="w-10 h-10 rounded-full border-2 p-0.5 cursor-pointer overflow-hidden transition-colors border-primary">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </Link>
                <PrimaryButton
                  onClick={() => router.push("/services")}
                  className="rounded-xl px-6 py-2.5 text-sm font-bold transition-all bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20"
                >
                  Post Your Need
                </PrimaryButton>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  className="text-[15px] font-extrabold transition-colors text-slate-800 hover:text-primary"
                  onClick={() => router.push("/auth/login")}
                >
                  Login
                </button>
                <PrimaryButton
                  className="rounded-full px-8 py-2.5 text-sm font-bold transition-all bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20"
                  onClick={() => router.push("/auth/confirm_auth")}
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

            <div className="flex flex-col gap-8 mb-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-[900] text-slate-900 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              {isLoggedIn ? (
                <>
                  <PrimaryButton className="w-full bg-primary">Post Your Need</PrimaryButton>
                  <button className="text-slate-600 font-medium" onClick={() => setIsLoggedIn(false)}>Logout</button>
                </>
              ) : (
                <>
                  <PrimaryButton className="w-full" onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push("/auth/login");
                  }}>Login</PrimaryButton>
                  <PrimaryButton variant="outline" className="w-full" onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push("/auth/confirm_auth");
                  }}>Sign Up</PrimaryButton>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};