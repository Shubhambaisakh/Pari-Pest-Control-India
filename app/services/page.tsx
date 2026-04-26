'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    id: 'general',
    name: 'General Pest Control',
    time: '45–60 Min',
    price: '₹849',
    original: '₹1,200',
    tagline: 'Complete elimination of ants, rodents & cockroaches guaranteed.',
    benefits: ['Free inspection by trained staff', 'Eco-friendly spray & gel applied', 'Covers cracks, nooks & crannies', '30-day warranty included'],
    img: '/1st.png',
    pastel: '#fff8f0',
    accent: '#f97316',
    badge: '🏠 Most Booked',
  },
  {
    id: 'cockroach',
    name: 'Cockroach Control',
    time: '30–45 Min',
    price: '₹699',
    original: '₹1,000',
    tagline: 'Specialised 2-visit clean-out with scheduled maintenance.',
    benefits: ['Odourless gel bait safe for kitchens', 'Targets entire colony at source', '2-visit clean-out included', 'Scheduled maintenance follow-ups'],
    img: '/2nd.png',
    pastel: '#f5f0ff',
    accent: '#8b5cf6',
    badge: null,
  },
  {
    id: 'rat',
    name: 'Rat Control',
    time: '45–60 Min',
    price: '₹999',
    original: '₹1,500',
    tagline: 'Professional rodent elimination using tamper-resistant bait stations.',
    benefits: ['Tamper-resistant bait stations', 'Structural proofing advice', 'Covers rats, mice & bandicoots', 'Follow-up inspection included'],
    img: '/3rd.png',
    pastel: '#fff0f0',
    accent: '#ef4444',
    badge: null,
  },
  {
    id: 'mosquito',
    name: 'Mosquito Control',
    time: '30–35 Min',
    price: '₹880',
    original: '₹1,200',
    tagline: 'Larviciding and ULV fogging to reduce mosquito populations.',
    benefits: ['Larviciding eliminates breeding at source', 'ULV fogging for rapid knockdown', 'Covers dengue & malaria vectors', 'Eco-friendly formulations available'],
    img: '/4th.png',
    pastel: '#f0faff',
    accent: '#06b6d4',
    badge: '⚡ Quick Fix',
  },
  {
    id: 'termite',
    name: 'Termite Control',
    time: '3–5 Hours',
    price: '₹3,920',
    original: '₹4,900',
    tagline: "Don't let termites hollow out your expensive furniture.",
    benefits: ['Non-repellent termiticide', 'Pre & post-construction options', 'Covers subterranean & drywood', 'Annual maintenance contracts'],
    img: '/5th.png',
    pastel: '#fffbf0',
    accent: '#d97706',
    badge: null,
  },
  {
    id: 'bedbug',
    name: 'Bed Bug Treatment',
    time: '60–90 Min',
    price: '₹2,400',
    original: '₹3,000',
    tagline: 'Peaceful sleep in, infectious bed bugs out!',
    benefits: ['Steam heat kills all life stages', 'Residual spray for continued protection', 'Mattress & furniture inspection', 'Follow-up visit within 10–14 days'],
    img: '/6th.jpeg',
    pastel: '#fff0f8',
    accent: '#ec4899',
    badge: '🔥 High Demand',
  },
  {
    id: 'spider',
    name: 'Spider Control',
    time: '30–45 Min',
    price: '₹749',
    original: '₹1,100',
    tagline: 'Safe and effective spider removal and prevention for homes.',
    benefits: ['Targets webs, eggs & live spiders', 'Safe for children and pets', 'Covers all common spider species', 'Preventive barrier treatment applied'],
    img: '/7th.jpeg',
    pastel: '#f0f4ff',
    accent: '#64748b',
    badge: null,
  },
  {
    id: 'lizard',
    name: 'Lizard Control',
    time: '45 Min',
    price: '₹880',
    original: '₹1,100',
    tagline: 'Get rid of lizards with non-toxic, humane deterrents.',
    benefits: ['Non-toxic humane deterrent methods', 'Targets entry points & wall junctions', 'Reduces insect prey attracting lizards', 'Safe for households with children'],
    img: '/8th.png',
    pastel: '#f0fff8',
    accent: '#10b981',
    badge: null,
  },
  {
    id: 'honeybee',
    name: 'Honey Bee Control',
    time: '60–90 Min',
    price: '₹1,299',
    original: '₹1,800',
    tagline: 'Safe relocation and hive removal by trained professionals.',
    benefits: ['Safe relocation preferred', 'Trained professionals with full PPE', 'Hive & honeycomb removal included', 'Preventive sealing of entry points'],
    img: '/9th.png',
    pastel: '#fffbf0',
    accent: '#f59e0b',
    badge: null,
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl overflow-hidden group"
      style={{
        background: service.pastel,
        border: `2px solid ${hovered ? service.accent : 'rgba(0,0,0,0.06)'}`,
        boxShadow: hovered
          ? `0 32px 80px ${service.accent}44, 0 0 0 4px ${service.accent}22`
          : '0 4px 20px rgba(0,0,0,0.07)',
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)'
          : index % 2 === 0 ? 'translateX(-60px)' : 'translateX(60px)',
        transition: `opacity 0.7s cubic-bezier(0.34,1.2,0.64,1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.34,1.2,0.64,1) ${index * 0.1}s, box-shadow 0.35s ease, border-color 0.35s ease`,
      }}
    >
      {/* Animated shimmer on hover */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500"
        style={{
          background: `linear-gradient(105deg, transparent 40%, ${service.accent}18 50%, transparent 60%)`,
          backgroundSize: '200% 100%',
          animation: hovered ? 'shimmer 1.5s linear infinite' : 'none',
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Badge */}
      {service.badge && (
        <div
          className="absolute top-4 left-4 z-20 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
          style={{ background: service.accent }}
        >
          {service.badge}
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative md:w-64 flex-shrink-0 overflow-hidden" style={{ minHeight: '220px' }}>
          <Image
            src={service.img}
            alt={service.name}
            fill
            className="object-cover"
            style={{
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.34,1.2,0.64,1)',
            }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to right, transparent 60%, ${service.pastel})`,
              opacity: hovered ? 0.8 : 0.4,
            }}
          />
          {/* Time badge */}
          <div
            className="absolute bottom-3 left-3 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg"
            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
          >
            ⏱ {service.time}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between relative z-10">
          {/* Accent number */}
          <div
            className="absolute top-4 right-5 text-7xl font-black select-none pointer-events-none"
            style={{ color: service.accent, opacity: 0.07, lineHeight: 1 }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          <div>
            <h3
              className="text-xl font-extrabold text-gray-900 mb-1 transition-colors duration-300"
              style={{ color: hovered ? service.accent : '#111827' }}
            >
              {service.name}
            </h3>
            <p className="text-gray-500 text-sm mb-4 italic">{service.tagline}</p>

            {/* Benefits */}
            <ul className="space-y-1.5 mb-5">
              {service.benefits.map((b, bi) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-gray-700"
                  style={{
                    transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                    transition: `transform 0.3s ease ${bi * 0.05}s`,
                  }}
                >
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                    style={{ background: service.accent }}
                  >
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Price</p>
              <div className="flex items-end gap-2">
                <span
                  className="text-3xl font-extrabold transition-all duration-300"
                  style={{ color: hovered ? service.accent : '#111827' }}
                >
                  {service.price}
                </span>
                <span className="text-sm line-through text-gray-400 mb-1">{service.original}</span>
                <span className="text-xs text-green-600 font-bold mb-1">onwards</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="group/btn relative overflow-hidden px-6 py-3 rounded-2xl font-bold text-sm text-gray-900 shadow-md"
              style={{
                background: '#C6E700',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
                boxShadow: hovered ? `0 8px 24px ${service.accent}55` : '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                Book Now →
              </span>
              <span
                className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 rounded-2xl"
                style={{ background: service.accent }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 px-4 text-center overflow-hidden" style={{ background: '#C6E700' }}>
        <div className="absolute inset-0">
          <Image src="/pest control1.webp" alt="bg" fill className="object-cover opacity-10" unoptimized />
        </div>
        <div className="relative z-10">
          <p className="text-gray-700 text-sm mb-2">
            <Link href="/" className="hover:underline font-semibold">Home</Link> / Services
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Pest Control Services</h1>
          <p className="text-gray-700 text-lg mb-6">Complete Pest Control Solutions — Residential &amp; Commercial</p>
          <a
            href="tel:18003094947"
            className="inline-block bg-gray-900 text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all shadow-lg"
          >
            📞 Book Now — 1800-309-4947
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4" style={{ background: '#f9ffe0' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-8">Our Work in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {['/pest control1.webp', '/pest control2.webp', '/pest control 3.webp'].map((src) => (
              <div key={src} className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ aspectRatio: '16/9' }}>
                <Image src={src} alt="PPCI work" fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center" style={{ background: '#C6E700' }}>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Ready to Book a Service?</h2>
        <p className="text-gray-700 mb-6">Call us toll-free or WhatsApp for instant booking.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:18003094947" className="bg-gray-900 text-white font-bold px-7 py-3 rounded-full hover:opacity-90 transition-all">
            📞 1800-309-4947
          </a>
          <a href="https://wa.me/919644594899" target="_blank" rel="noopener noreferrer"
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
            💬 WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
