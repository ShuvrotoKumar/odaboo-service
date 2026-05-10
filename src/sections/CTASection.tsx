"use client";

import { motion } from "framer-motion";

// Inline Container
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-5xl mx-auto px-6">{children}</div>
);

// Social icons as SVGs
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

// Odaboo Logo
const OdabooLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
    <span style={{
      fontSize: "22px",
      fontWeight: "700",
      color: "#2d2d2d",
      fontFamily: "Georgia, serif",
      letterSpacing: "-0.5px",
    }}>
      oda
    </span>
    <span style={{
      fontSize: "22px",
      fontWeight: "700",
      color: "#f5a623",
      fontFamily: "Georgia, serif",
    }}>
      b
    </span>
    <span style={{
      fontSize: "22px",
      fontWeight: "700",
      color: "#4ab5e8",
      fontFamily: "Georgia, serif",
    }}>
      o
    </span>
    <span style={{
      fontSize: "22px",
      fontWeight: "700",
      color: "#2d2d2d",
      fontFamily: "Georgia, serif",
    }}>
      o
    </span>
    {/* Circular arrows icon */}
    <svg width="22" height="22" viewBox="0 0 40 40" style={{ marginLeft: "1px" }}>
      <path d="M20 8 A12 12 0 0 1 32 20" stroke="#f5a623" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <polygon points="32,14 36,20 28,20" fill="#f5a623" />
      <path d="M20 32 A12 12 0 0 1 8 20" stroke="#4ab5e8" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <polygon points="8,26 4,20 12,20" fill="#4ab5e8" />
    </svg>
  </div>
);

export const CTASection = () => {
  return (
    <section
      style={{
        backgroundColor: "#e8f5f5",
        border: "2px solid #c8a84b",
        borderRadius: "4px",
        padding: "0",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Main CTA Area */}
      <div
        style={{
          padding: "48px 24px 52px",
          textAlign: "center",
          borderBottom: "1px solid #c5d8d8",
        }}
      >
        {/* Eyebrow text */}
        <p
          style={{
            fontSize: "12px",
            color: "#5a7a7a",
            marginBottom: "16px",
            letterSpacing: "0.02em",
          }}
        >
          We connect you with trusted professionals.
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: "800",
            color: "#1a1a1a",
            marginBottom: "16px",
            lineHeight: "1.15",
            letterSpacing: "-0.5px",
          }}
        >
          Request more information.
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "15px",
            color: "#4a6a6a",
            marginBottom: "28px",
            lineHeight: "1.6",
          }}
        >
          Find, book, and enjoy high-quality services easily—anytime and anywhere.
        </p>

        {/* CTA Button */}
        <button
          style={{
            backgroundColor: "#f5a623",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            padding: "13px 36px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseOver={e => (e.currentTarget.style.opacity = "0.88")}
          onMouseOut={e => (e.currentTarget.style.opacity = "1")}
        >
          Contact us.
        </button>
      </div>
    </section>
  );
};

export default CTASection;