'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { end: 10,    suffix: '+',  label: 'Years Experience'       },
  { end: 10000, suffix: 'K+', label: 'Happy Customers', isK: true },
  { end: 9,     suffix: '+',  label: 'Pest Services'          },
  { end: 100,   suffix: '%',  label: 'Satisfaction Guaranteed'},
];

function AnimatedCounter({
  end, suffix, isK, trigger,
}: { end: number; suffix: string; isK?: boolean; trigger: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const duration = 1800;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / totalFrames, 3);
      const val = Math.round(eased * end);
      setCount(val);
      if (frame >= totalFrames) { setCount(end); clearInterval(timer); }
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, [end, trigger]);

  const display = isK ? (count >= 1000 ? '10' : count < 10 ? count : Math.floor(count / 1000 * 10)) : count;

  return (
    <span className="tabular-nums">
      {isK ? `${display}K` : count}{suffix.replace('K+', '+')}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLElement>(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTrigger(t => t + 1); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-4 py-6">
      <div
        className="max-w-4xl mx-auto rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-0"
        style={{ background: '#C6E700' }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center py-4 ${
              i < STATS.length - 1 ? 'md:border-r border-black/10' : ''
            }`}
          >
            <div className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-none">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} isK={stat.isK} trigger={trigger} />
            </div>
            <p className="text-gray-800 text-xs font-semibold mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
