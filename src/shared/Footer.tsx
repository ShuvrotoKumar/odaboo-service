"use client";

import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 5.72 5.72l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// ── Logo ───────────────────────────────────────────────────────────────────
const OdabooLogo = ({ light = false }: { light?: boolean }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
    {["o", "d", "a"].map((l, i) => (
      <span key={i} style={{ fontSize: "20px", fontWeight: 800, color: light ? "#fff" : "#1a2e2e", fontFamily: "Georgia, serif" }}>{l}</span>
    ))}
    <span style={{ fontSize: "20px", fontWeight: 800, color: "#f5a623", fontFamily: "Georgia, serif" }}>b</span>
    <span style={{ fontSize: "20px", fontWeight: 800, color: "#4ab5e8", fontFamily: "Georgia, serif" }}>o</span>
    <span style={{ fontSize: "20px", fontWeight: 800, color: light ? "#fff" : "#1a2e2e", fontFamily: "Georgia, serif" }}>o</span>
    <svg width="20" height="20" viewBox="0 0 40 40" style={{ marginLeft: "2px" }}>
      <path d="M20 8 A12 12 0 0 1 32 20" stroke="#f5a623" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <polygon points="32,14 36,20 28,20" fill="#f5a623" />
      <path d="M20 32 A12 12 0 0 1 8 20" stroke="#4ab5e8" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <polygon points="8,26 4,20 12,20" fill="#4ab5e8" />
    </svg>
  </div>
);

// ── Data ───────────────────────────────────────────────────────────────────
const links = {
  Company: ["About Us", "Careers", "Press", "Contact"],
  Services: ["Home Service", "Electrical", "Cleaning", "Automotive"],
  Support: ["Help Center", "Privacy Policy", "Terms of Service", "FAQ"],
};

const socials = [
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: XIcon, label: "X" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: FacebookIcon, label: "Facebook" },
];

// ── Component ──────────────────────────────────────────────────────────────
export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer style={{ backgroundColor: "#0f2020", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      {/* ── Wave transition from CTA teal → dark ── */}
      <div style={{ lineHeight: 0, backgroundColor: "#e8f5f5" }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#0f2020" />
        </svg>
      </div>

      {/* ── Main footer body ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 32px 40px" }}>

        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: "48px",
          paddingBottom: "48px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>

          {/* Brand column */}
          <div>
            <OdabooLogo light />
            <p style={{
              marginTop: "16px",
              fontSize: "13.5px",
              lineHeight: "1.75",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "240px",
            }}>
              Odaboo is the leading marketplace for professional services. We connect expert professionals with people who need their skills.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    backgroundColor: "transparent",
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.borderColor = "#f5a623";
                    e.currentTarget.style.color = "#f5a623";
                    e.currentTarget.style.backgroundColor = "rgba(245,166,35,0.1)";
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#4ab5e8",
                marginBottom: "18px",
              }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: "13.5px",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.18s",
                      }}
                      onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                      onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter + contact row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "32px",
          padding: "36px 0",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          {/* Newsletter */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginBottom: "12px" }}>
              Subscribe to our newsletter to get latest updates and offers.
            </p>
            {subscribed ? (
              <p style={{ fontSize: "13px", color: "#4ab5e8", fontWeight: 600 }}>✓ You're subscribed!</p>
            ) : (
              <div style={{ display: "flex", gap: "0", maxWidth: "380px" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                  style={{
                    flex: 1,
                    padding: "11px 16px",
                    fontSize: "13px",
                    backgroundColor: "#1a3535",
                    border: "1.5px solid rgba(255,255,255,0.12)",
                    borderRight: "none",
                    borderRadius: "6px 0 0 6px",
                    color: "#fff",
                    outline: "none",
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  style={{
                    padding: "11px 22px",
                    fontSize: "13px",
                    fontWeight: 600,
                    backgroundColor: "#7c5cbf",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0 6px 6px 0",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={e => (e.currentTarget.style.backgroundColor = "#6a4daa")}
                  onMouseOut={e => (e.currentTarget.style.backgroundColor = "#7c5cbf")}
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="tel:+12345678900" style={{
              display: "flex", alignItems: "center", gap: "8px",
              fontSize: "13.5px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.18s"
            }}
              onMouseOver={e => (e.currentTarget.style.color = "#4ab5e8")}
              onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
              <span style={{ color: "#4ab5e8" }}><PhoneIcon /></span>
              +1 (234) 567-890
            </a>
            <a href="mailto:hello@odaboo.com" style={{
              display: "flex", alignItems: "center", gap: "8px",
              fontSize: "13.5px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.18s"
            }}
              onMouseOver={e => (e.currentTarget.style.color = "#4ab5e8")}
              onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
              <span style={{ color: "#4ab5e8" }}><MailIcon /></span>
              hello@odaboo.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "24px",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            © 2026 Odaboo Social. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy", "Terms", "Cookies"].map(item => (
              <a key={item} href="#" style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "color 0.18s",
              }}
                onMouseOver={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;