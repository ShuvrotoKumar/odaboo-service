"use client";

import Link from "next/link";
import { MessageCircle, X, Camera, Users, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Home Service", href: "/services/home" },
      { name: "Electrical", href: "/services/electrical" },
      { name: "Cleaning", href: "/services/cleaning" },
      { name: "Automotive", href: "/services/automotive" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                O
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                odaboo<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm leading-relaxed">
              Odaboo is the leading marketplace for professional services. 
              We connect expert professionals with people who need their skills.
            </p>
            <div className="flex gap-4">
              {[MessageCircle, X, Camera, Users].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / Contact */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              Stay Updated
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Subscribe to our newsletter to get latest updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white"
              />
              <PrimaryButton size="sm">Subscribe</PrimaryButton>
            </div>
            
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@odaboo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Odaboo Social. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm">Privacy</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm">Terms</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
