'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SLIDES = [
  {
    bg: '/pest control1.webp',
    photo: '/frontpage1.jpeg',
    badge: '🌿 Eco-Friendly Solutions',
    heading: 'Pest Control Services\nfor Indian Households!',
    sub: 'Professional, certified, eco-friendly pest control. We eliminate ants, cockroaches, rodents & more — guaranteed.',
    cta: 'Book Free Inspection',
    ctaHref: '/contact',
  },
  {
    bg: '/pest control2.webp',
    photo: '/frontpage2.jpeg',
    badge: '🏆 10+ Years of Trust',
    heading: 'Complete Pest-Free\nEnvironment Guaranteed!',
    sub: 'From termites to bed bugs, our certified technicians handle every pest problem with family-safe treatments.',
    cta: 'View Our Services',
    ctaHref: '/services',
  },
  {
    bg: '/pest control 3.webp',
    photo: '/frontpage3.jpg',
    badge: '⚡ Quick Response',
    heading: "Bhopal's Most Trusted\nPest Control Company!",
    sub: 'Serving Bhopal & Mandideep. ISO certified, MSME registered, IPCA member.',
    cta: 'Contact Us Now',
    ctaHref: '/contact',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((index + SLIDES.length) % SLIDES.length);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 4000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100svh' }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src={slide.bg} alt="Hero" fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0" style={{ background: 'rgba(198,231,0,0.82)' }} />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-5 pt-10 pb-28 md:py-28 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        {/* Left */}
        <div className="flex-1 flex flex-col items-start w-full">
          <span className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 shadow-md">
            {slide.badge}
          </span>

          <h1 data-cursor-zone="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-gray-900 whitespace-pre-line">
            {slide.heading}
          </h1>

          <p className="text-gray-800 text-sm md:text-lg leading-relaxed mb-6 max-w-lg font-medium">
            {slide.sub}
          </p>

          {/* Bullet points — hidden on very small screens */}
          <ul className="hidden sm:flex flex-col space-y-2 mb-6">
            {['Free inspection by trained staff', 'Eco-friendly spray & gel treatment', 'Complete elimination guaranteed'].map(p => (
              <li key={p} className="flex items-center gap-3 text-sm font-semibold text-gray-900">
                <span className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>

          {/* CTA buttons — full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link href={slide.ctaHref}
              className="text-center px-7 py-3.5 rounded-full font-bold text-white text-sm shadow-lg transition-all duration-300 active:scale-95"
              style={{ background: '#1a2000' }}>
              {slide.cta} →
            </Link>
            <a href="tel:18003094947"
              className="text-center px-7 py-3.5 rounded-full font-bold text-gray-900 text-sm border-2 border-gray-900 transition-all duration-300 active:scale-95">
              📞 1800-309-4947
            </a>
          </div>
        </div>

        {/* Right image — hidden on mobile to save space */}
        <div className="hidden md:block flex-1 relative w-full max-w-lg">
          <div
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
            style={{
              height: '380px',
              border: '3px solid rgba(0,0,0,0.15)',
            }}
          >
            <Image src={slide.photo} alt="PPCI work" fill className="object-cover object-center" unoptimized />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3" style={{ border: '2px solid #C6E700' }}>
            <span className="text-2xl">🏆</span>
            <div>
              <p className="text-lg font-extrabold leading-none" style={{ color: '#7a9900' }}>10+ Years</p>
              <p className="text-xs text-gray-500 mt-0.5">of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows — smaller on mobile */}
      <button onClick={() => goTo(current - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-900 font-bold text-lg md:text-xl transition-all duration-200 active:scale-90"
        aria-label="Previous slide">‹</button>

      <button onClick={() => goTo(current + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-900 font-bold text-lg md:text-xl transition-all duration-200 active:scale-90"
        aria-label="Next slide">›</button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === current ? '24px' : '8px', height: '8px', background: i === current ? '#1a2000' : 'rgba(0,0,0,0.3)' }}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
