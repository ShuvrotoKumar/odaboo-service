"use client";

import { useState } from "react";

const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    title: "Search",
    description:
      "Durchsuchen Sie die Liste der verfügbaren Dienstleister nach Kategorie oder Beruf. Sehen Sie sich Profile an, prüfen Sie Servicedetails und finden Sie den passenden Fachmann für Ihre Bedürfnisse.",
    icon: <SearchIcon />,
  },
  {
    id: 2,
    title: "Booking",
    description:
      "Wählen Sie einen Dienstleister, ein passendes Datum und eine passende Uhrzeit aus und bestätigen Sie Ihre Buchung mit einer sicheren Online-Zahlung. Sie erhalten eine Bestätigungsbenachrichtigung.",
    icon: <BookingIcon />,
  },
  {
    id: 3,
    title: "Receive",
    description:
      "Ihr gebuchter Fachmann kommt zu Ihrem Standort, erledigt die Arbeit professionell und stellt sicher, dass Sie mit dem Ergebnis zufrieden sind.",
    icon: <ReceiveIcon />,
  },
  {
    id: 4,
    title: "Payment",
    description:
      "Zahlen Sie bar bei Dienstleistern oder über die Website, nachdem Sie Ihre Zahlungsdaten angegeben haben. Online-Zahlungen sind sicher und werden sofort bearbeitet.",
    icon: <PaymentIcon />,
  },
];

function SearchIcon() {
  return (
    <>
      <style>{`
        @keyframes searchOrbit {
          from { transform: rotate(0deg) translateX(46px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(46px) rotate(-360deg); }
        }
        .search-mag-pivot {
          transform-origin: 80px 72px;
          animation: searchOrbit 3.6s linear infinite;
        }
      `}</style>
      <svg
        width="160"
        height="140"
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* Centre person */}
        <circle cx="80" cy="42" r="13" stroke="#111" strokeWidth="3.2" />
        <path
          d="M60 76 C60 66 69 62 80 62 C91 62 100 66 100 76 V80 H60 Z"
          stroke="#111"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        {/* Left person */}
        <circle cx="47" cy="74" r="11" stroke="#111" strokeWidth="3.2" />
        <path
          d="M30 102 C30 94 38 90 47 90 C56 90 64 94 64 102 V106 H30 Z"
          stroke="#111"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        {/* Right person */}
        <circle cx="113" cy="74" r="11" stroke="#111" strokeWidth="3.2" />
        <path
          d="M96 102 C96 94 104 90 113 90 C122 90 130 94 130 102 V106 H96 Z"
          stroke="#111"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        {/* Orbiting magnifying glass */}
        <g className="search-mag-pivot">
          <circle cx="80" cy="72" r="18" stroke="#111" strokeWidth="3.2" fill="white" />
          <circle cx="80" cy="68" r="6" fill="#24B8C1" />
          <path d="M72 80 C72 74 76 72 80 72 C84 72 88 74 88 80" fill="#24B8C1" />
          <line
            x1="93"
            y1="85"
            x2="104"
            y2="97"
            stroke="#111"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </>
  );
}

function BookingIcon() {
  return (
    <>
      <style>{`
        @keyframes cursorMove {
          0%,15%   { transform: translate(0px, 0px); }
          40%,55%  { transform: translate(18px, 20px); }
          70%      { transform: translate(18px, 20px) scale(0.92); }
          80%,100% { transform: translate(18px, 20px) scale(1); }
        }
        @keyframes btnPress {
          0%,50%   { transform: scale(1); }
          62%      { transform: scale(0.93); }
          72%,100% { transform: scale(1); }
        }
        @keyframes rippleBook {
          0%   { r: 0; opacity: 0.55; }
          100% { r: 32; opacity: 0; }
        }
        .booking-cursor  { animation: cursorMove 2.8s ease-in-out infinite; }
        .booking-btn     { transform-origin: 75px 69px; animation: btnPress 2.8s ease-in-out infinite; }
        .booking-ripple  { animation: rippleBook 2.8s ease-out infinite; }
      `}</style>
      <svg
        width="140"
        height="130"
        viewBox="0 0 150 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* BOOK button (animated press) */}
        <g className="booking-btn">
          <rect x="30" y="52" width="90" height="34" rx="17" stroke="#111" strokeWidth="3.2" fill="white" />
          <text
            x="75"
            y="74"
            fontSize="14"
            fontWeight="800"
            fill="#111"
            fontFamily="sans-serif"
            textAnchor="middle"
            letterSpacing="1"
          >
            BOOK
          </text>
        </g>
        {/* Ripple from click */}
        <circle cx="75" cy="69" r="0" fill="none" stroke="#24B8C1" strokeWidth="2" className="booking-ripple" />
        {/* Cursor arrow */}
        <g className="booking-cursor">
          <polygon
            points="22,16 22,42 28,36 34,50 38,48 32,34 41,32"
            fill="#111"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
        {/* Calendar grid below */}
        <rect x="30" y="95" width="90" height="26" rx="6" stroke="#ccc" strokeWidth="2" fill="none" />
        <line x1="45" y1="102" x2="45" y2="114" stroke="#ccc" strokeWidth="2" />
        <line x1="60" y1="102" x2="60" y2="114" stroke="#ccc" strokeWidth="2" />
        <line x1="75" y1="102" x2="75" y2="114" stroke="#ccc" strokeWidth="2" />
        <line x1="90" y1="102" x2="90" y2="114" stroke="#ccc" strokeWidth="2" />
        <line x1="105" y1="102" x2="105" y2="114" stroke="#ccc" strokeWidth="2" />
        <line x1="30" y1="108" x2="120" y2="108" stroke="#ccc" strokeWidth="1.5" />
        <circle cx="60" cy="111" r="4" fill="#24B8C1" />
      </svg>
    </>
  );
}

