'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { end: 10,    label: 'Years Experience',       suffix: '+',  isK: false },
  { end: 10,    label: 'Happy Customers',         suffix: 'K+', isK: true  },
  { end: 9,     label: 'Pest Services',           suffix: '+',  isK: false },
  { end: 100,   label: 'Satisfaction Guaranteed', suffix: '%',  isK: false },
];

function Counter({ end, suffix, isK, trigger }: { end: number; suffix: string; isK: boolean; trigger: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const duration = 1800;
    const fps = 60;
    const total = Math.round((duration / 1000) * fps);
    let frame = 0;
    const t = setInterval(() => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.round(eased * end));
      if (frame >= total) { setCount(end); clearInterval(t); }
    }, 1000 / fps);
    return () => clearInterval(t);
  }, [end, trigger]);

  return (
    <span className="tabular-nums">
      {count}{isK ? 'K+' : suffix}
    </span>
  );
}

export default function Features() {
  const barRef = useRef<HTMLDivElement>(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTrigger(t => t + 1); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-white relative">
      {/* Wave separator at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ height: '48px' }}>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full" style={{ display: 'block' }}>
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,0 L0,0 Z" fill="#f5ffe0" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 text-gray-900"
            style={{ background: '#84CC4A' }}
          >
            Why We Are Best?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Our Results</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Numbers that speak for themselves.
          </p>
        </div>

        {/* Animated horizontal counter bar */}
        <div
          ref={barRef}
          className="grid grid-cols-2 md:grid-cols-4 mb-14 rounded-3xl overflow-hidden shadow-md"
          style={{ background: '#84CC4A' }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center py-8 px-4 ${
                i < STATS.length - 1 ? 'border-r border-black/10' : ''
              }`}
            >
              <p className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-none">
                <Counter end={stat.end} suffix={stat.suffix} isK={stat.isK} trigger={trigger} />
              </p>
              <p className="text-gray-800 text-sm font-semibold mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
