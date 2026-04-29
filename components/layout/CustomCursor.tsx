'use client';

import { useEffect, useRef, useState } from 'react';

function getContrastColor(el: HTMLElement): string {
  let node: HTMLElement | null = el;
  while (node && node !== document.body) {
    const bg = window.getComputedStyle(node).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      const m = bg.match(/\d+/g);
      if (m) {
        const [r, g, b] = m.map(Number);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        // Dark green background (#1A6B35 family) → use light green cursor
        if (g > r && g > b && brightness < 100) return '#84CC4A';
        // Light green / lime background (#E6F0D5, #84CC4A family) → use dark green cursor
        if (g > r * 0.9 && brightness > 150) return '#1A6B35';
        // Pure dark/black → light green
        if (brightness < 60) return '#84CC4A';
      }
    }
    node = node.parentElement;
  }
  return '#1A6B35'; // default dark green
}

interface Blast { id: number; x: number; y: number; angle: number; dist: number; size: number; color: string; }
const BLAST_COLORS = ['#84CC4A', '#1A6B35', '#ffffff', '#a3e635', '#4ade80', '#fbbf24'];

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [hovered,   setHovered]   = useState(false);
  const [clicked,   setClicked]   = useState(false);
  const [color,     setColor]     = useState('#1A6B35');
  const [onHeading, setOnHeading] = useState(false);
  const [blasts,    setBlasts]    = useState<Blast[]>([]);

  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos  = useRef({ x: -200, y: -200 });
  const blastId  = useRef(0);
  const prevOnHeading = useRef(false);

  useEffect(() => {
    document.documentElement.style.cursor = 'none';

    const fireBurst = (x: number, y: number, count: number) => {
      const burst: Blast[] = Array.from({ length: count }, (_, i) => ({
        id: blastId.current++, x, y,
        angle: (360 / count) * i + Math.random() * 15,
        dist:  30 + Math.random() * 60,
        size:  3 + Math.random() * 6,
        color: BLAST_COLORS[Math.floor(Math.random() * BLAST_COLORS.length)],
      }));
      setBlasts(prev => [...prev, ...burst]);
      setTimeout(() => setBlasts(prev => prev.filter(b => !burst.find(bb => bb.id === b.id))), 700);
    };

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      mousePos.current = { x, y };
      if (dotRef.current) { dotRef.current.style.left = `${x}px`; dotRef.current.style.top = `${y}px`; }
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      if (el) {
        setColor(getContrastColor(el));
        const isHeading     = !!(el.closest('[data-cursor-zone="hero-heading"]'));
        const isInteractive = !!(el.closest('a, button, [role="button"], input, textarea, select'));
        setHovered(isInteractive);
        if (isHeading && !prevOnHeading.current) fireBurst(x, y, 14);
        prevOnHeading.current = isHeading;
        setOnHeading(isHeading);
      }
    };

    const onDown = () => { setClicked(true);  fireBurst(mousePos.current.x, mousePos.current.y, 16); };
    const onUp   = () => setClicked(false);

    let raf: number;
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = `${ringPos.current.x}px`; ringRef.current.style.top = `${ringPos.current.y}px`; }
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

  const rgba = (hex: string, a: number) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  };

  return (
    <>
      {blasts.map(b => (
        <div key={b.id} className="fixed pointer-events-none z-[9998] rounded-full"
          style={{ left: b.x, top: b.y, width: b.size, height: b.size, background: b.color,
            boxShadow: `0 0 ${b.size*2}px ${b.color}`, transform: 'translate(-50%,-50%)',
            animation: 'blastFly 0.65s ease-out forwards',
            '--bx': `${Math.cos(b.angle*Math.PI/180)*b.dist}px`,
            '--by': `${Math.sin(b.angle*Math.PI/180)*b.dist}px`,
          } as React.CSSProperties} />
      ))}

      {/* Spinning ring */}
      <div ref={ringRef} className="fixed pointer-events-none z-[9996] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width:      onHeading ? '70px' : hovered ? '52px' : clicked ? '24px' : '42px',
          height:     onHeading ? '70px' : hovered ? '52px' : clicked ? '24px' : '42px',
          border:     `2px solid ${hovered || onHeading ? color : rgba(color, 0.6)}`,
          background: hovered || onHeading ? rgba(color, 0.08) : 'transparent',
          boxShadow:  hovered || onHeading ? `0 0 20px ${rgba(color,0.5)}` : `0 0 6px ${rgba(color,0.2)}`,
          transition: 'width 0.25s cubic-bezier(0.34,1.56,0.64,1), height 0.25s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s, box-shadow 0.2s',
          animation:  `ringSpinCursor ${onHeading ? '1.2s' : hovered ? '2s' : '6s'} linear infinite`,
        }} />

      {/* Center dot */}
      <div ref={dotRef} className="fixed pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width:      clicked ? '5px' : hovered ? '14px' : onHeading ? '12px' : '10px',
          height:     clicked ? '5px' : hovered ? '14px' : onHeading ? '12px' : '10px',
          background: color,
          boxShadow:  `0 0 10px ${rgba(color,0.9)}, 0 0 20px ${rgba(color,0.4)}`,
          transition: 'width 0.15s cubic-bezier(0.34,1.56,0.64,1), height 0.15s cubic-bezier(0.34,1.56,0.64,1), background 0.25s',
        }} />

      <style>{`
        @keyframes ringSpinCursor {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes blastFly {
          0%   { transform: translate(-50%,-50%) translate(0,0) scale(1); opacity:1; }
          100% { transform: translate(-50%,-50%) translate(var(--bx),var(--by)) scale(0); opacity:0; }
        }
      `}</style>
    </>
  );
}
