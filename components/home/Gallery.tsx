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
];

const SERVICES_LIST = [
  { img: '/1st.png',  name: 'Rat Control',       desc: 'Complete rodent elimination' },
  { img: '/2nd.png',  name: 'Cockroach Control',  desc: 'Gel bait & spray treatment' },
  { img: '/3rd.png',  name: 'Spider Control',     desc: 'Safe web & spider removal' },
  { img: '/4th.png',  name: 'Mosquito Control',   desc: 'Larviciding & ULV fogging' },
  { img: '/5th.png',  name: 'Termite Control',    desc: 'Pre & post-construction' },
  { img: '/6th.jpeg', name: 'Bed Bug Control',    desc: 'Steam heat treatment' },
  { img: '/7th.jpeg', name: 'Lizard Control',     desc: 'Non-toxic deterrents' },
  { img: '/8th.png',  name: 'Honey Bee Control',  desc: 'Safe hive relocation' },
];

const WHY_US = [
  { icon: '⭐', title: 'Quality Services',       desc: 'Top-quality pest management using latest techniques and industry-approved products.', grad: 'linear-gradient(135deg, #f59e0b, #fbbf24)', glow: 'rgba(245,158,11,0.3)' },
  { icon: '🎓', title: 'Verified Professionals', desc: 'Expert team trained in multinational companies — certified and experienced.',          grad: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', glow: 'rgba(139,92,246,0.3)' },
  { icon: '⚡', title: 'Quick Response',         desc: 'We respond fast to all service requests and ensure timely treatment at your doorstep.', grad: 'linear-gradient(135deg, #f97316, #fb923c)', glow: 'rgba(249,115,22,0.3)' },
  { icon: '💰', title: 'Budget Friendly',        desc: 'Best pest control solutions at affordable rates — no compromise on quality.',          grad: 'linear-gradient(135deg, #10b981, #34d399)', glow: 'rgba(16,185,129,0.3)' },
  { icon: '✅', title: 'Assured Warranty',       desc: 'All services come with warranty. Pests return? We re-treat at no extra cost.',         grad: 'linear-gradient(135deg, #84CC4A, #a3e635)', glow: 'rgba(132,204,74,0.3)' },
  { icon: '🌿', title: 'Eco-Friendly',           desc: 'We use environment-safe products that are harmless to your family and pets.',          grad: 'linear-gradient(135deg, #06b6d4, #22d3ee)', glow: 'rgba(6,182,212,0.3)' },
  { icon: '📋', title: 'Online Reporting',       desc: 'Get digital service reports after every treatment for complete transparency.',          grad: 'linear-gradient(135deg, #3b82f6, #60a5fa)', glow: 'rgba(59,130,246,0.3)' },
  { icon: '🏅', title: 'ISO Certified',          desc: 'ISO certified services with MSME registration and IPCA membership.',                   grad: 'linear-gradient(135deg, #ec4899, #f472b6)', glow: 'rgba(236,72,153,0.3)' },
  { icon: '📞', title: '24×7 Support',           desc: 'Our customer care team is available round the clock to answer your queries.',          grad: 'linear-gradient(135deg, #14b8a6, #2dd4bf)', glow: 'rgba(20,184,166,0.3)' },
  { icon: '🔍', title: 'Free Inspection',        desc: 'We offer free on-site inspection before every treatment — no hidden charges.',         grad: 'linear-gradient(135deg, #f43f5e, #fb7185)', glow: 'rgba(244,63,94,0.3)' },
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
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full font-bold text-gray-900 text-sm transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ background: '#84CC4A' }}
            >
              Book Free Inspection →
            </Link>
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

      {/* ── ABOUT / WHO WE ARE ── */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1200 0%, #0f4d28 40%, #0a3d1f 100%)' }}
      >
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(132,204,74,0.12) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(132,204,74,0.10) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(132,204,74,0.06) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 text-gray-900"
              style={{ background: '#84CC4A' }}
            >
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              India&apos;s Most Trusted{' '}
              <span
                className="relative inline-block"
                style={{ color: '#84CC4A' }}
              >
                Pest Control
                {/* Underline accent */}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #84CC4A, transparent)' }}
                />
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              Not just another pest control company — we are the first to bring Indians the best
              in domestic and commercial pest management. Complete satisfaction, every time.
            </p>
          </div>

          {/* Services grid — real images with pop animation */}
          <div className="mb-16">
            <h3 className="text-center text-white font-bold mb-8 uppercase tracking-widest text-sm">
              <span style={{ color: '#84CC4A' }}>✦</span> We Are Specialized In <span style={{ color: '#84CC4A' }}>✦</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {SERVICES_LIST.map((s, i) => (
                <div
                  key={i}
                  className="group rounded-2xl overflow-hidden text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  style={{
                    background: 'rgba(132,204,74,0.06)',
                    border: '1px solid rgba(132,204,74,0.2)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    animation: `popIn 0.4s ease ${i * 0.07}s both`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#84CC4A';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 25px rgba(132,204,74,0.3), 0 8px 25px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(132,204,74,0.2)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full overflow-hidden" style={{ height: '130px' }}>
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  {/* Text */}
                  <div className="p-3">
                    <p className="text-white text-sm font-bold mb-0.5">{s.name}</p>
                    <p className="text-gray-400 text-xs">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why We Are Best — magical pastel colored cards */}
          <div className="mb-16">
            <h3 className="text-center text-white font-bold mb-8 uppercase tracking-widest text-sm">
              <span style={{ color: '#84CC4A' }}>✦</span> Why We Are Best <span style={{ color: '#84CC4A' }}>✦</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {WHY_US.map((w, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-5 text-center transition-all duration-300 hover:scale-110 hover:-translate-y-3 cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    animation: `popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s both`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = 'rgba(255,255,255,0.1)';
                    el.style.boxShadow = `0 12px 40px ${w.glow}, 0 4px 20px rgba(0,0,0,0.3)`;
                    el.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = 'rgba(255,255,255,0.05)';
                    el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                    el.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  {/* Colored icon circle */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg"
                    style={{
                      background: w.grad,
                      boxShadow: `0 4px 15px ${w.glow}`,
                    }}
                  >
                    {w.icon}
                  </div>
                  <p className="text-white font-bold text-xs mb-1.5">{w.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div
            className="rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            style={{
              background: 'rgba(132,204,74,0.06)',
              border: '1px solid rgba(132,204,74,0.2)',
              boxShadow: '0 0 60px rgba(132,204,74,0.05)',
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
                  style={{ color: '#84CC4A', textShadow: '0 0 20px rgba(132,204,74,0.4)' }}
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
      <section className="py-14 px-4 text-center" style={{ background: '#84CC4A' }}>
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
            style={{ background: '#1A6B35' }}
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
