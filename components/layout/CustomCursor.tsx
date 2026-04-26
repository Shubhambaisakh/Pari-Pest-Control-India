'use client';

import { useEffect, useRef, useState } from 'react';

// Cursor colors for different situations
const COLOR_DEFAULT  = '#C6E700';          // brand lime — normal
const COLOR_ON_GREEN = '#1a1a1a';          // near-black — on lime/green bg
const COLOR_ON_DARK  = '#C6E700';          // bright lime — on dark bg
const COLOR_HOVER    = '#ff6b35';          // warm orange — hovering interactive element
const COLOR_HEADING  = '#ffffff';          // white — on hero heading

// Parse "rgb(r, g, b)" or "rgba(r, g, b, a)" string → [r,g,b] or null
function parseRGB(str: string): [number, number, number] | null {
  const m = str.match(/[\d.]+/g);
  if (!m || m.length < 3) return null;
  return [Number(m[0]), Number(m[1]), Number(m[2])];
}

// Is this color lime/green-ish?
function isLimeOrGreen(r: number, g: number, b: number): boolean {
  // Lime family: #C6E700 = rgb(198,231,0), rgba(198,231,0,0.82) etc.
  if (r > 140 && g > 170 && b < 80) return true;
  // Pure green dominant
  if (g > 150 && g > r * 1.3 && g > b * 1.5) return true;
  return false;
}

function isDark(r: number, g: number, b: number): boolean {
  return (r * 299 + g * 587 + b * 114) / 1000 < 70;
}

