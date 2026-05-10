"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    title: "Search",
    description:
      "Durchsuchen Sie die Liste der verfügbaren Dienstleister nach Kategorie oder Beruf. Sehen Sie sich Profile an, prüfen Sie Servicedetails und finden Sie den passenden Fachmann für Ihre Bedürfnisse.",
    icon: (
      <svg width="180" height="170" viewBox="0 0 180 170" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
        <style>{`
          @keyframes orbitCW {
            from { transform: rotate(-45deg) translateX(52px) rotate(45deg); }
            to   { transform: rotate(315deg) translateX(52px) rotate(-315deg); }
          }
          .mag-orbit {
            transform-origin: 90px 85px;
            animation: orbitCW 4s linear infinite;
          }
        `}</style>

        {/* ── 3 person silhouettes (static group, centered at 90,85) ── */}
        {/* Person top-center */}
        <circle cx="90" cy="55" r="13" stroke="black" strokeWidth="3.5" />
        <path d="M70 88C70 78 79 74 90 74C101 74 110 78 110 88V93H70V88Z" stroke="black" strokeWidth="3.5" strokeLinejoin="round" />

        {/* Person bottom-left */}
        <circle cx="57" cy="88" r="11" stroke="black" strokeWidth="3.5" />
        <path d="M40 116C40 108 48 104 57 104C66 104 74 108 74 116V120H40V116Z" stroke="black" strokeWidth="3.5" strokeLinejoin="round" />

        {/* Person bottom-right */}
        <circle cx="123" cy="88" r="11" stroke="black" strokeWidth="3.5" />
        <path d="M106 116C106 108 114 104 123 104C132 104 140 108 140 116V120H106V116Z" stroke="black" strokeWidth="3.5" strokeLinejoin="round" />

        {/* ── Magnifying glass — orbits clockwise around center (90,85) at radius 52 ── */}
        <g className="mag-orbit">
          {/* Lens */}
          <circle cx="90" cy="85" r="19" stroke="black" strokeWidth="3.5" fill="white" />
          {/* Teal person inside lens */}
          <circle cx="90" cy="81" r="6" fill="#24B8C1" />
          <path d="M81 93C81 87 85 85 90 85C95 85 99 87 99 93" fill="#24B8C1" />
          {/* Handle — pointing down-right at start position */}
          <line x1="104" y1="99" x2="116" y2="111" stroke="black" strokeWidth="4.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Booking",
    description:
      "Wählen Sie einen Dienstleister, ein passendes Datum und eine passende Uhrzeit aus und bestätigen Sie Ihre Buchung mit einer sicheren Online-Zahlung. Sie erhalten eine Bestätigungsbenachrichtigung.",
    icon: (
      <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* BOOK button */}
        <rect x="20" y="20" width="90" height="42" rx="21" stroke="black" strokeWidth="3.5" />
        <text x="65" y="48" fontSize="18" fontWeight="800" fill="black" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">BOOK</text>
        {/* Pointer finger */}
        <path d="M58 62L58 95C58 105 68 112 76 107L84 100C92 93 86 84 78 87L78 62" stroke="#24B8C1" strokeWidth="4" strokeLinejoin="round" />
        {/* Finger tip rounded */}
        <path d="M65 100C65 104 68 106 72 106" stroke="#24B8C1" strokeWidth="3" strokeLinecap="round" />
        <path d="M58 100C58 104 61 106 65 106" stroke="#24B8C1" strokeWidth="3" strokeLinecap="round" />
        {/* Thumb */}
        <path d="M78 80C78 80 88 80 90 88" stroke="#24B8C1" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Receive",
    description:
      "Ihr gebuchter Fachmann kommt zu Ihrem Standort, erledigt die Arbeit professionell und stellt sicher, dass Sie mit dem Ergebnis zufrieden sind.",
    icon: (
      <svg width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Open hand / receiving gesture */}
        <path d="M15 70L40 50C48 44 62 44 70 50L108 55" stroke="#24B8C1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 70C15 70 22 80 35 80L108 80" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <path d="M108 55L108 80" stroke="black" strokeWidth="4" strokeLinecap="round" />
        {/* Wrist */}
        <path d="M30 80L22 95" stroke="black" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Payment",
    description:
      "Zahlen Sie bar bei Dienstleistern oder über die Website, nachdem Sie Ihre Zahlungsdaten angegeben haben. Online-Zahlungen sind sicher und werden sofort bearbeitet. Bitte stellen Sie sicher, dass Ihre Zahlungsmethode für ein reibungsloses Erlebnis aktualisiert ist.",
    icon: (
      <svg width="150" height="130" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Credit card */}
        <rect x="35" y="60" width="100" height="58" rx="6" stroke="black" strokeWidth="3.5" />
        <path d="M35 76H135" stroke="black" strokeWidth="3.5" />
        <rect x="112" y="88" width="12" height="6" rx="2" fill="#24B8C1" />
        <path d="M50 94H80" stroke="#24B8C1" strokeWidth="3" strokeLinecap="round" />
        {/* Coin 1 (top right) */}
        <circle cx="105" cy="38" r="22" stroke="black" strokeWidth="3.5" />
        <circle cx="105" cy="38" r="14" stroke="#24B8C1" strokeWidth="2" />
        <text x="105" y="44" fontSize="16" fontWeight="800" fill="black" fontFamily="sans-serif" textAnchor="middle">$</text>
        {/* Coin 2 (behind card, bottom left) */}
        <circle cx="55" cy="58" r="22" stroke="black" strokeWidth="3.5" fill="white" />
        <circle cx="55" cy="58" r="14" stroke="#24B8C1" strokeWidth="2" />
        <text x="55" y="64" fontSize="16" fontWeight="800" fill="black" fontFamily="sans-serif" textAnchor="middle">$</text>
      </svg>
    ),
  },
];

export const HowItWorks = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-900">How It Works</h2>
        </div>

        {/* Cards Grid */}
        <div className="flex gap-4 items-stretch h-[420px]">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const isActive = activeId === step.id;
            return (
              <motion.div
                key={step.id}
                layout
                onMouseEnter={() => setActiveId(step.id)}
                animate={{ flex: isActive ? 2.2 : 1 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className="relative bg-white border border-gray-200 rounded-xl p-8 flex flex-col overflow-hidden cursor-pointer min-w-0"
                style={{ flexShrink: 0 }}
              >
                {/* Title always top-left */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 whitespace-nowrap">
                  {step.title}
                </h3>

                {/* Description: only visible when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      key="desc"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-slate-500 text-sm leading-relaxed max-w-[85%]"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Icon: bottom, centered */}
                <div className="mt-auto flex justify-center">
                  <motion.div
                    animate={{ scale: isActive ? 1 : 0.75, opacity: isActive ? 1 : 0.7 }}
                    transition={{ duration: 0.35 }}
                  >
                    {step.icon}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};