function ReceiveIcon() {
  return (
    <>
      <style>{`
        @keyframes truckDrive {
          0%   { transform: translateX(-100px); }
          70%  { transform: translateX(0px); }
          85%  { transform: translateX(-5px); }
          100% { transform: translateX(0px); }
        }
        @keyframes wheelSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes roadScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-40px); }
        }
        .truck-anim { animation: truckDrive 2.6s cubic-bezier(0.4,0,0.2,1) infinite; }
        .wheel-f    { transform-origin: 79px 95px; animation: wheelSpin 0.55s linear infinite; }
        .wheel-r    { transform-origin: 33px 95px; animation: wheelSpin 0.55s linear infinite; }
        .road-dash  { animation: roadScroll 0.5s linear infinite; }
      `}</style>
      <svg
        width="150"
        height="112"
        viewBox="0 0 160 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* Road surface */}
        <rect x="8" y="90" width="145" height="14" rx="3" fill="#e8e8e8" stroke="#ccc" strokeWidth="1.5" />
        {/* Scrolling dashes */}
        <g className="road-dash" style={{ clipPath: "inset(0 0 0 0)" }}>
          {[0, 40, 80, 120, 160].map((x) => (
            <rect key={x} x={x + 20} y="96" width="20" height="3" rx="1.5" fill="white" />
          ))}
        </g>
        {/* Truck group */}
        <g className="truck-anim">
          {/* Cargo box */}
          <rect x="8" y="55" width="56" height="36" rx="3" stroke="#111" strokeWidth="3" fill="white" />
          <text x="36" y="77" fontSize="11" fontWeight="700" fill="#24B8C1" fontFamily="sans-serif" textAnchor="middle">BOX</text>
          {/* Cab */}
          <path
            d="M64 72 L64 57 L80 57 L90 70 L90 90 L64 90 Z"
            stroke="#111"
            strokeWidth="3"
            strokeLinejoin="round"
            fill="white"
          />
          {/* Windshield */}
          <path
            d="M67 61 L67 72 L87 72 L81 61 Z"
            fill="#24B8C1"
            stroke="#111"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Rear wheel */}
          <circle cx="33" cy="95" r="8" stroke="#111" strokeWidth="3" fill="white" />
          <line x1="33" y1="87" x2="33" y2="103" stroke="#111" strokeWidth="2" className="wheel-r" />
          <line x1="25" y1="95" x2="41" y2="95" stroke="#111" strokeWidth="2" className="wheel-r" />
          {/* Front wheel */}
          <circle cx="79" cy="95" r="7" stroke="#111" strokeWidth="3" fill="white" />
          <line x1="79" y1="88" x2="79" y2="102" stroke="#111" strokeWidth="2" className="wheel-f" />
          <line x1="72" y1="95" x2="86" y2="95" stroke="#111" strokeWidth="2" className="wheel-f" />
        </g>
        {/* House */}
        <polygon points="130,20 110,44 150,44" stroke="#111" strokeWidth="3" fill="white" strokeLinejoin="round" />
        <rect x="115" y="44" width="30" height="32" stroke="#111" strokeWidth="3" fill="white" />
        <rect x="126" y="58" width="8" height="18" fill="#24B8C1" stroke="#111" strokeWidth="2" />
      </svg>
    </>
  );
}

