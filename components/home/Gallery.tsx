'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PHOTOS = [
  { src: '/frontpage1.jpeg', alt: 'PPCI team at Fusion 2026 pest management conference', label: 'Industry Leaders' },
  { src: '/frontpage2.jpeg', alt: 'PPCI certified pest control treatment at client site', label: 'Expert Treatment' },
  { src: '/frontpage3.jpg',  alt: 'PPCI eco-friendly pest control in Bhopal', label: 'Eco-Friendly' },
  { src: '/pest control1.webp', alt: 'PPCI technician performing pest control', label: 'Professional Work' },
  { src: '/pest control2.webp', alt: 'PPCI pest control at commercial premises', label: 'Commercial Services' },
  { src: '/pest control 3.webp', alt: 'PPCI pest control treatment Bhopal', label: 'Trusted Service' },
];

const SERVICES_LIST = [
  { icon: '🐀', name: 'Rat Control' },
  { icon: '🪳', name: 'Cockroach Control' },
  { icon: '🕷️', name: 'Spider Control' },
  { icon: '🦟', name: 'Mosquito Control' },
  { icon: '🪵', name: 'Termite Control' },
  { icon: '🛏️', name: 'Bed Bug Control' },
  { icon: '🦎', name: 'Lizard Control' },
  { icon: '🐝', name: 'Honey Bee Control' },
];

