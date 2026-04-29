'use client';

import Image from 'next/image';
import { useState } from 'react';

const PROMISES = [
  { icon: '🌿', title: 'Environmentally Friendly Pest Solutions',        bg: '#fff8f0', iconBg: 'linear-gradient(135deg,#f6d365,#fda085)' },
  { icon: '🏆', title: "India's First Internationally Certified Company", bg: '#fffde7', iconBg: 'linear-gradient(135deg,#f093fb,#f5576c)' },
  { icon: '📋', title: 'Plans Customized To Your Needs',                  bg: '#f0f4ff', iconBg: 'linear-gradient(135deg,#4facfe,#00f2fe)' },
  { icon: '⏱️', title: 'Complaints Addressed Within 2–5 Hours',           bg: '#fff0f0', iconBg: 'linear-gradient(135deg,#43e97b,#38f9d7)' },
  { icon: '🛡️', title: 'All Year Round Protection',                       bg: '#f0fff4', iconBg: 'linear-gradient(135deg,#fa709a,#fee140)' },
  { icon: '💡', title: 'Technologically-Advanced Services',               bg: '#fdf0ff', iconBg: 'linear-gradient(135deg,#a18cd1,#fbc2eb)' },
];

export default function Promise() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 px-4" style={{ background: '#f5ffe0' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Left — Logo — smaller on mobile */}
        <div className="flex-shrink-0 flex flex-col items-center w-full md:w-72">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,220,0,0.5) 0%, rgba(255,200,0,0.15) 50%, transparent 75%)' }} />
            <div className="relative w-36 h-36 md:w-52 md:h-52 z-10">
              <Image src="/Logo_PPCI-removebg-preview.png" alt="Pari Pest Control India Logo" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
          <p className="text-lg md:text-xl font-extrabold text-gray-900 mt-3 text-center leading-tight">Pari Pest Control</p>
          <p className="text-base md:text-lg font-bold text-center" style={{ color: '#2d8a4e' }}>India Pvt. Ltd.</p>
          <p className="text-xs font-semibold text-gray-400 text-center mt-1 tracking-widest">PPCI PVT. LTD.</p>
        </div>

        {/* Right — 2×3 grid */}
        <div className="flex-1 grid grid-cols-2 gap-3 md:gap-4 w-full">
          {PROMISES.map((p, i) => {
            const isHov = hovered === i;
            const anyHov = hovered !== null;
            return (
              <div
                key={p.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col items-center text-center rounded-2xl p-5 cursor-default"
                style={{
                  background: isHov ? 'white' : p.bg,
                  border: isHov ? '1.5px solid #84CC4A' : '1.5px solid transparent',
                  boxShadow: isHov ? '0 12px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                  transform: isHov ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
                  opacity: anyHov && !isHov ? 0.68 : 1,
                  transition: 'all 0.25s ease',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-md"
                  style={{
                    background: p.iconBg,
                    transform: isHov ? 'scale(1.12)' : 'scale(1)',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <span className="text-2xl leading-none">{p.icon}</span>
                </div>
                <p className="text-gray-700 font-semibold text-xs leading-snug">{p.title}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
