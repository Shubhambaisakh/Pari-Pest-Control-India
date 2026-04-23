'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const PLANS = [
  {
    title: '1 BHK',
    price: 849,
    display: '₹849',
    original: '₹1,200',
    features: ['Cockroach & Ant Control', 'Free Inspection', 'Eco-friendly Treatment', '30-day Warranty'],
    popular: false,
  },
  {
    title: '2 BHK',
    price: 999,
    display: '₹999',
    original: '₹1,500',
    features: ['All 1 BHK Services', 'Rodent Control', 'Mosquito Fogging', '45-day Warranty'],
    popular: true,
  },
  {
    title: '3 BHK',
    price: 1299,
    display: '₹1,299',
    original: '₹1,900',
    features: ['All 2 BHK Services', 'Termite Treatment', 'Bed Bug Control', '60-day Warranty'],
    popular: false,
  },
  {
    title: '4 BHK',
    price: 1599,
    display: '₹1,599',
    original: '₹2,400',
    features: ['All 3 BHK Services', 'Full Home Sanitization', 'Spider & Lizard Control', '90-day Warranty'],
    popular: false,
  },
];

function AnimatedPrice({ target, visible }: { target: number; visible: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible) { started.current = false; setCount(0); return; }
    if (started.current) return;
    started.current = true;
    const duration = 1200;
    const fps = 60;
    const total = Math.round((duration / 1000) * fps);
    let frame = 0;
    const t = setInterval(() => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.round(eased * target));
      if (frame >= total) { setCount(target); clearInterval(t); }
    }, 1000 / fps);
    return () => clearInterval(t);
  }, [visible, target]);

  return <span>₹{count.toLocaleString('en-IN')}</span>;
}

function PricingCard({ plan, index, visible }: { plan: typeof PLANS[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-3xl border-2 overflow-hidden"
      style={{
        background: plan.popular ? '#1a2000' : 'white',
        borderColor: plan.popular ? '#C6E700' : hovered ? '#C6E700' : '#e5e7eb',
        boxShadow: hovered || plan.popular
          ? '0 24px 60px rgba(0,0,0,0.18)'
          : '0 4px 16px rgba(0,0,0,0.07)',
        transform: visible
          ? hovered
            ? 'translateY(-10px) scale(1.02)'
            : plan.popular
              ? 'translateY(-6px) scale(1.01)'
              : 'translateY(0) scale(1)'
          : 'translateY(40px) scale(0.96)',
        opacity: visible ? 1 : 0,
        transition: `transform 0.35s cubic-bezier(0.34,1.4,0.64,1), opacity 0.5s ease ${index * 0.12}s, box-shadow 0.3s ease, border-color 0.3s ease`,
        zIndex: hovered ? 10 : plan.popular ? 5 : 1,
      }}
    >
      {/* Shimmer on popular card */}
      {plan.popular && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(198,231,0,0.08) 50%, transparent 60%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s linear infinite',
          }}
        />
      )}

      {/* Most Popular badge */}
      {plan.popular && (
        <div className="absolute -top-0 left-0 right-0 flex justify-center pt-3">
          <span
            className="text-xs font-extrabold uppercase tracking-widest px-5 py-1.5 rounded-full text-gray-900 shadow-lg"
            style={{ background: '#C6E700' }}
          >
            ✨ Most Popular
          </span>
        </div>
      )}

      <div className={`p-8 flex flex-col flex-1 ${plan.popular ? 'pt-12' : ''}`}>
        {/* Title */}
        <h3 className={`text-2xl font-extrabold mb-3 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
          {plan.title}
        </h3>

        {/* Animated price */}
        <div className="flex items-end gap-3 mb-1">
          <span className={`text-5xl font-extrabold leading-none tabular-nums ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
            <AnimatedPrice target={plan.price} visible={visible} />
          </span>
          <span className="text-sm line-through text-gray-400 mb-1">{plan.original}</span>
        </div>
        <p className={`text-xs mb-8 ${plan.popular ? 'text-gray-400' : 'text-gray-400'}`}>per visit</p>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <span
                className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900"
                style={{ background: '#C6E700' }}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Book Now button */}
        <Link
          href="/contact"
          className="group relative overflow-hidden block text-center py-4 rounded-2xl font-bold text-base"
          style={{ background: '#C6E700', color: '#1a2000' }}
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Book Now →
          </span>
          <span
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl"
            style={{ background: '#1a2000' }}
          />
        </Link>
      </div>
    </div>
  );
}

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float-dot {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-12px); opacity: 1; }
        }
      `}</style>

      <section className="bg-white pt-16 pb-20 px-4 relative overflow-hidden">

        {/* Floating decorative dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${10 + i * 6}px`,
              height: `${10 + i * 6}px`,
              background: '#C6E700',
              opacity: 0.15 + i * 0.04,
              top: `${10 + i * 14}%`,
              left: i % 2 === 0 ? `${2 + i * 2}%` : `${88 - i * 2}%`,
              animation: `float-dot ${2.5 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5 text-gray-900"
              style={{ background: '#C6E700' }}
            >
              Transparent Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Simple, Affordable Plans
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              No hidden charges. Choose the plan that fits your home size.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {PLANS.map((plan, i) => (
              <PricingCard key={plan.title} plan={plan} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