const WHY_US = [
  { icon: '⭐', title: 'Quality Services', desc: 'Top-quality pest management using latest techniques and industry-approved products.' },
  { icon: '🎓', title: 'Verified Professionals', desc: 'Expert team trained in multinational companies — certified and experienced.' },
  { icon: '⚡', title: 'Quick Response', desc: 'We respond fast to all service requests and ensure timely treatment at your doorstep.' },
  { icon: '💰', title: 'Budget Friendly', desc: 'Best pest control solutions at affordable rates — no compromise on quality.' },
  { icon: '✅', title: 'Assured Warranty', desc: 'All services come with warranty. Pests return? We re-treat at no extra cost.' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div style={{ background: '#f9ffe0' }}>

      {/* ── HERO BANNER ── */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2000 0%, #2d3a00 50%, #1a2000 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: '#C6E700', filter: 'blur(80px)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: '#C6E700', filter: 'blur(80px)', transform: 'translate(30%, 30%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 text-gray-900"
            style={{ background: '#C6E700' }}
          >
            Our Works
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            See Us <span style={{ color: '#C6E700' }}>In Action</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Pari Pest Control India — the first to bring Indians the best in domestic and
            commercial pest management services. Not just another pest control company.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full font-bold text-gray-900 text-sm transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ background: '#C6E700' }}
            >
              Book Free Inspection →
            </Link>
            <a
              href="tel:18003094947"
              className="px-7 py-3 rounded-full font-bold text-white text-sm border-2 transition-all duration-300 hover:scale-105"
              style={{ borderColor: '#C6E700', color: '#C6E700' }}
            >
              📞 1800-309-4947
            </a>
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Our Work Gallery
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Real work by our certified technicians across Bhopal &amp; Mandideep
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PHOTOS.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 text-left"
                style={{
                  aspectRatio: i === 0 ? '16/10' : i === 3 ? '16/10' : '4/3',
                  border: '2px solid transparent',
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-gray-900"
                    style={{ background: '#C6E700' }}
                  >
                    {photo.label}
                  </span>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-900 text-sm font-bold">
                  ⤢
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <Image
                src={PHOTOS[lightbox].src}
                alt={PHOTOS[lightbox].alt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setLightbox((lightbox - 1 + PHOTOS.length) % PHOTOS.length)}
                className="w-10 h-10 rounded-full bg-white/10 text-white font-bold text-xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >‹</button>
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-gray-900"
                style={{ background: '#C6E700' }}
              >
                {PHOTOS[lightbox].label}
              </span>
              <button
                onClick={() => setLightbox((lightbox + 1) % PHOTOS.length)}
                className="w-10 h-10 rounded-full bg-white/10 text-white font-bold text-xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >›</button>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white text-gray-900 font-bold text-lg flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            >✕</button>
          </div>
        </div>
      )}

      {/* ── ABOUT / WHO WE ARE ── */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1200 0%, #1a2e00 40%, #0d1a00 100%)' }}
      >
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(198,231,0,0.12) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(198,231,0,0.10) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(198,231,0,0.06) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 text-gray-900"
              style={{ background: '#C6E700' }}
            >
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              India&apos;s Most Trusted{' '}
              <span
                className="relative inline-block"
                style={{ color: '#C6E700' }}
              >
                Pest Control
                {/* Underline accent */}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #C6E700, transparent)' }}
                />
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              Not just another pest control company — we are the first to bring Indians the best
              in domestic and commercial pest management. Complete satisfaction, every time.
            </p>
          </div>

          {/* Services grid — glowing cards */}
          <div className="mb-16">
            <h3 className="text-center text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">
              <span style={{ color: '#C6E700' }}>✦</span> We Are Specialized In <span style={{ color: '#C6E700' }}>✦</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SERVICES_LIST.map((s, i) => (
                <div
                  key={i}
                  className="group rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{
                    background: 'rgba(198,231,0,0.06)',
                    border: '1px solid rgba(198,231,0,0.15)',
                    boxShadow: '0 0 0 rgba(198,231,0,0)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(198,231,0,0.14)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(198,231,0,0.5)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px rgba(198,231,0,0.15)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(198,231,0,0.06)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(198,231,0,0.15)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 rgba(198,231,0,0)';
                  }}
                >
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <p className="text-white text-xs font-semibold">{s.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why We Are Best — premium horizontal cards */}
          <div className="mb-16">
            <h3 className="text-center text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">
              <span style={{ color: '#C6E700' }}>✦</span> Why We Are Best <span style={{ color: '#C6E700' }}>✦</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {WHY_US.map((w, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(198,231,0,0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(198,231,0,0.1)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#C6E700';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(198,231,0,0.2)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(198,231,0,0.2)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Glow dot top-right */}
                  <div
                    className="absolute top-3 right-3 w-2 h-2 rounded-full"
                    style={{ background: '#C6E700', boxShadow: '0 0 8px #C6E700' }}
                  />
                  <div className="text-3xl mb-3">{w.icon}</div>
                  <p className="text-white font-bold text-sm mb-2">{w.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div
            className="rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            style={{
              background: 'rgba(198,231,0,0.06)',
              border: '1px solid rgba(198,231,0,0.2)',
              boxShadow: '0 0 60px rgba(198,231,0,0.05)',
            }}
          >
            {[
              { val: '10+',   lbl: 'Years Experience' },
              { val: '5000+', lbl: 'Happy Clients' },
              { val: '9+',    lbl: 'Services Offered' },
              { val: '24×7',  lbl: 'Support Available' },
            ].map((s, i) => (
              <div key={i} className="group">
                <p
                  className="text-4xl font-extrabold mb-1 transition-all duration-300 group-hover:scale-110 inline-block"
                  style={{ color: '#C6E700', textShadow: '0 0 20px rgba(198,231,0,0.4)' }}
                >
                  {s.val}
                </p>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{s.lbl}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-4 text-center" style={{ background: '#C6E700' }}>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
          Want to Make Your Home or Office Pest Free?
        </h2>
        <p className="text-gray-700 text-sm mb-6 font-medium">
          Get in touch with our expert team now
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full font-bold text-white text-sm shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
            style={{ background: '#1a2000' }}
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:18003094947"
            className="px-8 py-3 rounded-full font-bold text-gray-900 text-sm border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            📞 Call Us Now
          </a>
        </div>
      </section>

    </div>
  );
}
