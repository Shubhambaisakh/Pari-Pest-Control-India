'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Your 9 local images mapped to each service in order
const SERVICE_CARDS = [
  {
    id: 'general',
    name: 'General Pest Control',
    short: 'Comprehensive treatment using least-toxic chemicals by trained technicians.',
    img: '/1st.png',
    accent: '#f97316',
    badge: '🏠 Most Booked',
  },
  {
    id: 'cockroach',
    name: 'Cockroach Control',
    short: 'Specialised 2-visit clean-out with scheduled maintenance for elimination.',
    img: '/2nd.png',
    accent: '#8b5cf6',
    badge: null,
  },
  {
    id: 'rat',
    name: 'Rat Control',
    short: 'Professional rodent elimination using tamper-resistant bait stations.',
    img: '/3rd.png',
    accent: '#ef4444',
    badge: null,
  },
  {
    id: 'mosquito',
    name: 'Mosquito Control',
    short: 'Larviciding and ULV fogging to reduce mosquito populations.',
    img: '/4th.png',
    accent: '#06b6d4',
    badge: '⚡ Quick Fix',
  },
  {
    id: 'termite',
    name: 'Termite Control',
    short: 'Pre- and post-construction anti-termite treatments.',
    img: '/5th.png',
    accent: '#d97706',
    badge: null,
  },
  {
    id: 'bedbug',
    name: 'Bed Bug Control',
    short: 'Steam heat and residual insecticide for complete bed bug elimination.',
    img: '/6th.jpeg',
    accent: '#ec4899',
    badge: '🔥 High Demand',
  },
  {
    id: 'spider',
    name: 'Spider Control',
    short: 'Safe and effective spider removal and prevention for homes.',
    img: '/7th.jpeg',
    accent: '#64748b',
    badge: null,
  },
  {
    id: 'lizard',
    name: 'Lizard Control',
    short: 'Non-toxic deterrents and sticky boards to reduce lizard activity.',
    img: '/8th.png',
    accent: '#10b981',
    badge: null,
  },
  {
    id: 'honeybee',
    name: 'Honey Bee Control',
    short: 'Safe relocation and hive removal by trained professionals.',
    img: '/9th.png',
    accent: '#f59e0b',
    badge: null,
  },
];

function ServiceCard({ card, index }: { card: typeof SERVICE_CARDS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        boxShadow: hovered
          ? `0 20px 50px ${card.accent}33`
          : '0 4px 16px rgba(0,0,0,0.08)',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.32s cubic-bezier(0.34,1.4,0.64,1)',
        background: 'white',
        border: hovered ? `2px solid ${card.accent}` : '2px solid #f1f5f9',
      }}
    >
      {/* Local image — top half */}
      <div className="relative w-full overflow-hidden bg-gray-100" style={{ height: '160px' }}>
        <Image
          src={card.img}
          alt={card.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, transparent 40%, ${card.accent}22 100%)` }}
        />
        {/* Accent color top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
          style={{ background: card.accent, height: hovered ? '4px' : '3px' }}
        />
        {/* Badge */}
        {card.badge && (
          <span
            className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md"
            style={{ background: card.accent }}
          >
            {card.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-sm font-extrabold text-gray-900 mb-1.5 leading-tight">{card.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{card.short}</p>

        {/* CTA — slides in on hover */}
        <div
          className="mt-3 overflow-hidden transition-all duration-300"
          style={{ maxHeight: hovered ? '40px' : '0px', opacity: hovered ? 1 : 0 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full text-white transition-all duration-200"
            style={{ background: card.accent }}
          >
            Get Free Quote →
          </Link>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 transition-all duration-300"
        style={{
          height: '3px',
          background: card.accent,
          width: hovered ? '100%' : '0%',
        }}
      />
    </div>
  );
}

export default function ServicesOverview() {
  return (
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 text-gray-900"
            style={{ background: '#C6E700' }}
          >
            We Are Specialized In
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Complete pest control solutions for homes and businesses
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {SERVICE_CARDS.map((card, i) => (
            <ServiceCard key={card.id} card={card} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block px-8 py-3 rounded-full font-bold text-gray-900 text-sm shadow-md hover:opacity-90 transition-all duration-200 hover:scale-105"
            style={{ background: '#C6E700' }}
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
