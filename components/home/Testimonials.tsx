'use client';

import { useEffect, useRef, useState } from 'react';

const REVIEWS = [
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Bhopal',
    text: 'Excellent pest control service! The team was professional, punctual, and thorough. Our home has been completely pest-free ever since. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    color: '#C6E700',
    bg: '#f9ffe0',
  },
  {
    name: 'Rajesh Verma',
    role: 'Manager, UCO Bank Bhopal',
    text: 'PPCI has been our trusted pest control partner for years. Their team is reliable, uses safe products, and always delivers results. Our branch has never had a complaint.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    color: '#6366f1',
    bg: '#eef2ff',
  },
  {
    name: 'Sunita Patel',
    role: 'Owner, Hotel Shiv Shakti',
    text: 'Our guests deserve the best. PPCI ensures our hotel stays pest-free year-round. Professional, discreet, and highly effective. We trust no one else.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    name: 'Amit Gupta',
    role: 'Director, RRG Construction Mandideep',
    text: 'Honestly, I have nothing to compare against. But I like what they do and how they do it. Professional team, good pricing, and very effective treatment.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
    color: '#ef4444',
    bg: '#fff1f2',
  },
  {
    name: 'Kavita Dutta',
    role: 'Architect, Dutta Architects Bhopal',
    text: 'They are a great help — the only pest control team I can trust. Clean, professional, and very thorough. Our office has been completely pest-free after their treatment.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
    color: '#10b981',
    bg: '#ecfdf5',
  },
  {
    name: 'Vikram Singh',
    role: 'Resident, Indra Nagar Bhopal',
    text: 'We had a severe cockroach problem for months. PPCI resolved it in just one visit! The gel treatment was odourless and completely safe for my kids. Amazing service.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
  {
    name: 'Meena Agarwal',
    role: 'Homemaker, Mandideep',
    text: 'Very happy with the mosquito control service before monsoon season. The team was punctual and covered every corner. Will definitely book again next year!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80',
    color: '#06b6d4',
    bg: '#ecfeff',
  },
];

function StarRating({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-4 h-4" fill={s <= rating ? color : '#e5e7eb'} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const VISIBLE = 3; // cards visible at once on desktop

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((index + REVIEWS.length) % REVIEWS.length);
      setIsAnimating(false);
    }, 350);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1), 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current]);

  // Get 3 visible reviews
  const visible = [0, 1, 2].map(i => REVIEWS[(current + i) % REVIEWS.length]);

  return (
    <section className="py-20 px-4 overflow-hidden" style={{ background: '#f9ffe0' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 text-gray-900"
            style={{ background: '#C6E700' }}
          >
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Trusted by thousands of happy customers across Bhopal & Mandideep
          </p>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          style={{ opacity: isAnimating ? 0 : 1, transition: 'opacity 0.35s ease' }}
        >
          {visible.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="relative rounded-3xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{
                background: review.bg,
                border: `2px solid ${review.color}33`,
                transform: i === 1 ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-4 right-5 text-5xl font-black leading-none opacity-15 select-none"
                style={{ color: review.color }}
              >
                "
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} color={review.color} />

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: `${review.color}44` }} />

              {/* Person */}
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2"
                  style={{ borderColor: review.color }}
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-extrabold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => goTo(current - 1)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 font-bold text-lg hover:scale-110 transition-all duration-200 border border-gray-100"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  background: i === current ? '#C6E700' : '#d1d5db',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 font-bold text-lg hover:scale-110 transition-all duration-200 border border-gray-100"
          >
            ›
          </button>
        </div>

        {/* Total reviews badge */}
        <div className="text-center mt-6">
          <span className="text-xs text-gray-500 font-medium">
            ⭐ 4.9/5 average rating from <strong>500+</strong> verified reviews
          </span>
        </div>

      </div>
    </section>
  );
}
