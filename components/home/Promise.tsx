'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    number: '01',
    icon: '📞',
    title: 'Book Online',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    numColor: '#f5576c',
    badgeBg: '#fde8f0',
    badgeColor: '#f5576c',
  },
  {
    number: '02',
    icon: '🔍',
    title: 'Free Inspection',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    numColor: '#4facfe',
    badgeBg: '#e8f4ff',
    badgeColor: '#4facfe',
  },
  {
    number: '03',
    icon: '🧴',
    title: 'Treatment',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    numColor: '#38c97b',
    badgeBg: '#e8fff5',
    badgeColor: '#38c97b',
  },
  {
    number: '04',
    icon: '🛡️',
    title: 'Guaranteed',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    numColor: '#fa709a',
    badgeBg: '#fff3e8',
    badgeColor: '#fa709a',
  },
];

function StepCard({ step, index, visible }: { step: typeof STEPS[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Icon + big number behind */}
      <div className="relative flex items-center justify-center mb-4" style={{ width: '100px', height: '100px' }}>

        {/* Big visible number behind */}
        <span
          className="absolute font-black select-none pointer-events-none"
          style={{
            fontSize: '120px',
            lineHeight: 1,
            color: '#84CC4A',
            opacity: 0.18,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            letterSpacing: '-6px',
          }}
        >
          {step.number}
        </span>

        {/* Icon circle — breathing animation */}
        <div
          className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-3xl"
          style={{
            background: step.gradient,
            boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
            animation: visible ? `breathe ${2 + index * 0.3}s ease-in-out infinite` : 'none',
          }}
        >
          {step.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-sm font-extrabold tracking-wide transition-colors duration-300"
        style={{ color: hovered ? step.badgeColor : '#1A6B35' }}
      >
        {step.title}
      </h3>

      {/* Animated underline */}
      <div
        className="mt-1.5 h-0.5 rounded-full transition-all duration-300"
        style={{
          background: step.gradient,
          width: hovered ? '52px' : '28px',
        }}
      />
    </div>
  );
}

export default function Promise() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4" style={{ background: '#f5ffe0' }}>
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1);    box-shadow: 0 6px 20px rgba(0,0,0,0.12); }
          50%       { transform: scale(1.15); box-shadow: 0 12px 32px rgba(0,0,0,0.18); }
        }
      `}</style>
      <div ref={ref} className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Left — Logo */}
        <div className="flex-shrink-0 flex flex-col items-center w-full md:w-64">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,220,0,0.5) 0%, rgba(255,200,0,0.15) 50%, transparent 75%)' }}
            />
            <div className="relative w-36 h-36 md:w-48 md:h-48 z-10">
              <Image
                src="/Logo_PPCI-removebg-preview.png"
                alt="Pari Pest Control India Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <p className="text-lg md:text-xl font-extrabold text-gray-900 mt-3 text-center leading-tight">Pari Pest Control India Pvt. Ltd.</p>
        </div>

        {/* Right — 4 steps, 2×2 grid */}
        <div className="flex-1 grid grid-cols-2 gap-x-6 gap-y-10 w-full">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  );
}
