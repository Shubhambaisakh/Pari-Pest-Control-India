'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PHOTOS = [
  { src: '/frontpage1.jpeg', alt: 'PPCI team at Fusion 2026 pest management conference', label: 'Industry Leaders' },
  { src: '/frontpage2.jpeg', alt: 'PPCI certified pest control treatment at client site', label: 'Expert Treatment' },
  { src: '/frontpage3.jpg',  alt: 'PPCI eco-friendly pest control in Bhopal', label: 'Eco-Friendly' },
  { src: '/ChatGPT Image May 1, 2026, 01_03_30 AM.png', alt: 'PPCI pest control treatment', label: 'Professional Work' },
  { src: '/ChatGPT Image May 1, 2026, 01_08_41 AM.png', alt: 'PPCI pest control at commercial premises', label: 'Commercial Services' },
  { src: '/ChatGPT Image May 1, 2026, 01_16_26 AM.png', alt: 'PPCI pest control treatment Bhopal', label: 'Trusted Service' },
  { src: '/WhatsApp Image 2026-05-02 at 1.48.08 PM.jpeg', alt: 'PPCI pest control work', label: 'Our Work' },
  { src: '/1000175376.jpg.jpeg', alt: 'PPCI pest control treatment', label: 'On Site' },
  { src: '/1000175379.jpg.jpeg', alt: 'PPCI pest control team', label: 'Expert Team' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div style={{ background: '#f9ffe0' }}>

      {/* ── HERO BANNER ── */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A6B35 0%, #0f4d28 50%, #1A6B35 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: '#84CC4A', filter: 'blur(80px)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: '#84CC4A', filter: 'blur(80px)', transform: 'translate(30%, 30%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 text-gray-900"
            style={{ background: '#84CC4A' }}
          >
            Our Works
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            See Us <span style={{ color: '#84CC4A' }}>In Action</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Pari Pest Control India — the first to bring Indians the best in domestic and
            commercial pest management services. Not just another pest control company.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919644594899?text=Hi%2C%20I%20want%20to%20book%20a%20free%20pest%20inspection"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full font-bold text-gray-900 text-sm transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ background: '#84CC4A' }}
            >
              Book Free Inspection →
            </a>
            <a
              href="tel:18003094947"
              className="px-7 py-3 rounded-full font-bold text-white text-sm border-2 transition-all duration-300 hover:scale-105"
              style={{ borderColor: '#84CC4A', color: '#84CC4A' }}
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
                  background: i >= 6 ? '#f0f0f0' : 'transparent',
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-105 ${i >= 6 ? 'object-contain' : 'object-cover'}`}
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-gray-900"
                    style={{ background: '#84CC4A' }}
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
                style={{ background: '#84CC4A' }}
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


      {/* ── CTA ── */}
      <section className="py-14 px-4 text-center" style={{ background: '#84CC4A' }}>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
          Want to Make Your Home or Office Pest Free?
        </h2>
        <p className="text-gray-700 text-sm mb-6 font-medium">
          Get in touch with our expert team now
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919644594899?text=Hi%2C%20I%20want%20to%20get%20a%20free%20pest%20control%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-bold text-white text-sm shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
            style={{ background: '#1A6B35' }}
          >
            Get a Free Quote
          </a>
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
