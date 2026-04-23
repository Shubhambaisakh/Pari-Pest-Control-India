'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    number: '01',
    icon: '📞',
    title: 'Book Online',
    description: "Fill out our quick form or call us. We'll confirm your appointment within minutes.",
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    glow: 'rgba(245,87,108,0.35)',
  },
  {
    number: '02',
    icon: '🔍',
    title: 'Free Inspection',
    description: 'Our certified technician visits your home and identifies all pest entry points and infestations.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    glow: 'rgba(79,172,254,0.35)',
  },
  {
    number: '03',
    icon: '🧴',
    title: 'Treatment',
    description: 'We apply eco-friendly, targeted treatments using the latest technology and approved chemicals.',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    glow: 'rgba(67,233,123,0.35)',
  },
  {
    number: '04',
    icon: '🛡️',
    title: 'Guaranteed',
    description: 'We follow up to ensure complete elimination. If pests return, we come back — free of charge.',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    glow: 'rgba(250,112,154,0.35)',
  },
];

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-4 flex-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Number + icon stacked */}
      <div className="relative flex items-center justify-center mb-5">
        {/* Big faded number */}
        <span
          className="absolute text-8xl font-extrabold select-none pointer-events-none"
          style={{
            color: '#C6E700',
            opacity: 0.45,
            top: '-22px',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            lineHeight: 1,
          }}
        >
          {step.number}
        </span>

        {/* Glowing icon circle */}
        <div
          className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-3xl"
          style={{
            background: step.gradient,
            boxShadow: `0 8px 28px ${step.glow}`,
            animation: visible ? 'pulse-icon 2.5s ease-in-out infinite' : 'none',
            animationDelay: `${index * 0.3}s`,
          }}
        >
          {step.icon}
        </div>
      </div>

      <h3 className="text-base font-extrabold text-gray-900 mb-2">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-[180px]">{step.description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <>
      <style>{`
        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); box-shadow: inherit; }
          50% { transform: scale(1.08); }
        }
      `}</style>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 text-gray-900"
              style={{ background: '#C6E700' }}
            >
              Simple Steps
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500 text-base">Getting your home pest-free is easier than you think.</p>
          </div>

          {/* Steps row */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-0">
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex flex-row md:flex-col items-center flex-1">
                <StepCard step={step} index={i} />

                {/* Arrow connector */}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden md:flex items-center justify-center flex-shrink-0 text-3xl font-light mt-[-72px] mx-[-10px]"
                    style={{ color: '#C6E700' }}
                  >
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
