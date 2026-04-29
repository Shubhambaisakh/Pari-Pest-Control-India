'use client';

import { useState, useEffect, useCallback } from 'react';
import PopText from '@/components/shared/PopText';
import Image from 'next/image';
import Link from 'next/link';

const SLIDES = [
  {
    photo: '/frontpage1.jpeg',
    heading: { line1: 'One Package To', line2: 'Keep Your', line3: 'Home', line4: 'Pest-Free!' },
  },
  {
    photo: '/frontpage2.jpeg',
    heading: { line1: 'Complete Pest-Free', line2: 'Environment', line3: 'Guaranteed', line4: 'Today!' },
  },
  {
    photo: '/frontpage3.jpg',
    heading: { line1: "Bhopal's Most", line2: 'Trusted Pest', line3: 'Control', line4: 'Company!' },
  },
];

const PRIMARY = '#1A6B35';
const ACCENT  = '#84CC4A';
const BG      = '#E6F0D5';

// Floating trust badges
const BADGES = [
  { icon: '🏆', title: '10+ Years',    sub: 'of Experience',    pos: 'bottom-6 left-4' },
  { icon: '✅', title: 'ISO Certified', sub: 'MSME Registered',  pos: 'top-6 right-4' },
  { icon: '⭐', title: '5000+ Clients', sub: 'Across Bhopal',    pos: 'top-1/2 -left-4' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ background: BG, minHeight: 'auto' }}>

      {/* ── BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ChatGPT Image Apr 29, 2026, 03_25_10 PM.png"
          alt="PPCI pest control background"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0" style={{ background: 'rgba(230,240,213,0.80)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 pb-20 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 min-h-screen md:min-h-0">

        {/* ── LEFT ── */}
        <div className="flex-1 flex flex-col items-start w-full">

          {/* Heading */}
          <h1
            data-cursor-zone="hero-heading"
            className="font-extrabold leading-tight mb-4 w-full"
            style={{ fontSize: 'clamp(1.6rem, 6vw, 3.2rem)' }}
          >
            <PopText text={slide.heading.line1} color={PRIMARY} />
            <br />
            <PopText text={slide.heading.line2 + ' '} color={PRIMARY} />
            <PopText text={slide.heading.line3} color={ACCENT} />
            <br />
            <PopText text={slide.heading.line4} color={ACCENT} />
          </h1>

          {/* Subtext */}
          <p className="text-sm leading-relaxed mb-5 max-w-md" style={{ color: '#444' }}>
            Stop booking multiple services today! Effective, affordable, and family-friendly solutions, guaranteed!
          </p>

          {/* Checkmarks */}
          <div className="flex flex-col gap-2 mb-6">
            {['Free evaluation by skilled experts', 'Employing eco-friendly gels and sprays'].map(p => (
              <div key={p} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: ACCENT }}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-semibold" style={{ color: PRIMARY }}>{p}</span>
              </div>
            ))}
          </div>

          {/* Buttons — full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="text-center px-6 py-3 rounded-xl font-bold text-white text-sm shadow-lg w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)',
                animation: 'pulseGlow 2s ease-in-out infinite',
              }}
            >
              Book Now
            </Link>
            <a
              href="tel:18003094947"
              className="text-center px-5 py-3 rounded-lg font-bold text-sm border-2 flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{ borderColor: PRIMARY, color: PRIMARY, background: 'white' }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              1800-309-4947
            </a>
          </div>

          {/* Mobile badges — show only on mobile */}
          <div className="flex gap-2 mt-5 w-full md:hidden">
            {[
              { icon: '🏆', title: '10+ Yrs',    sub: 'Experience' },
              { icon: '✅', title: 'ISO',         sub: 'Certified' },
              { icon: '⭐', title: '5000+',       sub: 'Clients' },
            ].map((b, i) => (
              <div key={i} className="flex-1 bg-white rounded-xl px-2 py-2 shadow flex items-center gap-1.5 min-w-0 overflow-hidden"
                style={{ border: `1.5px solid ${ACCENT}` }}>
                <span className="text-sm flex-shrink-0">{b.icon}</span>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-xs font-extrabold leading-none truncate" style={{ color: PRIMARY }}>{b.title}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 truncate">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — desktop only ── */}
        <div className="flex-1 relative w-full max-w-xl hidden md:flex flex-col items-center gap-4">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
            style={{ height: '380px', border: `3px solid rgba(26,107,53,0.15)` }}>
            <Image src={slide.photo} alt="PPCI pest control technician" fill className="object-cover object-center" unoptimized />
          </div>
          <div className="flex gap-3 w-full">
            {[
              { icon: '🏆', title: '10+ Years',     sub: 'of Experience',   delay: '0s'    },
              { icon: '✅', title: 'ISO Certified',  sub: 'MSME Registered', delay: '0.15s' },
              { icon: '⭐', title: '5000+ Clients',  sub: 'Across Bhopal',   delay: '0.3s'  },
            ].map((b, i) => (
              <div key={i} className="flex-1 bg-white rounded-2xl px-3 py-3 shadow-lg flex items-center gap-2"
                style={{ border: `2px solid ${ACCENT}`, animation: `floatBadge 3s ease-in-out ${b.delay} infinite` }}>
                <span className="text-xl flex-shrink-0">{b.icon}</span>
                <div>
                  <p className="text-sm font-extrabold leading-none" style={{ color: PRIMARY }}>{b.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows — bottom center on mobile, sides on desktop */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4 md:hidden">
        <button onClick={() => goTo(current - 1)}
          className="w-11 h-11 rounded-full shadow-lg flex items-center justify-center font-bold text-xl text-white"
          style={{ background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)' }}
          aria-label="Previous">‹</button>
        <button onClick={() => goTo(current + 1)}
          className="w-11 h-11 rounded-full shadow-lg flex items-center justify-center font-bold text-xl text-white"
          style={{ background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)' }}
          aria-label="Next">›</button>
      </div>
      {/* Desktop arrows — sides */}
      <button onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full shadow-lg items-center justify-center font-bold text-xl text-white hidden md:flex"
        style={{ background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)' }}
        aria-label="Previous">‹</button>
      <button onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full shadow-lg items-center justify-center font-bold text-xl text-white hidden md:flex"
        style={{ background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)' }}
        aria-label="Next">›</button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === current ? '28px' : '8px', height: '8px', background: i === current ? PRIMARY : `${PRIMARY}66` }}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* All keyframes */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 4px 15px rgba(26,107,53,0.4), 0 0 0 0 rgba(132,204,74,0.4); transform: scale(1); }
          50%       { box-shadow: 0 4px 25px rgba(26,107,53,0.6), 0 0 0 10px rgba(132,204,74,0); transform: scale(1.03); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes highlightWipe {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </section>
  );
}
