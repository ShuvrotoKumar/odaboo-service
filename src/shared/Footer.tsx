"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Send,
  Sparkles 
} from "lucide-react";

// Social icons as SVG components to avoid missing exports in old lucide-react versions
const Facebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Instagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const Linkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Twitter = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Subscription", href: "/subscription" },
      { name: "Feed", href: "/feed" },
      { name: "Marketplace", href: "/services" },
    ],
    Support: [
      { name: "Help Center", href: "/help" },
      { name: "FAQs", href: "/faq" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
    Services: [
      { name: "Home Cleaning", href: "/services" },
      { name: "Plumbing", href: "/services" },
      { name: "Electrical", href: "/services" },
      { name: "Gardening", href: "/services" },
    ],
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/Logo.png"
                alt="Odaboo Logo"
                width={150}
                height={50}
                className="brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-lg leading-relaxed max-w-sm text-slate-500">
              Connecting you with top-rated local professionals for every service need. Reliable, secure, and seamless.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <social.Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-lg mb-8">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="hover:text-primary transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-0 h-4 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all mr-0 group-hover:mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Contact Section */}
        <div className="relative p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[3.5rem] backdrop-blur-sm mb-20 overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left: Headline */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Join our community</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                Stay in <br className="hidden xl:block" /> the loop
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                Get expert tips and exclusive service offers delivered to your inbox weekly.
              </p>
            </div>

            {/* Middle: Subscription Form */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur opacity-25 group-focus-within:opacity-100 transition duration-1000 group-focus-within:duration-200" />
                <div className="relative flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900/80 border border-white/10 rounded-2xl pl-14 pr-6 py-5 outline-none focus:border-primary/50 transition-all text-white placeholder:text-slate-600 shadow-2xl"
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    className="sm:w-auto w-full bg-primary hover:bg-primary/90 text-white rounded-2xl px-8 py-5 flex items-center justify-center gap-2 font-bold transition-all active:scale-95 shadow-xl shadow-primary/20 group/btn"
                  >
                    <AnimatePresence mode="wait">
                      {subscribed ? (
                        <motion.span
                          key="success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          Success!
                        </motion.span>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <span>Subscribe</span>
                          <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-slate-600 text-center lg:text-left">
                We care about your data. Read our <Link href="/privacy" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link>.
              </p>
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-3 flex flex-col gap-6 lg:pl-10 lg:border-l border-white/5">
              <a href="tel:+1234567890" className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Call us</p>
                  <p className="text-sm font-bold text-slate-300 group-hover/item:text-white transition-colors">+1 (234) 567-890</p>
                </div>
              </a>
              <a href="mailto:hello@odaboo.com" className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Email us</p>
                  <p className="text-sm font-bold text-slate-300 group-hover/item:text-white transition-colors">hello@odaboo.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[13px] font-medium text-slate-500">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>© {new Date().getFullYear()} Odaboo Service Marketplace.</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-800" />
            <p>Made with passion for local services.</p>
          </div>
          
          <div className="flex items-center gap-8">
            {[
              { name: "Terms", href: "/terms" },
              { name: "Privacy", href: "/privacy" },
              { name: "Cookies", href: "/cookies" },
            ].map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="relative group py-1"
              >
                <span className="hover:text-slate-300 transition-colors">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

      </Container>
    </footer>
  );
};