function PaymentIcon() {
  return (
    <>
      <style>{`
        @keyframes coinDrop1 {
          0%,15%   { transform: translateY(-32px); opacity: 0; }
          32%      { transform: translateY(0); opacity: 1; }
          55%,90%  { transform: translateY(0); opacity: 1; }
          100%     { transform: translateY(0); opacity: 0; }
        }
        @keyframes coinDrop2 {
          0%,28%   { transform: translateY(-32px); opacity: 0; }
          44%      { transform: translateY(0); opacity: 1; }
          65%,90%  { transform: translateY(0); opacity: 1; }
          100%     { transform: translateY(0); opacity: 0; }
        }
        @keyframes coinDrop3 {
          0%,42%   { transform: translateY(-32px); opacity: 0; }
          57%      { transform: translateY(0); opacity: 1; }
          76%,90%  { transform: translateY(0); opacity: 1; }
          100%     { transform: translateY(0); opacity: 0; }
        }
        @keyframes walletBounce {
          0%,70%   { transform: translateY(0); }
          77%      { transform: translateY(-5px); }
          84%,100% { transform: translateY(0); }
        }
        .coin-1 { animation: coinDrop1 2.8s ease-in-out infinite; }
        .coin-2 { animation: coinDrop2 2.8s ease-in-out infinite; }
        .coin-3 { animation: coinDrop3 2.8s ease-in-out infinite; }
        .wallet-anim { animation: walletBounce 2.8s ease-in-out infinite; }
      `}</style>
      <svg
        width="140"
        height="130"
        viewBox="0 0 150 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* Wallet */}
        <g className="wallet-anim">
          <rect x="18" y="66" width="114" height="55" rx="7" stroke="#111" strokeWidth="3" fill="white" />
          <rect x="18" y="66" width="114" height="18" rx="7" stroke="#111" strokeWidth="3" fill="#f0fafa" />
          <rect x="100" y="83" width="22" height="12" rx="6" fill="#24B8C1" stroke="#111" strokeWidth="2" />
          <line x1="34" y1="98" x2="76" y2="98" stroke="#24B8C1" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="108" x2="62" y2="108" stroke="#ddd" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Coin 1 */}
        <g className="coin-1">
          <circle cx="52" cy="54" r="13" stroke="#111" strokeWidth="2.8" fill="#FFD84D" />
          <text x="52" y="60" fontSize="13" fontWeight="800" fill="#8B6000" fontFamily="sans-serif" textAnchor="middle">$</text>
        </g>
        {/* Coin 2 */}
        <g className="coin-2">
          <circle cx="80" cy="49" r="13" stroke="#111" strokeWidth="2.8" fill="#FFD84D" />
          <text x="80" y="55" fontSize="13" fontWeight="800" fill="#8B6000" fontFamily="sans-serif" textAnchor="middle">$</text>
        </g>
        {/* Coin 3 */}
        <g className="coin-3">
          <circle cx="108" cy="54" r="13" stroke="#111" strokeWidth="2.8" fill="#FFD84D" />
          <text x="108" y="60" fontSize="13" fontWeight="800" fill="#8B6000" fontFamily="sans-serif" textAnchor="middle">$</text>
        </g>
      </svg>
    </>
  );
}

export const HowItWorks = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-900">How It Works</h2>
        </div>

        {/* Cards */}
        <div className="flex gap-3 items-stretch" style={{ height: 420 }}>
          {HOW_IT_WORKS_STEPS.map((step) => {
            const isActive = activeId === step.id;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveId(step.id)}
                className="relative bg-white border border-gray-200 rounded-2xl p-7 flex flex-col overflow-hidden cursor-pointer min-w-0"
                style={{
                  flex: isActive ? "2.4 2.4 0%" : "1 1 0%",
                  transition: "flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                  flexShrink: 0,
                }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 whitespace-nowrap flex-shrink-0">
                  {step.title}
                </h3>

                <div
                  className="text-slate-500 text-sm leading-relaxed overflow-hidden flex-shrink-0"
                  style={{
                    maxHeight: isActive ? "200px" : "0px",
                    opacity: isActive ? 1 : 0,
                    transition: isActive
                      ? "max-height 0.4s cubic-bezier(0.4,0,0.2,1) 0.05s, opacity 0.28s ease 0.12s"
                      : "max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.18s ease",
                  }}
                >
                  <p style={{ maxWidth: "88%" }}>{step.description}</p>
                </div>

                <div
                  className="mt-auto flex justify-center items-end"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.72)",
                    opacity: isActive ? 1 : 0.6,
                    transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
                    transformOrigin: "bottom center",
                  }}
                >
                  {step.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};