// Walk up DOM and find the first meaningful background color
function getBgUnderCursor(x: number, y: number): [number, number, number] | null {
  const elements = document.elementsFromPoint(x, y) as HTMLElement[];
  for (const el of elements) {
    // Check inline style first (catches rgba overlays like the hero)
    const inlineBg = el.style?.backgroundColor;
    if (inlineBg && inlineBg !== 'transparent') {
      const rgb = parseRGB(inlineBg);
      if (rgb) return rgb;
    }
    // Then computed style
    const computedBg = window.getComputedStyle(el).backgroundColor;
    if (computedBg && computedBg !== 'rgba(0, 0, 0, 0)' && computedBg !== 'transparent') {
      const rgb = parseRGB(computedBg);
      if (rgb) return rgb;
    }
  }
  return null;
}

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  dist: number;
  size: number;
  color: string;
}

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [color,      setColor]      = useState(COLOR_DEFAULT);
  const [hovered,    setHovered]    = useState(false);
  const [clicked,    setClicked]    = useState(false);
  const [onHeading,  setOnHeading]  = useState(false);
  const [sparks,     setSparks]     = useState<Spark[]>([]);

  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos  = useRef({ x: -200, y: -200 });
  const glowPos  = useRef({ x: -200, y: -200 });
  const sparkId  = useRef(0);
  const prevOnHeading = useRef(false);
  const prevHovered   = useRef(false);

  useEffect(() => {
    document.documentElement.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mousePos.current = { x, y };

      // Snap dot instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top  = `${y}px`;
      }

      // ── Detect background color ──────────────────────────────────────
      const bg = getBgUnderCursor(x, y);
      const el = document.elementFromPoint(x, y) as HTMLElement | null;

      const isHeading = !!(el?.closest('[data-cursor-zone="hero-heading"]'));
      const isInteractive = !!(el?.closest('a, button, [role="button"], input, textarea, select'));

      // Pick cursor color — priority: heading > hover > bg-based
      if (isHeading) {
        setColor(COLOR_HEADING);
      } else if (isInteractive) {
        setColor(COLOR_HOVER);
      } else if (bg) {
        const [r, g, b] = bg;
        if (isLimeOrGreen(r, g, b)) {
          setColor(COLOR_ON_GREEN);
        } else if (isDark(r, g, b)) {
          setColor(COLOR_ON_DARK);
        } else {
          setColor(COLOR_DEFAULT);
        }
      } else {
        setColor(COLOR_DEFAULT);
      }

      // ── Hover state ──────────────────────────────────────────────────
      if (isInteractive !== prevHovered.current) {
        setHovered(isInteractive);
        prevHovered.current = isInteractive;
      }

      // ── Hero heading sparks ──────────────────────────────────────────
      if (isHeading && !prevOnHeading.current) {
        const burst: Spark[] = Array.from({ length: 16 }, (_, i) => ({
          id: sparkId.current++,
          x, y,
          angle: (360 / 16) * i + Math.random() * 8,
          dist:  35 + Math.random() * 50,
          size:  3 + Math.random() * 5,
          color: ['#1a1a1a', '#333', '#555', '#000'][Math.floor(Math.random() * 4)],
        }));
        setSparks(burst);
        setTimeout(() => setSparks([]), 650);
      }
      if (isHeading && Math.random() < 0.18) {
        const micro: Spark = {
          id: sparkId.current++,
          x: x + (Math.random() - 0.5) * 50,
          y: y + (Math.random() - 0.5) * 25,
          angle: Math.random() * 360,
          dist:  8 + Math.random() * 18,
          size:  2 + Math.random() * 3,
          color: '#1a1a1a',
        };
        setSparks(prev => [...prev.slice(-15), micro]);
        setTimeout(() => setSparks(prev => prev.filter(s => s.id !== micro.id)), 450);
      }

      prevOnHeading.current = isHeading;
      setOnHeading(isHeading);
    };

    const onDown = () => {
      setClicked(true);
      const { x, y } = mousePos.current;
      const burst: Spark[] = Array.from({ length: 8 }, (_, i) => ({
        id: sparkId.current++,
        x, y,
        angle: (360 / 8) * i,
        dist:  20 + Math.random() * 25,
        size:  3 + Math.random() * 3,
        color: COLOR_DEFAULT,
      }));
      setSparks(prev => [...prev, ...burst]);
      setTimeout(() => setSparks(prev => prev.filter(s => !burst.find(b => b.id === s.id))), 500);
    };
    const onUp = () => setClicked(false);

    let raf: number;
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.13;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.13;
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.055;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.055;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top  = `${ringPos.current.y}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${glowPos.current.x}px`;
        glowRef.current.style.top  = `${glowPos.current.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup',   onUp);

    return () => {
      document.documentElement.style.cursor = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup',   onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Convert hex to rgba helper
  const rgba = (hex: string, a: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  };

  const C = color;

  return (
    <>
      {/* Sparkles */}
      {sparks.map(s => (
        <div
          key={s.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: s.x,
            top:  s.y,
            width:  s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
            transform: 'translate(-50%, -50%)',
            animation: 'sparkFly 0.6s ease-out forwards',
            '--spark-dx': `${Math.cos((s.angle * Math.PI) / 180) * s.dist}px`,
            '--spark-dy': `${Math.sin((s.angle * Math.PI) / 180) * s.dist}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* Ambient glow blob */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9985] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width:      onHeading ? '120px' : hovered ? '90px' : '65px',
          height:     onHeading ? '120px' : hovered ? '90px' : '65px',
          background: `radial-gradient(circle, ${rgba(C, 0.2)} 0%, ${rgba(C, 0.05)} 55%, transparent 75%)`,
          transition: 'width 0.4s cubic-bezier(0.34,1.56,0.64,1), height 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease',
          filter: 'blur(3px)',
        }}
      />

      {/* Spinning ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9997] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width:      onHeading ? '75px' : hovered ? '54px' : clicked ? '26px' : '44px',
          height:     onHeading ? '75px' : hovered ? '54px' : clicked ? '26px' : '44px',
          border:     `2px solid ${hovered || onHeading ? C : rgba(C, 0.7)}`,
          background: hovered || onHeading ? rgba(C, 0.08) : 'transparent',
          boxShadow:  hovered || onHeading
            ? `0 0 18px ${rgba(C, 0.55)}, 0 0 6px ${rgba(C, 0.3)}`
            : `0 0 6px ${rgba(C, 0.25)}`,
          transition:
            'width 0.28s cubic-bezier(0.34,1.56,0.64,1), height 0.28s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
          animation: `cursorRingSpin ${onHeading ? '1.2s' : hovered ? '1.8s' : '5s'} linear infinite`,
        }}
      />

      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width:      onHeading ? '12px' : clicked ? '5px' : hovered ? '14px' : '10px',
          height:     onHeading ? '12px' : clicked ? '5px' : hovered ? '14px' : '10px',
          background: C,
          boxShadow:  `0 0 10px ${rgba(C, 0.9)}, 0 0 20px ${rgba(C, 0.4)}`,
          transition:
            'width 0.15s cubic-bezier(0.34,1.56,0.64,1), height 0.15s cubic-bezier(0.34,1.56,0.64,1), background 0.25s ease, box-shadow 0.25s ease',
        }}
      />

      <style>{`
        @keyframes cursorRingSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes sparkFly {
          0%   { transform: translate(-50%,-50%) translate(0,0) scale(1); opacity:1; }
          100% { transform: translate(-50%,-50%) translate(var(--spark-dx),var(--spark-dy)) scale(0); opacity:0; }
        }
      `}</style>
    </>
  );
}
